import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { UserNav } from "./components/user-nav";
import { taskSchema } from "./data/schema";

export const metadata: Metadata = {
  title: "Users",
  description: "Manage all users",
};

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/(dashboard)/tasks/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <>
      <div className="relative hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex justify-between">
          <p className="text-lg font-medium">Users</p>
          <UserNav />
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
