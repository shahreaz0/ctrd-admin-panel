import type { Metadata } from "next";

import { CreateMustahikForm } from "@/app/(dashboard)/dashboard/upsert-mustahik-form";

import Programs from "./programs";
import Stats from "./stats";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function DashboardPage() {
  return (
    <section className="space-y-16">
      <section className="relative">
        <p className="mb-4 text-base font-semibold text-primary">Avaiable Programs</p>
        <Programs />
      </section>

      <Stats />

      <section>
        <p className="mb-4 text-base font-semibold text-primary">
          Add A Mustahik Under Program
        </p>
        <CreateMustahikForm />
      </section>
    </section>
  );
}
