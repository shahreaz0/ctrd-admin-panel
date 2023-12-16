import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { request } from "@/lib/axios";

type Payload = {
  id: number;
  data: any;
};

function fn(payload: Payload) {
  return request.put(`/api/MustahikProgram/${payload.id}`, payload.data);
}

export function useUpdateProgram() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fn,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-all-programs"],
      });
    },
    onError: () => {
      toast.error("Please Try Again", {
        description: "Something Went Wrong",
      });
    },
  });
}
