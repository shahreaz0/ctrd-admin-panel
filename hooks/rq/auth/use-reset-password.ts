import { useMutation } from "@tanstack/react-query";
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
    onSuccess: () => {
      toast.success("Success", {
        description: "Successfully reset password",
      });

      window.location.href = "/login";
    },
    onError: () => {
      toast.error("Try Again", {
        description: "Something went wrong",
      });
    },
  });
}
