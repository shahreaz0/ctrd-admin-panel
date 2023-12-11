import { useMutation } from "@tanstack/react-query";

import { request } from "@/lib/axios";

type Payload = {
  id: number;
  data: any;
};

function fn(payload: Payload) {
  return request.put(`/api/Mustahik/${payload.id}`, payload.data);
}

export function useUpdateMustahik() {
  return useMutation({
    mutationFn: fn,
  });
}
