import type { Metadata } from "next";

import AddMustahik from "@/app/(dashboard)/dashboard/components/create-mustahik-form";

import Programs from "./components/programs";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function DashboardPage() {
  return (
    <section className="space-y-16 px-8">
      <section className="relative">
        <p className="mb-4 text-base font-semibold text-primary">Avaiable Programs</p>
        <Programs />
      </section>
      <section>
        <p className="mb-4 text-base font-semibold text-primary">
          Add A Mustahik Under Program
        </p>
        <AddMustahik />
      </section>
    </section>
  );
}
