"use client";

import { useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/public/the-citizen-trust.svg";

export default function Home() {
  const router = useRouter();
  const currentPath = usePathname();

  // eslint-disable-next-line no-console
  console.log(currentPath);

  useEffect(() => {
    if (currentPath !== "/") {
      setTimeout(() => router.push(currentPath), 100);
    } else {
      setTimeout(() => router.push("/login"), 2000);
    }
  }, []);

  return (
    <main className="flex h-screen items-center justify-center">
      <Image src={logo} alt="The Citizen Trust" width={100} className="mb-16" />
    </main>
  );
}
