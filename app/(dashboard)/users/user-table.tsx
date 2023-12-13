"use client";

import useGetAllUsers from "@/hooks/rq/users/use-get-all-users";
import { useDataTable } from "@/components/core/data-table/use-data-table";

import { columns } from "./columns";
import { UserTableToolbar } from "./user-table-toolbar";

export function UserTable() {
  const { data: users, isLoading } = useGetAllUsers();

  const { render, table } = useDataTable({
    data: users,
    columns: columns,
    loading: isLoading,
  });

  return (
    <section className="space-y-4">
      <UserTableToolbar table={table} />
      {render}
    </section>
  );
}
