import type { Metadata } from "next";

import { Dashboard } from "./dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function DashboardPage() {
  return <Dashboard />;
}
