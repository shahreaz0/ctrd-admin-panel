import { Metadata } from "next";

import { UserNav } from "./user-nav";
import { UserTable } from "./user-table";

export const metadata: Metadata = {
  title: "Users",
  description: "Manage all users",
};

export default async function UsersPage() {
  return (
    <>
      <div className="relative   flex-1 flex-col space-y-8 md:flex">
        <div className="flex justify-between">
          <p className="text-lg font-medium">Users</p>
          <UserNav />
        </div>

        <UserTable />
      </div>
    </>
  );
}
