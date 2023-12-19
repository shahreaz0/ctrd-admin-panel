import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { request } from "@/lib/axios";

type Payload = {
  token: string;
  email: string;
  newPassword: string;
};
function fn(payload: Payload) {
  return request.post("/api/Auth/SetupPassword", payload);
}

export function useSetupPassword() {
  return useMutation({
    mutationKey: ["setup-passoword"],
    mutationFn: fn,
    onSuccess: () => {
      toast.success("Success", {
        description: "Successfully setup password",
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
