"use client";

import useGetAllUsers from "@/hooks/rq/users/get-all-users";

import { columns } from "./columns";
import DataTable from "./data-table";

export default function ApplicantTable() {
  const { data: users, isLoading } = useGetAllUsers();

  console.log(users);

  return <DataTable data={users} columns={columns} loading={isLoading} />;
}
