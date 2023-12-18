import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { request } from "@/lib/axios";

type Payload = {
  id: number;
  data: any;
};

function fn(payload: Payload) {
  return request.put(`/api/Mustahik/${payload.id}`, payload.data);
}

export function useUpdateMustahik() {
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
