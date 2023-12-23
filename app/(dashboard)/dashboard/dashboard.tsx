"use client";

import { useAuth } from "@/hooks/custom/use-auth";
import { CreateMustahikForm } from "@/app/(dashboard)/dashboard/upsert-mustahik-form";

import Programs from "./programs";
import Stats from "./stats";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <section className="space-y-16">
      {user?.roles?.includes("ADMINISTRATOR") && (
        <section className="relative">
          <p className="mb-4 text-base font-semibold text-primary">Avaiable Programs</p>
          <Programs />
        </section>
      )}

      <Stats />

      {user?.roles?.includes("ADMINISTRATOR") && (
        <section>
          <p className="mb-4 text-base font-semibold text-primary">
            Add A Mustahik Under Program
          </p>
          <CreateMustahikForm />
        </section>
      )}
    </section>
  );
}
