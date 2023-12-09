import { Metadata } from "next";

import { ApplicantTable } from "./applicant-table";
import UserNav from "./user-nav";

export const metadata: Metadata = {
  title: "Applicants",
  description: "Manage all applicants",
};

export default async function TaskPage() {
  return (
    <>
      <div className="relative   flex-1 flex-col space-y-8 md:flex">
        <div className="flex justify-between">
          <p className="text-lg font-medium">Applicants</p>
          <UserNav />
        </div>

        <ApplicantTable />
      </div>
    </>
  );
}
