import { useQuery } from "@tanstack/react-query";

import type { Mustahik, MustahikWithProgramName } from "@/types/mustahik";
import { request } from "@/lib/axios";

import { useGetAllPrograms } from "../programs/use-get-all-programs";

function fetcher() {
  return request.get<Mustahik[]>("/api/Mustahik").then((res) => res.data);
}

export function useGetAllMustahiks() {
  const { data: programs } = useGetAllPrograms();

  return useQuery({
    queryKey: ["get-all-mustahiks"],
    queryFn: fetcher,
    select: (data) => {
      const response = [] as MustahikWithProgramName[];

      for (let mustahik of data) {
        for (let program of programs || []) {
          if (mustahik.programId === program.id) {
            response.push({
              ...mustahik,
              programName: program.name,
            });
          }
        }
      }

      return response.map((e) => ({
        ...e,
        condition: String(e.condition),
        gender: String(e.condition),
        acceptanceStatus: String(e.acceptanceStatus),
      }));
    },
  });
}
