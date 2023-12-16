import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { request } from "@/lib/axios";

type Payload = {
  programId: number;
  userId: string;
};

function fn(payload: Payload) {
  return request.post("/api/MustahikProgram/RemoveWorker", payload);
}

export function useRemoveWorker() {
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
