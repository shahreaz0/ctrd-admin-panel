import { useMutation } from "@tanstack/react-query";

import { request } from "@/lib/axios";

type Payload = {
  id: number;
  data: any;
};

function fn(payload: Payload) {
  return request.put(`/api/MustahikProgram/${payload.id}`, payload.data);
}

export function useUpdateProgram() {
  return useMutation({
    mutationFn: fn,
  });
}
