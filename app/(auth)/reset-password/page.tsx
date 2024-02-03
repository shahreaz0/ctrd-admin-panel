import type { Metadata } from "next";
import Image from "next/image";
import logo from "@/public/the-citizen-trust.svg";

import { Card } from "@/components/ui/card";

import { ResetPasswordForm } from "./reset-password-form";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Reset your passoword",
};

export default function ResetPasswordPage() {
  return (
    <section className="flex h-screen  items-center justify-center">
      <Card className="w-full p-8 sm:w-[400px]">
        <Image src={logo} alt="The Citizen Trust" width={100} className="m-auto" />

        <p className="mb-2 mt-8 text-lg font-medium text-primary">Reset Your Password</p>
        <ResetPasswordForm />
      </Card>
    </section>
  );
}
