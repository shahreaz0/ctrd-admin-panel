import { useMutation } from "@tanstack/react-query";

import { request } from "@/lib/axios";

function fn(mustahikId: number) {
  return request.delete(`"/api/Mustahik/${mustahikId}`);
}

export function useDeleteMustahik() {
  return useMutation({
    mutationFn: fn,
  });
}
