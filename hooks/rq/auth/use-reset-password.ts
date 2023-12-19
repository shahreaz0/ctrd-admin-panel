import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { request } from "@/lib/axios";

type Payload = {
  token: string;
  email: string;
  newPassword: string;
};
function fn(payload: Payload) {
  return request.post("/api/Auth/ResetPassword", payload);
}

export function useResetPassword() {
  return useMutation({
    mutationKey: ["reset-passoword"],
    mutationFn: fn,
    onSuccess: (data) => {
      console.log(data);

      toast.success("Success", {
        description: "Successfully reset password",
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
