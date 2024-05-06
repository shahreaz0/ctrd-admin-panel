import { useMutation } from "@tanstack/react-query";

import { request } from "@/lib/axios";
import { MustahikFilters } from "@/components/mustahik-filters-provider";

function fetcher(payload: Omit<MustahikFilters, "searchName" | "page" | "pageSize">) {
  return request.post("/api/Mustahik/export", payload).then((res) => res.data);
}

export function useExportMustahiks() {
  return useMutation({
    mutationKey: ["export-mustahik"],
    mutationFn: fetcher,
  });
}
