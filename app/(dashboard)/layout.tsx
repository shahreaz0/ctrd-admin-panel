import { ReactNode } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
        <Sheet>
          <SheetTrigger>
            <section className="border border-gray-300 bg-gray-200 p-1">
              <Menu className="h-5 w-5 text-gray-600" />
            </section>
          </SheetTrigger>
          <SheetContent className="w-[250px]">
            <SheetHeader>
              <SheetTitle>
                <p className="mt-8 text-right">CTRD Admin Panel</p>
              </SheetTitle>
              <SheetDescription>
                <ul className="mt-4 space-y-2 text-right">
                  <li>
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/users">Users</Link>
                  </li>
                  <li>
                    <Link href="/programs">Programs</Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </section>

      <section className="h-screen w-full overflow-auto p-8">{props.children}</section>
    </section>
  );
}
