"use client";

import { useGetUserInfo } from "@/hooks/rq/auth/use-get-user-info";

// import { CreateMustahikForm } from "@/app/(dashboard)/dashboard/upsert-mustahik-form";

import { Programs } from "./programs";
import { Stats } from "./stats";

export function Dashboard() {
  const { data: user } = useGetUserInfo();

  return (
    <section className="space-y-16">
      {user?.roles?.includes("ADMINISTRATOR") && (
        <section className="relative">
          <p className="mb-4 text-base font-semibold text-primary">Available Programs</p>
          <Programs />
        </section>
      )}

      <Stats />

      {/* {user?.roles?.includes("ADMINISTRATOR") && (
        <section>
          <p className="mb-4 text-base font-semibold text-primary">
            Add A Mustahik Under Program
          </p>
          <CreateMustahikForm />
        </section>
      )} */}
    </section>
  );
}
