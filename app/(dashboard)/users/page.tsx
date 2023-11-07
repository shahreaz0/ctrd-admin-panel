import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";

import { User } from "@/types/user";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { UserNav } from "./components/user-nav";

export const metadata: Metadata = {
  title: "Users",
  description: "Manage all users",
};

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/(dashboard)/users/data/users.json")
  );

  return JSON.parse(data.toString()) as User[];
}

export default async function TaskPage() {
  const users = await getTasks();

  return (
    <>
      <div className="relative   flex-1 flex-col space-y-8 px-8 md:flex">
        <div className="flex justify-between">
          <p className="text-lg font-medium">Users</p>
          <UserNav />
        </div>
        <DataTable data={users} columns={columns} />
      </div>
    </>
  );
}
