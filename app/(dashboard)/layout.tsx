import { ReactNode } from "react";

import Sidebar from "@/components/sidebar";

type Props = {
  children: ReactNode;
};
export default function DashboardLayout(props: Props) {
  return (
    <section className="flex ">
      <Sidebar />

      <section className="h-screen basis-4/5 overflow-auto border-red-700 py-4">
        {props.children}
      </section>
    </section>
  );
}
