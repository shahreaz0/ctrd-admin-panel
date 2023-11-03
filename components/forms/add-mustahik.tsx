"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import CandidateFields from "@/components/forms/candidate-fields";
import StatusRadio from "./status-radio";
import AddressFields from "./address-fields";
import BankAccountFields from "./bank-account-fields";
import FamilyInfoFields from "./family-info-fields";
import FamilyPropertyFields from "./family-property-fields";
import DebtorsFields from "./debtors-fields";
import YearlyIncomeSourceFields from "./yearly-income-source-fields";

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

  family_info: z.array(
    z.object({
      name: z.string().min(1).max(50),
      age: z.string().min(1).max(100),
      gender: z.string().min(1).max(100),
      education: z.string().min(1).max(100),
      relation: z.string().min(1).max(100),
      profession: z.string().min(1).max(100),
      special: z.string().min(1).max(100),
      medication: z.string().min(1).max(100),
    })
  ),
  family_property: z.object({
    house_percent: z.string().min(1).max(100),
    land_percent: z.string().min(1).max(100),
    cattle_number: z.string().min(1).max(100),
    produce_machine: z.string().min(1).max(100),
    hen_number: z.string().min(1).max(100),
    cash_amount: z.string().min(1).max(100),
    loan_amount: z.string().min(1).max(100),
  }),

  debtors: z.array(
    z.object({
      ngo: z.string().min(1).max(100),
      bank: z.string().min(1).max(100),
      samabay: z.string().min(1).max(100),
      dadan: z.string().min(1).max(100),
      others: z.string().min(1).max(100),
      debt_purpose: z.string().min(1).max(100),
    })
  ),

  yearly_income_source: z.object({
    farming: z.string().min(1).max(100),
    small_business: z.string().min(1).max(100),
    cattle: z.string().min(1).max(100),
    kutir_business: z.string().min(1).max(100),
    govt_fund: z.string().min(1).max(100),
    job_income: z.string().min(1).max(100),
    others_income: z.string().min(1).max(100),
    total_worthy_income: z.string().min(1).max(100),
    total_unworthy_income: z.string().min(1).max(100),
    total_yearly_income: z.string().min(1).max(100),
  }),
});

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      family_info: [
        {
          name: "",
          age: "",
          education: "",
          gender: "",
          medication: "",
          profession: "",
          relation: "",
          special: "",
        },
      ],
      debtors: [
        { bank: "", dadan: "", debt_purpose: "", ngo: "", others: "", samabay: "" },
      ],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 w-1/2">
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

        <section>
          <h1 className="text-lg mb-2">পারিবারিক তথ্য</h1>
          <FamilyInfoFields />
        </section>

        <section>
          <h1 className="text-lg mb-2">পারিবারিক সম্পত্তি</h1>
          <section className="grid grid-cols-3 gap-4">
            <FamilyPropertyFields />
          </section>
        </section>

        <section>
          <h1 className="text-lg mb-2">দেনার পরিমাণ</h1>
          <DebtorsFields />
        </section>

        <section>
          <h1 className="text-lg mb-2">বাৎসরিক পারিবারিক আয়ের উৎস</h1>
          <section className="grid grid-cols-3 gap-4">
            <YearlyIncomeSourceFields />
          </section>
        </section>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
