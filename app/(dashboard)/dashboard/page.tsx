import type { Metadata } from "next";

import AddMustahik from "@/app/(dashboard)/dashboard/components/create-mustahik-form";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function DashboardPage() {
  return (
    <section>
      <AddMustahik />
    </section>
  );
}
