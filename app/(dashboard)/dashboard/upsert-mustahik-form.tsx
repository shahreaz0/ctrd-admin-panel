"use client";

import { CONDITION, GENDER, STATUS } from "@/configs/globals";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { useCreateMustahik } from "@/hooks/rq/mutahiks/use-create-mustahik";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useDialogStates } from "@/components/dialogs-provider";

import AddressFields from "./address-fields";
import BankAccountFields from "./bank-accounts-fields";
import CandidateFields from "./candidate-fields";
import ConditionRadio from "./condition-radio";
import CriteriaEducationFields from "./criteria-education-fields";
import CriteriaEmployementFields from "./criteria-employment-fields";
import CriteriaInsaniatFields from "./criteria-insaniat-fields";
import DebtDescriptionFields from "./debt-description-fields";
import ExtraFields from "./extra-fields";
import FamilyInfoFields from "./family-info-fields";
import HealthInfoFields from "./health-info-fields";
import IncomeSourceFields from "./income-source-fields";
import LandAndDebtFields from "./land-and-debt-fields";
import MustahikRadio from "./mutahik-radio";
import ProgramRadioField from "./program-radio";
// import OpinionMultiCheckbox from "./opinion-multi-checkbox";
import SpendingFields from "./spending-fields";

const formSchema = z.object({
  name: z.string().min(1, "Required").max(100),
  religion: z.string().min(1, "Required").max(100),
  age: z.coerce
    .number({ invalid_type_error: "Required" })
    .max(150, "Maximum 150 is allowed")
    .nonnegative("Please enter positive number")
    .safe(),
  mobile: z.string().min(1, "Required").max(100),
  nationalIdentificationNumber: z.string().min(1, "Required").max(100),
  gender: z
    .enum(["male", "female", "other"], {
      required_error: "Required",
    })
    .transform((value) => GENDER[value]),
  occupation: z.string().min(1, "Required").max(100),
  fatherOrHusbandName: z.string().min(1, "Required").max(100),
  village: z.string().min(1, "Required").max(100),
  union: z.string().min(1, "Required").max(100),
  postOffice: z.string().min(1, "Required").max(100),
  thana: z.string().min(1, "Required").max(100),
  district: z.string().min(1, "Required").max(100),
  condition: z
    .enum(["green", "yellow", "red"], {
      required_error: "Required",
    })
    .transform((value) => CONDITION[value]),

  statusList: z
    .array(
      z.enum([
        "fakir",
        "miskin",
        "amilin",
        "muallatulKutub",
        "rikkab",
        "garimin",
        "fiSabilillah",
      ])
    )
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    })
    .transform((values) => {
      return values.map((e) => STATUS[e]);
    }),

  hasGoodPlaceToStay: z.string().min(1, "Required").max(1000),
  hasSafeToilet: z.string().min(1, "Required").max(1000),
  hasSafeWaterSource: z.string().min(1, "Required").max(1000),
  bankAccounts: z.array(
    z.object({
      accountHolderName: z.string().min(1, "Required").max(1000),
      bankName: z.string().min(1, "Required").max(1000),
      accountNumber: z.string().min(1, "Required").max(1000),
      branchName: z.string().min(1, "Required").max(1000),
    })
  ),
  familyMembers: z.array(
    z.object({
      name: z.string().min(1, "Required").max(1000),
      age: z.coerce
        .number({ invalid_type_error: "Required" })
        .max(150, "Maximum 150 is allowed")
        .nonnegative("Please enter positive number")
        .safe(),
      gender: z
        .enum(["male", "female", "other"], {
          required_error: "Required",
        })
        .transform((value) => GENDER[value]),
      educationLevel: z.string().min(1, "Required").max(100),
      relationToHof: z.string().min(1, "Required").max(100),
      occupation: z.string().min(1, "Required").max(100),
      hasDisability: z.string().min(1, "Required").max(1000),
      isChild: z.string().min(1, "Required").max(1000),
      isSick: z.string().min(1, "Required").max(1000),
      isJobless: z.string().min(1, "Required").max(1000),
      ongoingMedicineOrTreatment: z.string().min(1, "Required").max(100),
    })
  ),
  landAndDebtDesc: z.object({
    house: z.string().min(1, "Required").max(100),
    land: z.string().min(1, "Required").max(100),
    numberOfCows: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    numberOfGoats: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    cultivationInstruments: z.string().min(1, "Required").max(100),
    numberOfChickenAndDucks: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    existingAssetInCurrency: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),

    interestLoanAmmount: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    totalDebt: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
  }),

  debtDescriptions: z.array(
    z.object({
      ngo: z.coerce
        .number({ invalid_type_error: "Required" })
        .nonnegative("Please enter positive number")
        .safe(),
      bank: z.coerce
        .number({ invalid_type_error: "Required" })
        .nonnegative("Please enter positive number")
        .safe(),
      shomobay: z.coerce
        .number({ invalid_type_error: "Required" })
        .nonnegative("Please enter positive number")
        .safe(),
      dadon: z.coerce
        .number({ invalid_type_error: "Required" })
        .nonnegative("Please enter positive number")
        .safe(),
      misc: z.coerce
        .number({ invalid_type_error: "Required" })
        .nonnegative("Please enter positive number")
        .safe(),
      purpose: z.string().min(1, "Required").max(1000),
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
    jobSalary: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    misc: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    dayIncome: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    totalYearlyIncome: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
  }),

  fieldsOfSpending: z.object({
    food: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    education: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    medicineOrTreatment: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    debtInstallments: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    misc: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    totalYearlySpending: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
  }),

  healthRelatedInfo: z.object({
    lastingSickness: z.string().min(1, "Required").max(1000),
    ongoingTreatmentOrMedicine: z.string().min(1, "Required").max(1000),
    hasPregnancy: z.string().min(1, "Required").max(1000),
    hasChronicSickness: z.string().min(1, "Required").max(1000),
    hasCataract: z.string().min(1, "Required").max(1000),
    hasHearingProblem: z.string().min(1, "Required").max(1000),
    hasDisability: z.string().min(1, "Required").max(1000),
    hasHealthEducation: z.string().min(1, "Required").max(1000),
  }),

  criteriaToGrant: z.object({
    insaniat: z.object({
      house: z.string().min(1, "Required").max(100),
      food: z.string().min(1, "Required").max(100),
      orphan: z.string().min(1, "Required").max(100),
      clothes: z.string().min(1, "Required").max(100),
    }),
    employment: z.object({
      biniyog: z.string().min(1, "Required").max(100),
      land: z.string().min(1, "Required").max(100),
      kutir: z.string().min(1, "Required").max(100),
      cultivatingInstruments: z.string().min(1, "Required").max(100),
      cowsOrGoats: z.string().min(1, "Required").max(100),
      hensOrDucks: z.string().min(1, "Required").max(100),
      business: z.string().min(1, "Required").max(100),
      farmingEquipments: z.string().min(1, "Required").max(100),
      misc: z.string().min(1, "Required").max(100),
    }),
    education: z.object({
      childrenEducation: z.string().min(1, "Required").max(100),
      educationHelp: z.string().min(1, "Required").max(100),
      books: z.string().min(1, "Required").max(100),
      instruments: z.string().min(1, "Required").max(100),
      childrenClothing: z.string().min(1, "Required").max(100),
      food: z.string().min(1, "Required").max(100),
      quranEducation: z.string().min(1, "Required").max(100),
      misc: z.string().min(1, "Required").max(100),
    }),
  }),
  programId: z.string().transform((value) => +value),
});

