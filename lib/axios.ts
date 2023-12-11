import axios from "axios";
import { getCookie } from "cookies-next";

export const request = axios.create({
  baseURL: "http://api.citizentrustbd.org",
});

if (getCookie("token")) {
  request.defaults.headers.common["Authorization"] = "Bearer " + getCookie("token");
}
