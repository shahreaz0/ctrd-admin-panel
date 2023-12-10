import { useQuery } from "@tanstack/react-query";

import { request } from "@/lib/axios";

function fn() {
  return request.get("/api/MustahikProgram/All");
}

export function useGetAllPrograms() {
  return useQuery({
    queryKey: ["get-all-programs"],
    queryFn: fn,
  });
}