export function CreateMustahikForm() {
  const { mustahik } = useDialogStates();

  console.log(mustahik);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bankAccounts: [
        {
          accountHolderName: undefined,
          bankName: undefined,
          branchName: undefined,
          accountNumber: undefined,
        },
      ],
      statusList: [],
      familyMembers: [
        {
          name: undefined,
          age: undefined,
          educationLevel: undefined,
          gender: undefined,
          ongoingMedicineOrTreatment: undefined,
          occupation: undefined,
          relationToHof: undefined,
          hasDisability: undefined,
          isChild: undefined,
          isJobless: undefined,
          isSick: undefined,
        },
      ],
      debtDescriptions: [
        {
          bank: undefined,
          dadon: undefined,
          purpose: undefined,
          ngo: undefined,
          misc: undefined,
          shomobay: undefined,
        },
      ],
    },
  });

  const { mutate: createMustahik } = useCreateMustahik();

  function onSubmit(values: z.infer<typeof formSchema>) {
    createMustahik(values, {
      onSuccess: () => {
        toast.success("Mustahik created", {
          description: "Mustahik has been created successfully.",
        });
      },
    });
  }

  return (
    <section className="relative">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="m-auto space-y-8">
          <section>
            <h1 className="mb-2 text-lg">মুস্তাহিক প্রার্থী</h1>
            <section className="grid grid-cols-3 gap-4">
              <CandidateFields />
            </section>
          </section>
          <section>
            <h1 className="mb-2 text-lg">অবস্থা</h1>
            <ConditionRadio />
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
              <IncomeSourceFields />
            </section>
          </section>

          <section>
            <h1 className="mb-2 text-lg">বাৎসরিক পারিবারিক বায়ের খাতসমূহ</h1>
            <section className="grid grid-cols-3 gap-4">
              <SpendingFields />
            </section>
          </section>

          <section>
            <h1 className="mb-2 text-lg">স্বাস্থ্য সংক্রান্ত তথ্য</h1>
            <section className="grid grid-cols-3 gap-4">
              <HealthInfoFields />
            </section>
          </section>

          <section className="criteria">
            <h1 className="text-lg">চাহিদা নিরুপন</h1>
            <section className="mt-2 grid grid-cols-3 gap-4">
              <section>
                <h1 className="mb-2 text-base text-gray-400">ইনসানিয়াত</h1>
                <CriteriaInsaniatFields />
              </section>
              <section>
                <h1 className="mb-2 text-base text-gray-400">কর্মসংস্থান</h1>
                <CriteriaEmployementFields />
              </section>

              <section>
                <h1 className="mb-2 text-base text-gray-400">কর্মসংস্থান</h1>
                <CriteriaEducationFields />
              </section>
            </section>

            {/* <section className="mt-4">
              <h1 className="mb-2 text-lg">দায়িত্বপ্রাপ্ত মাঠ কর্মকর্তার মন্তব্য</h1>
              <OpinionMultiCheckbox />
            </section> */}

            <section className="mt-8">
              <h1 className="mb-2 text-lg">অন্যান্য</h1>
              <section className="grid grid-cols-3 gap-4">
                <ExtraFields />
              </section>
            </section>

            <section className="mt-8">
              <h1 className="mb-2 text-lg">মুস্তাহিক</h1>
              <MustahikRadio />
            </section>

            <section className="mt-8">
              <h1 className="mb-2 text-lg">প্রোগ্রাম</h1>
              <ProgramRadioField />
            </section>
          </section>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
}
