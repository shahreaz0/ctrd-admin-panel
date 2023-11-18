"use client";

import { useState } from "react";
import OtpInput from "react-otp-input";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordForm() {
  // const [isLoading, setLoading] = useState(false);

  const [otp, setOtp] = useState("");

  // const router = useRouter();

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   // eslint-disable-next-line no-console
  //   console.log(values);

  //   setLoading(true);

  //   toast.success("Welcome Back!", {
  //     description: "You have successfully logged in.",
  //   });

  //   setTimeout(() => {
  //     router.push("/dashboard");
  //     setLoading(false);
  //   }, 2000);
  // }

  return (
    <section>
      <section className="mt-4 flex justify-center">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderInput={(props) => (
            <Input
              {...props}
              className="mx-2 h-14 border text-center text-3xl first:ml-0 last:mr-0"
              style={{
                width: "100%",
              }}
            />
          )}
        />
      </section>

      <p className="mb-4 mt-2 cursor-pointer text-xs font-medium text-primary">
        Resend verfication code
      </p>
      <Button className="w-full">Verify</Button>
    </section>
  );
}
