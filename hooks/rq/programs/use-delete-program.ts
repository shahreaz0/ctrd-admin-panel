import { useMutation } from "@tanstack/react-query";

import { request } from "@/lib/axios";

function fn(programId: number) {
  return request.delete(`"/api/MustahikProgram/${programId}`);
}

export function useDeleteProgram() {
  return useMutation({
    mutationFn: fn,
  });
}
