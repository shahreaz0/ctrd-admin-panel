import axios from "axios";
import { deleteCookie } from "cookies-next";

const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

export const request = axios.create({
  baseURL: "https://api.citizentrustbd.org",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

request.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.clear();
      deleteCookie("token");
    }

    return Promise.reject(error);
  }
);
