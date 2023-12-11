import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { setCookie } from "cookies-next";
import { toast } from "sonner";

import { request } from "@/lib/axios";

type Payload = {
  email: string;
  password: string;
};
function fn(payload: Payload) {
  return request.post("/api/Auth/Login", payload).then((res) => res.data);
}

export function useLogin() {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: fn,
    onSuccess: (data) => {
      toast.success("Welcome Back!", {
        description: "You have successfully logged in.",
      });

      if (typeof window !== "undefined") {
        localStorage.setItem("name", data.fullName);
        localStorage.setItem("email", data.email);
      }

      setCookie("token", data.token);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error?.response?.status === 401) {
          return toast.error("Try Again", {
            description: "Wrong email or password",
          });
        }

        if (error?.response?.status === 500) {
          return toast.error("Try Again", {
            description: "Server is down!, Network Error",
          });
        }

        if (error.request) {
          toast.error("No Internet", {
            description: "Check your internet connection",
          });
        }
      }
    },
  });
}
