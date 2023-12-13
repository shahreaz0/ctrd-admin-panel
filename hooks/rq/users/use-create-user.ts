import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import type { User } from "@/types/user";
import { request } from "@/lib/axios";

function fn(payload: User) {
  return request.post("/api/Auth/Register", payload);
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fn,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-all-users"],
      });
    },
    onError: () => {
      toast.error("Please Try Again", {
        description: "Something Went Wrong",
      });
    },
  });
}
