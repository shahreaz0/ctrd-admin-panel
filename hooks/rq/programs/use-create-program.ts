import { useMutation } from "@tanstack/react-query";

import { request } from "@/lib/axios";

function fn(payload: any) {
  return request.post("/api/MustahikProgram", payload);
}

export function useCreateProgram() {
  return useMutation({
    mutationFn: fn,
  });
}
