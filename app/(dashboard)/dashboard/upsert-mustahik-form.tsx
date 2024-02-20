"use client";

import { CONDITION, GENDER } from "@/configs/globals";
import districts from "@/data/districts.json";
import unions from "@/data/unions.json";
import upazilas from "@/data/upazilas.json";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { getKeyByValue } from "@/lib/utils";
import { useCreateMustahik } from "@/hooks/rq/mutahiks/use-create-mustahik";
import { useUpdateMustahik } from "@/hooks/rq/mutahiks/use-update-mustahik";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useDialogStates } from "@/components/dialogs-provider";

import { AddressFields } from "./address-fields";
import { BankAccountFields } from "./bank-accounts-fields";
import { CandidateFields } from "./candidate-fields";
import { ConditionRadio } from "./condition-radio";
import { CriteriaEducationFields } from "./criteria-education-fields";
import { CriteriaEmployementFields } from "./criteria-employment-fields";
import { CriteriaInsaniatFields } from "./criteria-insaniat-fields";
import { DebtDescriptionFields } from "./debt-description-fields";
import { ExtraFields } from "./extra-fields";
import { FamilyInfoFields } from "./family-info-fields";
import { HealthInfoFields } from "./health-info-fields";
import { IncomeSourceFields } from "./income-source-fields";
import { LandAndDebtFields } from "./land-and-debt-fields";
import { MustahikRadio } from "./mutahik-radio";
import { ProgramRadioField } from "./program-radio";
// import OpinionMultiCheckbox from "./opinion-multi-checkbox";
import { SpendingFields } from "./spending-fields";

