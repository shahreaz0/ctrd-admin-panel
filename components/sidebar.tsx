"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";

import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-[300px] flex-col justify-between border-e bg-white">
      <div className="px-4 py-6">
        <Link href="/">
          {/* <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
            
          </span> */}
          <Image
            src="/the-citizen-trust.svg"
            alt="CTRD"
            width={40}
            height={40}
            className="ml-2"
          />
        </Link>

        <ul className="mt-6 space-y-1">
          <li>
            <Link
              href="/dashboard"
              className={cn(
                "block rounded-md px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                pathname === "/dashboard" &&
                  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              )}
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              href="/users"
              className={cn(
                "block rounded-md px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                pathname === "/users" &&
                  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              )}
            >
              Users
            </Link>
          </li>

          {/* <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <span className="text-sm font-medium"> Approved </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Approved
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Pending
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Declined
                  </a>
                </li>
              </ul>
            </details>
          </li> */}

          <li>
            <Link
              href="/programs"
              className={cn(
                "block rounded-md px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                pathname === "/programs" &&
                  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              )}
            >
              Programs
            </Link>
          </li>
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
          <Image
            alt="Man"
            width={40}
            height={40}
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="flex w-full items-center justify-between">
            <div className="text-xs">
              <strong className="block font-medium">Eric Frusciante</strong>

              <span> eric@frusciante.com </span>
            </div>

            <LogOut className="h-4 w-4" />
          </div>
        </a>
      </div>
    </div>
  );
}
