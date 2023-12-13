import { Metadata } from "next";

import { ApplicantNav } from "./applicant-nav";
import { ApplicantTable } from "./applicant-table";

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
          <ApplicantNav />
        </div>

        <ApplicantTable />
      </div>
    </>
  );
}
