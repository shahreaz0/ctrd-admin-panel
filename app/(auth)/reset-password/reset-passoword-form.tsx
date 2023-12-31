"use client";

import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { RotateCw } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useResetPassword } from "@/hooks/rq/auth/use-reset-password";
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

const formSchema = z
  .object({
    password: z
      .string({ required_error: "Password is required." })
      .refine(
        (value) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(value),
        "Password must be hold at least 8 characters, 1 uppercase, 1 lowercase , 1 spacial character and 1 number"
      ),
    newPassword: z
      .string({ required_error: "Password is required." })
      .refine(
        (value) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(value),
        "Password must be hold at least 8 characters, 1 uppercase, 1 lowercase , 1 spacial character and 1 number"
      ),
  })
  .refine((data) => data.password === data.newPassword, {
    message: "Passwords don't match",
    path: ["newPassword"],
  });

export default function ResetPassowrdForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const searchParams = useSearchParams();

  const { mutate: resetPassword, isPending } = useResetPassword();

  const status = searchParams.has("token") && searchParams.has("email");

  function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = {
      email: searchParams.get("email") as string,
      token: searchParams.get("token") as string,
      newPassword: values.newPassword,
    };

    resetPassword(payload);
  }

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newPassword"
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

          <Button type="submit" className="mt-4 w-full" disabled={isPending || !status}>
            {isPending && <RotateCw className="mr-2 h-4 w-4 animate-spin" />} Reset
            Password
          </Button>
        </form>
      </Form>
    </section>
  );
}
