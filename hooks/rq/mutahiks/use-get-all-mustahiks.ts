import { useQuery } from "@tanstack/react-query";

import type { Mustahik } from "@/types/mustahik";
import { request } from "@/lib/axios";

function fetcher() {
  return request.get<Mustahik[]>("/api/Mustahik").then((res) => res.data);
}

export function useGetAllMustahiks() {
  return useQuery({
    queryKey: ["get-all-mustahiks"],
    queryFn: fetcher,
  });
}
