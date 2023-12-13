import { useQuery } from "@tanstack/react-query";

import type { Program } from "@/types/program";
import { request } from "@/lib/axios";

function fn() {
  return request.get<Program[]>("/api/MustahikProgram/All").then((res) => res.data);
}

export function useGetAllPrograms() {
  return useQuery({
    queryKey: ["get-all-programs"],
    queryFn: fn,
  });
}
