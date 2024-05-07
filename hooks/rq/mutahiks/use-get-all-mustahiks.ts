import {
  keepPreviousData,
  useQuery,
  type QueryFunctionContext,
} from "@tanstack/react-query";

// MustahikWithProgramName
import type { Mustahik } from "@/types/mustahik";
import { request } from "@/lib/axios";
import {
  MustahikFilters,
  useMustahikFilters,
} from "@/components/mustahik-filters-provider";

// import { useGetAllPrograms } from "../programs/use-get-all-programs";

function fetcher({ queryKey }: QueryFunctionContext<[string, MustahikFilters]>) {
  const filters = queryKey[1];

  return request
    .get<Mustahik[]>(`/api/Mustahik`, {
      params: filters,
      paramsSerializer: {
        indexes: null,
      },
    })
    .then((res) => res.data);
}

export function useGetAllMustahiks() {
  // const { data: programs } = useGetAllPrograms();

  const { mustahikFilters } = useMustahikFilters();

  return useQuery({
    queryKey: ["get-all-mustahiks", mustahikFilters],
    queryFn: fetcher,
    placeholderData: keepPreviousData,
    select: (data) => {
      // const response = [] as MustahikWithProgramName[];

      // for (let mustahik of data) {
      //   for (let program of programs || []) {
      //     if (mustahik.programId === program.id) {
      //       response.push({
      //         ...mustahik,
      //         programName: program.name,
      //       });
      //     }
      //   }
      // }

      return data.map((e) => ({
        ...e,
        condition: String(e.condition),
        gender: String(e.gender),
        acceptanceStatus: String(e.acceptanceStatus),
      }));
    },
  });
}
