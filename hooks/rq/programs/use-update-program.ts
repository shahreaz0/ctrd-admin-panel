import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { request } from "@/lib/axios";

function fn(payload: any, programId: number) {
  return request.put(`/api/MustahikProgram/${programId}`, payload);
}

export function useUpdateProgram(programId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [programId],
    mutationFn: (payload: any) => fn(payload, programId),
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
