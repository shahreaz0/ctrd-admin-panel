import type { Metadata } from "next";
import Image from "next/image";
import logo from "@/public/the-citizen-trust.svg";

import { Card } from "@/components/ui/card";

import SetupPasswordForm from "./setup-passoword-form";

export const metadata: Metadata = {
  title: "Setup Password",
  description: "Setup your passoword",
};

export default function SetupPasswordPage() {
  return (
    <section className="flex h-screen  items-center justify-center">
      <Card className="w-full p-8 sm:w-[400px]">
        <Image src={logo} alt="The Citizen Trust" width={100} className="m-auto" />

        <p className="mb-2 mt-8 text-lg font-medium text-primary">Setup Your Password</p>
        <SetupPasswordForm />
      </Card>
    </section>
  );
}
