import { ReactNode } from "react";
import { Menu } from "lucide-react";

import Sidebar from "@/components/sidebar";

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
        <Menu className="h-6 w-6 " />
      </section>

      <section className="h-screen w-full overflow-auto border-red-700 py-4">
        {props.children}
      </section>
    </section>
  );
}
