"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ctrdLogo from "@/public/the-citizen-trust.svg";
import { deleteCookie } from "cookies-next";
import { CreditCard, Home, LogOut, PieChart, User } from "lucide-react";

import { cn, generateAvatar, getInitials } from "@/lib/utils";
import { useGetUserInfo } from "@/hooks/rq/auth/use-get-user-info";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Sidebar() {
  const pathname = usePathname();

  const router = useRouter();

  function logoutHandler() {
    localStorage.clear();
    deleteCookie("token");
    router.push("/login");
  }

  const { data: user } = useGetUserInfo();

  return (
    <div className="flex h-screen w-[240px] flex-col justify-between border-e bg-[#F1F1F1]">
      <div className="px-4 py-6">
        <Link href="/">
          {/* <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
            
          </span> */}
          <Image src={ctrdLogo} alt="CTRD" width={40} className="ml-2" />
        </Link>

        <ul className="mt-6 space-y-1">
          <li>
            <Link
              href="/dashboard"
              className={cn(
                "flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                pathname === "/dashboard" &&
                  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              )}
            >
              <Home className="mr-2 h-4 w-4" /> Dashboard
            </Link>
          </li>

          <li>
            <Link
              href="/users"
              className={cn(
                "flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                pathname === "/users" &&
                  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              )}
            >
              <PieChart className="mr-2 h-4 w-4" /> Users
            </Link>
          </li>

          <li>
            <Link
              href="/applicants"
              className={cn(
                "flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                pathname === "/applicants" &&
                  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              )}
            >
              <User className="mr-2 h-4 w-4" />
              Applicants
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
                "flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                pathname === "/programs" &&
                  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              )}
            >
              <CreditCard className="mr-2 h-4 w-4" /> Programs
            </Link>
          </li>
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 ">
        <div className="flex items-center gap-2 bg-[#f1f1f1] p-4 hover:bg-gray-50">
          <Avatar>
            <AvatarImage
              src={generateAvatar(user?.fullName || "")}
              alt={user?.fullName}
            />
            <AvatarFallback>{getInitials(user?.fullName || "")}</AvatarFallback>
          </Avatar>

          <div className="flex w-full items-center justify-between">
            <div className="text-xs">
              <p className="block font-medium">{user?.fullName}</p>

              <p>{user?.email}</p>
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <LogOut className="h-4 w-4 cursor-pointer" onClick={logoutHandler} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Logout</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
