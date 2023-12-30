import { ReactNode } from "react";

import { SidebarSheet } from "@/components/ui/sidebar-sheet";
import { Sidebar } from "@/components/sidebar";

type Props = {
  children: ReactNode;
};
export default function DashboardLayout(props: Props) {
  return (
    <section className="flex">
      <section className="hidden md:block">
        <Sidebar />
      </section>

      <section className="absolute right-8 top-4 z-50 block cursor-pointer md:hidden">
        <SidebarSheet />
      </section>

      <section className="h-screen w-full overflow-auto p-8">{props.children}</section>
    </section>
  );
}
