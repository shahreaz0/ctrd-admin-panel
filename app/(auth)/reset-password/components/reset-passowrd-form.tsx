"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { RotateCw } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import PasswordInput from "@/components/passoword-input";

const formSchema = z.object({
  password: z.string({ required_error: "Email is required." }),
  confirmPassword: z.string({ required_error: "Password is required." }),
});

export default function ResetPassowrdForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    // eslint-disable-next-line no-console
    console.log(values);

    setLoading(true);

    toast.success("Password Reset Successful!", {
      description:
        "Your password has been reset. You can now log in with your new credentials.",
    });

    setTimeout(() => {
      router.push("/dashboard");
      setLoading(false);
    }, 2000);
  }

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Passowrd</FormLabel>
                <FormControl>
                  <PasswordInput {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <PasswordInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="mt-4 w-full"
            disabled={isLoading || !form.formState.isValid}
          >
            {isLoading && <RotateCw className="mr-2 h-4 w-4 animate-spin" />} Reset
            Passoword
          </Button>
        </form>
      </Form>
    </section>
  );
}
