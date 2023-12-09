"use client";

import { useGetAllMustahiks } from "@/hooks/rq/mutahiks/use-get-all-mustahiks";
import { useDataTable } from "@/components/core/data-table/use-data-table";

import { columns } from "./columns";
import { TableToolbar } from "./table-toolbar";

export function ApplicantTable() {
  const { data: mustahiks, isLoading } = useGetAllMustahiks();

  const { render, table } = useDataTable({
    data: mustahiks,
    columns: columns,
    loading: isLoading,
  });

  return (
    <section className="space-y-4">
      <TableToolbar table={table} />
      {render}
    </section>
  );
}
