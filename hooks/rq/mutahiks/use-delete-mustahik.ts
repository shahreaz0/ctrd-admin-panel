import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { request } from "@/lib/axios";

function fn(mustahikId: number) {
  console.log(mustahikId);

  return request.delete(`/api/Mustahik/${mustahikId}`);
}

export function useDeleteMustahik() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fn,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-all-mustahiks"],
      });
    },
    onError: () => {
      toast.error("Please Try Again", {
        description: "Something Went Wrong",
      });
    },
  });
}
