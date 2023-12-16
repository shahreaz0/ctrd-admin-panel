import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

import type { Program } from "@/types/program";
import { request } from "@/lib/axios";

function fn({ queryKey }: QueryFunctionContext<[string, number]>) {
  const programId = queryKey[1];
  return request
    .get<Program>(`/api/MustahikProgram/${programId}`)
    .then((res) => res.data);
}

export function useGetAllProgramDetails(programId: number) {
  return useQuery({
    queryKey: ["get-all-programs", programId],
    queryFn: fn,
  });
}
