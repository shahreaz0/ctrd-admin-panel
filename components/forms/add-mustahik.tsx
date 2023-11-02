"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card } from "../ui/card";

const formSchema = z.object({
  candidate: z.object({
    name: z.string().min(1).max(50),
    religion: z.string().min(1).max(50),
    age: z.string().min(1).max(100),
    profession: z.string().min(1).max(50),
    guardian_name: z.string().min(1).max(50),
    identification_number: z.string().min(1).max(100),
  }),
  status: z.enum(["green", "yellow", "red"], {
    required_error: "Required",
  }),
});

import CandidateFields from "@/components/forms/candidate-fields";
import StatusRadio from "./status-radio";

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
        <section>
          <h1 className="text-lg mb-2">মুস্তাহিক প্রার্থী</h1>
          <section className="grid grid-cols-3 gap-4">
            <CandidateFields />
          </section>
        </section>

        <section>
          <h1 className="text-lg mb-2">অবস্থা</h1>
          <section className="grid grid-cols-3 gap-4">
            <StatusRadio />
          </section>
        </section>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
