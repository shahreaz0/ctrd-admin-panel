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
    select: (data) => {
      return data.map((e) => ({
        ...e,
        condition: String(e.condition),
        gender: String(e.condition),
        status: String(e.status),
      }));
    },
  });
}
