"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import AddressFields from "./address-fields";
import BankAccountFields from "./bank-account-fields";
import CandidateFields from "./candidate-fields";
import ConditionRadio from "./condition-radio";
import DebtDescriptionFields from "./debt-description-fields";
import FamilyInfoFields from "./family-info-fields";
import LandAndDebtFields from "./land-and-debt-fields";
import YearlyIncomeSourceFields from "./yearly-income-source-fields";

const formSchema = z.object({
  mustahikCandidate: z.object({
    name: z.string().min(1, "Required").max(100),
    religion: z.string().min(1, "Required").max(100),
    age: z.coerce
      .number({ invalid_type_error: "Required" })
      .positive("Please enter positive number")
      .max(150),
    occupation: z.string().min(1, "Required").max(100),
    identificationNumber: z.string().min(1, "Required").max(100),
    fatherOrHusbandName: z.string().min(1, "Required").max(100),
  }),
  condition: z.enum(["green", "yellow", "red"], {
    required_error: "Required",
  }),
  address: z.object({
    village: z.string().min(1, "Required").max(100),
    union: z.string().min(1, "Required").max(100),
    postOffice: z.string().min(1, "Required").max(100),
    thana: z.string().min(1, "Required").max(100),
    district: z.string().min(1, "Required").max(100),
  }),
  bankAccount: z.array(
    z.object({
      name: z.string().min(1).max(50),
      bank: z.string().min(1).max(50),
      accountNo: z.string().min(1).max(50),
      branch: z.string().min(1).max(50),
    })
  ),
  familialInformation: z.array(
    z.object({
      name: z.string().min(1).max(50),
      age: z.coerce
        .number({ invalid_type_error: "Required" })
        .positive("Please enter positive number")
        .max(150),
      gender: z.string().min(1).max(100),
      educationLevel: z.string().min(1).max(100),
      relationToHeadOfFamily: z.string().min(1).max(100),
      occupation: z.string().min(1).max(100),
      disability: z
        .enum(["yes", "no"], {
          required_error: "Required",
        })
        .transform((value) => value === "yes"),
      child: z
        .enum(["yes", "no"], {
          required_error: "Required",
        })
        .transform((value) => value === "yes"),
      sick: z
        .enum(["yes", "no"], {
          required_error: "Required",
        })
        .transform((value) => value === "yes"),
      jobless: z
        .enum(["yes", "no"], {
          required_error: "Required",
        })
        .transform((value) => value === "yes"),
      ongoingMedicineOrTreatment: z.string().min(1, "Required").max(100),
    })
  ),
  landAndDebtDescription: z.object({
    house: z.string().min(1).max(100),
    land: z.string().min(1).max(100),
    numberOfCowsOrGoats: z.string().min(1).max(100),
    cultivationInstruments: z.string().min(1).max(100),
    numberOfChickensOrDucks: z.string().min(1).max(100),
    existingAssetInCurrency: z.string().min(1).max(100),
    totalDebt: z.string().min(1).max(100),
  }),
  debtDescription: z.array(
    z.object({
      ngo: z.string().min(1).max(100),
      bank: z.string().min(1).max(100),
      somobay: z.string().min(1).max(100),
      dadon: z.string().min(1).max(100),
      misc: z.string().min(1).max(100),
      purposeOfDebt: z.string().min(1).max(100),
    })
  ),

  sourceOfIncome: z.object({
    farming: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    business: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    animals: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    kutirBusiness: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    governmentGrants: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    job: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    miscSources: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    totalAmountOfCalculatableIncome: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    totalAmountOfUnverifiedIncome: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    totalYearlyIncome: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
  }),
});

export default function AddMustahik() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bankAccount: [
        { accountNo: undefined, bank: undefined, branch: undefined, name: undefined },
      ],
      familialInformation: [
        {
          name: undefined,
          age: undefined,
          educationLevel: undefined,
          gender: undefined,
          ongoingMedicineOrTreatment: undefined,
          occupation: undefined,
          relationToHeadOfFamily: undefined,
          disability: undefined,
          child: undefined,
          jobless: undefined,
          sick: undefined,
        },
      ],
      debtDescription: [
        {
          bank: undefined,
          dadon: undefined,
          purposeOfDebt: undefined,
          ngo: undefined,
          misc: undefined,
          somobay: undefined,
        },
      ],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="m-auto w-2/3 space-y-8">
          <section>
            <h1 className="mb-2 text-lg">মুস্তাহিক প্রার্থী</h1>
            <section className="grid grid-cols-3 gap-4">
              <CandidateFields />
            </section>
          </section>
          <section>
            <h1 className="mb-2 text-lg">অবস্থা</h1>
            <section className="grid grid-cols-3 gap-4">
              <ConditionRadio />
            </section>
          </section>
          <section>
            <h1 className="mb-2 text-lg">ঠিকানা</h1>
            <section className="grid grid-cols-3 gap-4">
              <AddressFields />
            </section>
          </section>

          <section>
            <h1 className="mb-2 text-lg">ব্যাংক একাউন্ট</h1>
            <BankAccountFields />
          </section>

          <section>
            <h1 className="mb-2 text-lg">পারিবারিক তথ্য</h1>
            <FamilyInfoFields />
          </section>

          <section>
            <h1 className="mb-2 text-lg">পারিবারিক সম্পত্তি</h1>
            <section className="grid grid-cols-3 gap-4">
              <LandAndDebtFields />
            </section>
          </section>

          <section>
            <h1 className="mb-2 text-lg">দেনার পরিমাণ</h1>
            <DebtDescriptionFields />
          </section>

          <section>
            <h1 className="mb-2 text-lg">বাৎসরিক পারিবারিক আয়ের উৎস</h1>
            <section className="grid grid-cols-3 gap-4">
              <YearlyIncomeSourceFields />
            </section>
          </section>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
}
