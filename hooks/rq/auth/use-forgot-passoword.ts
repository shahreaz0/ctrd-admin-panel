import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { request } from "@/lib/axios";

type Payload = {
  email: string;
};
function fn(payload: Payload) {
  return request.post("/api/Auth/ForgotPassword", payload);
}

export function useForgotPassword() {
  return useMutation({
    mutationKey: ["forgot-passoword"],
    mutationFn: fn,
    onSuccess: () => {
      toast.success("Check email", {
        description: "A email has been sent",
      });
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
