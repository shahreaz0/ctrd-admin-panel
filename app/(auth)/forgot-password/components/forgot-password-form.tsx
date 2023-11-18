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
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .email("Please enter a valid email."),
});

export default function ForgotPasswordForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    // eslint-disable-next-line no-console
    console.log(values);

    setLoading(true);

    toast.success("Welcome Back!", {
      description: "You have successfully logged in.",
    });

    setTimeout(() => {
      router.push("/dashboard");
      setLoading(false);
    }, 2000);
  }

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-4 w-full" disabled={isLoading}>
            {isLoading && <RotateCw className="mr-2 h-4 w-4 animate-spin" />} Login
          </Button>
        </form>
      </Form>
    </section>
  );
}
