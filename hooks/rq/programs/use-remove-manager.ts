import { useMutation } from "@tanstack/react-query";

import { request } from "@/lib/axios";

type Payload = {
  programId: number;
  userId: string;
};

function fn(payload: Payload) {
  return request.post("/api/MustahikProgram/RemoveManager", payload);
}

export function useRemoveManager() {
  return useMutation({
    mutationFn: fn,
  });
}