const formSchema = z.object({
  name: z.string().min(1, "Required").max(1000),
  religion: z.string().max(100).optional(),
  age: z.coerce
    .number({ invalid_type_error: "Required" })
    .max(150, "Maximum 150 is allowed")
    .nonnegative("Please enter positive number")
    .safe()
    .optional(),
  mobile: z.string().max(1000).optional(),
  nationalIdentificationNumber: z.string().max(1000).optional(),
  gender: z
    .enum(["male", "female", "other"], {
      required_error: "Required",
    })
    .transform((e) => GENDER[e])
    .optional(),
  occupation: z.string().max(100).optional(),
  fatherOrHusbandName: z.string().max(100).optional(),
  village: z.string().max(1000).optional(),
  union: z
    .string()
    .max(1000)
    .transform((e) => {
      return unions.find((union) => union.id === e)?.name;
    })
    .optional(),
  postOffice: z.string().max(100).optional(),
  thana: z
    .string()
    .max(100)
    .transform((e) => {
      return upazilas.find((upazila) => upazila.id === e)?.name;
    })
    .optional(),
  district: z
    .string()
    .max(100)
    .transform((e) => {
      return districts.find((district) => district.id === e)?.name;
    })
    .optional(),
  condition: z
    .enum(["green", "yellow", "red"], {
      required_error: "Required",
    })
    .transform((value) => CONDITION[value])
    .optional(),

  statusList: z
    .array(z.enum(["1", "2", "3", "4", "5", "6", "7"]))
    // .refine((value) => value.some((item) => item), {
    //   message: "You have to select at least one item.",
    // })
    .transform((values) => {
      return values.map((e) => +e);
    })
    .optional(),

  hasGoodPlaceToStay: z.string().max(1000).optional(),
  hasSafeToilet: z.string().max(1000).optional(),
  hasSafeWaterSource: z.string().max(1000).optional(),
  bankAccounts: z.array(
    z.object({
      accountHolderName: z.string().max(1000),
      bankName: z.string().max(1000),
      accountNumber: z.string().max(1000),
      branchName: z.string().max(1000),
    })
  ),
  familyMembers: z.array(
    z.object({
      name: z.string().max(1000).optional(),
      age: z.coerce
        .number({ invalid_type_error: "Required" })
        .max(150, "Maximum 150 is allowed")
        .nonnegative("Please enter positive number")
        .safe()
        .optional(),
      gender: z
        .enum(["male", "female", "other"], {
          required_error: "Required",
        })
        .transform((value) => GENDER[value])
        .optional(),
      educationLevel: z.string().max(100).optional(),
      relationToHof: z.string().max(1000).optional(),
      occupation: z.string().max(100).optional(),
      hasDisability: z.string().max(1000).optional(),
      isChild: z.string().max(1000).optional(),
      isSick: z.string().max(1000).optional(),
      isJobless: z.string().max(1000).optional(),
      ongoingMedicineOrTreatment: z.string().max(100).optional(),
    })
  ),
  landAndDebtDesc: z.object({
    house: z.string().max(100).optional(),
    land: z.string().max(100).optional(),
    numberOfCows: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
    numberOfGoats: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
    cultivationInstruments: z.string().max(100).optional(),
    numberOfChickenAndDucks: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
    existingAssetInCurrency: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),

    interestLoanAmount: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
    totalDebt: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
  }),

  debtDescriptions: z.array(
    z.object({
      ngo: z.coerce
        .number({ invalid_type_error: "Required" })
        .nonnegative("Please enter positive number")
        .safe()
        .optional(),
      bank: z.coerce
        .number({ invalid_type_error: "Required" })
        .nonnegative("Please enter positive number")
        .safe()
        .optional(),
      shomobay: z.coerce
        .number({ invalid_type_error: "Required" })
        .nonnegative("Please enter positive number")
        .safe()
        .optional(),
      dadon: z.coerce
        .number({ invalid_type_error: "Required" })
        .nonnegative("Please enter positive number")
        .safe()
        .optional(),
      misc: z.coerce
        .number({ invalid_type_error: "Required" })
        .nonnegative("Please enter positive number")
        .safe()
        .optional(),
      purpose: z.string().max(1000).optional(),
    })
  ),

  sourceOfIncome: z.object({
    farming: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
    business: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
    animals: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
    kutirBusiness: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
    governmentGrants: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
    jobSalary: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
    misc: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
    dailyWages: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
    totalYearlyIncome: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
  }),

  fieldsOfSpending: z.object({
    food: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
    education: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
    medicineOrTreatment: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
    debtInstallments: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
    misc: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
    totalYearlySpending: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe()
      .optional(),
  }),

  healthRelatedInfo: z.object({
    lastingSickness: z.string().max(1000).optional(),
    ongoingTreatmentOrMedicine: z.string().max(1000).optional(),
    hasPregnancy: z.string().max(1000).optional(),
    hasChronicSickness: z.string().max(1000).optional(),
    hasCataract: z.string().max(1000).optional(),
    hasHearingProblem: z.string().max(1000).optional(),
    hasDisability: z.string().max(1000).optional(),
    hasHealthEducation: z.string().max(1000).optional(),
  }),

  criteriaToGrant: z
    .object({
      insaniat: z
        .object({
          house: z.string().min(1, "Required").max(100).optional(),
          food: z.string().min(1, "Required").max(100).optional(),
          orphan: z.string().min(1, "Required").max(100).optional(),
          clothes: z.string().min(1, "Required").max(100).optional(),
        })
        .optional(),
      employment: z
        .object({
          biniyog: z.string().min(1, "Required").max(100).optional(),
          land: z.string().min(1, "Required").max(100).optional(),
          kutir: z.string().min(1, "Required").max(100).optional(),
          cultivatingInstruments: z.string().min(1, "Required").max(100).optional(),
          cowsOrGoats: z.string().min(1, "Required").max(100).optional(),
          hensOrDucks: z.string().min(1, "Required").max(100).optional(),
          business: z.string().min(1, "Required").max(100).optional(),
          farmingEquipments: z.string().min(1, "Required").max(100).optional(),
          misc: z.string().min(1, "Required").max(100).optional(),
        })
        .optional(),
      education: z.object({
        childrenEducation: z.string().min(1, "Required").max(100).optional(),
        educationHelp: z.string().min(1, "Required").max(100).optional(),
        books: z.string().min(1, "Required").max(100).optional(),
        instruments: z.string().min(1, "Required").max(100).optional(),
        childrenClothing: z.string().min(1, "Required").max(100).optional(),
        food: z.string().min(1, "Required").max(100).optional(),
        quranEducation: z.string().min(1, "Required").max(100).optional(),
        misc: z.string().min(1, "Required").max(100).optional(),
      }),
    })
    .optional(),

  programId: z.string().transform((value) => +value),
  generalComment: z.string().optional(),
});

