"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const links = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Users", href: "/users" },
  { title: "Applicants", href: "/applicants" },
  { title: "Programs", href: "/programs" },
];

export function SidebarSheet() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className="border border-gray-300 bg-gray-200 p-1"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5 text-gray-600" />
      </section>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="w-[250px]">
          <SheetHeader>
            <SheetTitle>
              <p className="mt-8 text-right">CTRD Admin Panel</p>
            </SheetTitle>
            <SheetDescription>
              <ul className="mt-4 space-y-2 text-right">
                {links.map((link) => (
                  <li onClick={() => setOpen(false)} key={link.title}>
                    <Link href={link.href}>{link.title}</Link>
                  </li>
                ))}
                {/* 
                <li onClick={() => setOpen(false)}>
                  <Link href="/users">Users</Link>
                </li>
                <li>
                  <Link href="/programs">Programs</Link>
                </li> */}
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
