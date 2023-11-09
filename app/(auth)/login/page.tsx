import type { Metadata } from "next";
import Image from "next/image";
import logo from "@/public/the-citizen-trust.svg";

import { Card } from "@/components/ui/card";

import LoginForm from "./components/login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "User login form",
};

export default function LoginPage() {
  return (
    <section className="flex h-screen  items-center justify-center">
      <Card className="w-full p-8 sm:w-[400px]">
        <Image src={logo} alt="The Citizen Trust" width={100} className="m-auto" />
        <LoginForm />
      </Card>
    </section>
  );
}