export function CreateMustahikForm() {
  const { mustahik, setDialogsStates } = useDialogStates();
  const { mutate: createMustahik, isPending: isCreatePending } = useCreateMustahik();
  const { mutate: updateMustahik, isPending: isUpdatePending } = useUpdateMustahik();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: mustahik?.name,
      religion: mustahik?.religion,
      gender: getKeyByValue(GENDER, +mustahik?.gender) as any,
      age: mustahik?.age,
      occupation: mustahik.occupation,
      fatherOrHusbandName: mustahik?.fatherOrHusbandName,
      mobile: mustahik?.mobile || "",
      nationalIdentificationNumber: mustahik?.nationalIdentificationNumber || "",
      condition: (getKeyByValue(CONDITION, +mustahik.condition) as any) || undefined,

      village: mustahik?.village || "",
      postOffice: mustahik?.postOffice || "",
      thana: mustahik?.thana || "",
      district: mustahik?.district || "",
      union: mustahik?.union || "",
      hasSafeToilet: mustahik?.hasSafeToilet || "",
      hasGoodPlaceToStay: mustahik?.hasGoodPlaceToStay || "",
      hasSafeWaterSource: mustahik?.hasSafeWaterSource || "",

      bankAccounts: mustahik?.bankAccounts || [
        {
          accountHolderName: "",
          bankName: "",
          branchName: "",
          accountNumber: "",
        },
      ],
      statusList: (mustahik?.status?.map((e) => String(e.id)) as any) || [],

      familyMembers: mustahik?.familyMembers?.map((e) => ({
        ...e,
        gender: getKeyByValue(GENDER, +mustahik?.gender) as any,
      })) || [
        {
          name: "",
          age: undefined,
          educationLevel: "",
          gender: undefined,
          ongoingMedicineOrTreatment: "",
          occupation: "",
          relationToHof: "",
          hasDisability: "",
          isChild: "",
          isJobless: "",
          isSick: "",
        },
      ],
      landAndDebtDesc: mustahik?.landAndDebtDesc,
      debtDescriptions: mustahik?.debtDescriptions || [
        {
          bank: "",
          dadon: "",
          purpose: "",
          ngo: "",
          misc: "",
          shomobay: "",
        },
      ],
      sourceOfIncome: mustahik?.sourceOfIncome,
      fieldsOfSpending: mustahik?.fieldsOfSpending,
      healthRelatedInfo: mustahik?.healthRelatedInfo,
      generalComment: "sss",
      criteriaToGrant: {
        insaniat: mustahik?.criteriaToGrant?.insaniat,
      },
      programId: mustahik?.programId?.toString() as any,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (mustahik.id) {
      const payload = {
        id: mustahik.id,
        data: values,
      };

      updateMustahik(payload, {
        onSuccess: () => {
          toast.success("Mustahik updated", {
            description: "Mustahik has been updated successfully.",
          });

          setDialogsStates((prev) => ({ ...prev, upsertApplicantDialog: false }));
        },
      });
    } else {
      createMustahik(values, {
        onSuccess: () => {
          toast.success("Mustahik created", {
            description: "Mustahik has been created successfully.",
          });

          setDialogsStates((prev) => ({ ...prev, upsertApplicantDialog: false }));
        },
      });
    }
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
                <h1 className="mb-2 text-base text-gray-400">শিক্ষা</h1>
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

          <Button type="submit" disabled={isCreatePending || isUpdatePending} size="sm">
            {(isCreatePending || isUpdatePending) && (
              <Loader2 className="mr-1 h-4 w-4 animate-spin" />
            )}{" "}
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
}
