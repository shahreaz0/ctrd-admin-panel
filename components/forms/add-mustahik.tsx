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
  address: z.object({
    village: z.string().min(1).max(50),
    union: z.string().min(1).max(50),
    post_office: z.string().min(1).max(50),
    police_station: z.string().min(1).max(50),
    district: z.string().min(1).max(50),
  }),

  bank_account: z.object({
    name: z.string().min(1).max(50),
    bank: z.string().min(1).max(50),
    number: z.string().min(1).max(50),
    branch: z.string().min(1).max(50),
  }),
});

import CandidateFields from "@/components/forms/candidate-fields";
import StatusRadio from "./status-radio";
import AddressFields from "./address-fields";
import BankAccountFields from "./bank-account-fields";

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
        <section>
          <h1 className="text-lg mb-2">ঠিকানা</h1>
          <section className="grid grid-cols-3 gap-4">
            <AddressFields />
          </section>
        </section>

        <section>
          <h1 className="text-lg mb-2">ব্যাংক একাউন্ট</h1>
          <section className="grid grid-cols-3 gap-4">
            <BankAccountFields />
          </section>
        </section>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
