"use client";

import Image from "next/image";
import Link from "next/link";
import appStore from "@/public/home/app-store.svg";
import devices from "@/public/home/devices.svg";
import playStore from "@/public/home/play-store.svg";
import logo from "@/public/the-citizen-trust.svg";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-right pb-14"
      style={{
        backgroundImage: "url('/home/bg.svg')",
      }}
    >
      <div className="container mx-auto w-full p-6">
        <div className="flex w-full items-center justify-between">
          <Link
            className="flex items-center text-2xl font-bold text-indigo-400 no-underline hover:no-underline lg:text-4xl"
            href="#"
          >
            <Image src={logo} alt="The Citizen Trust" width={50} />
          </Link>

          <Link href="/login" className={cn(buttonVariants({ size: "sm" }), "px-6")}>
            Login
          </Link>
        </div>
      </div>

      <div className="container  flex flex-col flex-wrap  px-6 pt-24 md:flex-row md:pt-16">
        <div className="flex w-full flex-col justify-center overflow-y-hidden lg:items-start xl:w-2/5">
          <h1 className="slide-in-bottom-h1 my-4 text-center text-3xl font-bold leading-tight text-primary md:text-left md:text-5xl">
            CTRD
          </h1>
          <p className="slide-in-bottom-subtitle  text-center text-base leading-normal md:text-left md:text-2xl">
            Coming soon...
          </p>

          <Link
            href="/login"
            className={cn(
              buttonVariants({ size: "sm" }),
              "slide-in-bottom-subtitle mb-8 mt-2 px-6"
            )}
          >
            Login
          </Link>

{/*           <p className="pb-8 text-center font-bold text-blue-400 fade-in md:text-left lg:pb-6">
            Download our app:
          </p>

          <div className="flex w-1/2 gap-4 pb-24 fade-in lg:pb-0">
            <Image
              src={appStore}
              className="bounce-top-icons h-12 cursor-pointer"
              alt="app store"
            />
            <Image
              src={playStore}
              className="bounce-top-icons h-12 cursor-pointer"
              alt="play store"
            />
          </div> */}
        </div>

        <div className="w-full overflow-y-hidden py-6 xl:w-3/5">
          <Image
            className="slide-in-bottom mx-auto w-5/6 lg:mr-0"
            src={devices}
            alt="devices"
          />
        </div>
      </div>
    </div>
  );
}
