import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

import { request } from "@/lib/axios";

function fn({ queryKey }: QueryFunctionContext<[string, number]>) {
  const programId = queryKey[1];
  return request.get(`/api/MustahikProgram/${programId}`);
}

export function useGetAllProgramDetails(programId: number) {
  return useQuery({
    queryKey: ["get-all-programs", programId],
    queryFn: fn,
  });
}
