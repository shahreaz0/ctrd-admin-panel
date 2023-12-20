"use client";

import { useGetAllMustahiks } from "@/hooks/rq/mutahiks/use-get-all-mustahiks";

export function countBy(arr: string[] | undefined) {
  if (arr === undefined) return { Accepted: 0, Rejected: 0, Pending: 0 };

  const occurrences = {} as any;
  for (let i = 0, j = arr.length; i < j; i++) {
    occurrences[arr[i]] = (occurrences[arr[i]] || 0) + 1;
  }

  return occurrences;
}

export default function Stats() {
  const { data: mustahiks } = useGetAllMustahiks();

  const ACCEPTANCE_STATUS = {
    "0": "Pending",
    "1": "Accepted",
    "2": "Rejected",
  };

  const statuses = mustahiks?.map(
    (e) => ACCEPTANCE_STATUS[e.acceptanceStatus as keyof typeof ACCEPTANCE_STATUS]
  );

  const stats = countBy(statuses);

  console.log(stats);

  return (
    <section className="grid grid-cols-3 gap-8">
      <div className="border-r text-center">
        <h1 className="mb-2 font-medium">{stats?.Accepted || 0}</h1>
        <p className="text-sm font-normal text-gray-500">Accepted Applicants</p>
      </div>
      <div className="border-r text-center">
        <h1 className="mb-2 font-medium">{stats?.Pending || 0}</h1>
        <p className="text-sm font-normal text-gray-500">Pending Applicants</p>
      </div>
      <div className="text-center">
        <h1 className="mb-2 font-medium">{stats?.Rejected || 0}</h1>
        <p className="text-sm font-normal text-gray-500">Rejected Applicants</p>
      </div>
    </section>
  );
}
