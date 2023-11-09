import Image from "next/image";
import logo from "@/public/the-citizen-trust.svg";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <Image src={logo} alt="The Citizen Trust" width={100} className="mb-16" />
    </main>
  );
}
