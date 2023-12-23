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
      if (data.passwordSetupRequired) {
        toast.success("Check Your Email", {
          description: "Please setup your password.",
        });

        return;
      }

      localStorage.setItem("name", data.fullName);
      localStorage.setItem("email", data.email);
      localStorage.setItem("token", data.token);

      // eslint-disable-next-line no-unused-vars
      const { token, ...rest } = data;

      localStorage.setItem("info", JSON.stringify(rest));

      toast.success("Welcome Back!", {
        description: "You have successfully logged in.",
      });

      setCookie("token", data.token);

      window.location.href = "/dashboard";
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
      }
    },
  });
}
