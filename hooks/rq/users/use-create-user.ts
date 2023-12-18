import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

import { request } from "@/lib/axios";

function fn(payload: any) {
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
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        if (error.response?.data["DuplicateUserName"]) {
          return toast.error("Duplicate Username", {
            description: error.response?.data?.DuplicateUserName[0],
          });
        }
      }

      toast.error("Please Try Again", {
        description: "Something Went Wrong",
      });
    },
  });
}
