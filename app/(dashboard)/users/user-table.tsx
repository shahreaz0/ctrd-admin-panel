"use client";

import useGetAllUsers from "@/hooks/rq/users/get-all-users";
import { useDataTable } from "@/components/core/data-table/use-data-table";

import { columns } from "./columns";

export function UserTable() {
  const { data: users, isLoading } = useGetAllUsers();

  const { render } = useDataTable({
    data: users,
    columns: columns,
    loading: isLoading,
  });

  return <section>{render}</section>;
}
