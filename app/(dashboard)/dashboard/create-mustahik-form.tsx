"use client";

import { CONDITION, GENDER, STATUS } from "@/configs/gobals";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

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
  phoneNumber: z.string().min(1, "Required").max(100),
  nid: z.string().min(1, "Required").max(100),
  gender: z
    .enum(["male", "female", "other"], {
      required_error: "Required",
    })
    .transform((value) => GENDER[value]),
  occupation: z.string().min(1, "Required").max(100),
  identificationNumber: z.string().min(1, "Required").max(100),
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

  status: z
    .enum(
      [
        "mustahik",
        "fakir",
        "miskin",
        "amilin",
        "muallatulKutub",
        "rikkab",
        "garimin",
        "fiSabilillah",
      ],
      {
        required_error: "Required",
      }
    )
    .transform((value) => STATUS[value]),

  hasGoodPlaceToStay: z
    .enum(["yes", "no"], {
      required_error: "Required",
    })
    .transform((value) => value === "yes"),

  hasSafeToilet: z
    .enum(["yes", "no"], {
      required_error: "Required",
    })
    .transform((value) => value === "yes"),

  hasSafeWaterSource: z
    .enum(["yes", "no"], {
      required_error: "Required",
    })
    .transform((value) => value === "yes"),

  bankAccounts: z.array(
    z.object({
      accountHolderName: z.string().min(1, "Required").max(100),
      bankName: z.string().min(1, "Required").max(100),
      accountNumber: z.string().min(1, "Required").max(100),
      branchName: z.string().min(1, "Required").max(100),
    })
  ),
  familyMembers: z.array(
    z.object({
      name: z.string().min(1, "Required").max(50),
      age: z.coerce
        .number({ invalid_type_error: "Required" })
        .max(150, "Maximum 150 is allowed")
        .nonnegative("Please enter positive number")
        .safe(),
      gender: z
        .enum(["male", "female", "other"], {
          required_error: "Required",
        })
        .transform((value) => {
          const mapper = {
            male: 0,
            female: 1,
            other: 2,
          };

          return mapper[value];
        }),
      educationLevel: z.string().min(1, "Required").max(100),
      relationToHOF: z.string().min(1, "Required").max(100),
      occupation: z.string().min(1, "Required").max(100),
      hasDisability: z
        .enum(["yes", "no"], {
          required_error: "Required",
        })
        .transform((value) => value === "yes"),
      isChild: z
        .enum(["yes", "no"], {
          required_error: "Required",
        })
        .transform((value) => value === "yes"),
      isSick: z.string().min(1, "Required").max(1000),
      isJobless: z
        .enum(["yes", "no"], {
          required_error: "Required",
        })
        .transform((value) => value === "yes"),
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

    interestLoan: z.coerce
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
      purpose: z.string().min(1, "Required").max(100),
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
    lastingSickness: z.string().min(1, "Required").max(100),
    ongoingTreatmentOrMedicine: z.string().min(1, "Required").max(100),
    hasPregnancy: z
      .enum(["yes", "no"], {
        required_error: "Required",
      })
      .transform((value) => value === "yes"),
    hasChronicSickness: z
      .enum(["yes", "no"], {
        required_error: "Required",
      })
      .transform((value) => value === "yes"),
    hasCataract: z
      .enum(["yes", "no"], {
        required_error: "Required",
      })
      .transform((value) => value === "yes"),
    hasHearingProblem: z
      .enum(["yes", "no"], {
        required_error: "Required",
      })
      .transform((value) => value === "yes"),
    hasDisability: z
      .enum(["yes", "no"], {
        required_error: "Required",
      })
      .transform((value) => value === "yes"),
    hasHealthEducation: z
      .enum(["yes", "no"], {
        required_error: "Required",
      })
      .transform((value) => value === "yes"),
  }),

  // criteriaToGrant: {
  //   insaniat: {
  //     house: "Test",
  //     food: "Test",
  //     orphan: "Test",
  //     clothes: "Test",
  //   },
  //   employment: {
  //     biniyog: "Test",
  //     land: "Test",
  //     kutir: "Test",
  //     cultivatingInstruments: "Test",
  //     cowsOrGoats: "Test",
  //     hensOrDucks: "Test",
  //     business: "Test",
  //     farmingEquipments: "Test",
  //     misc: "Test",
  //   },
  //   education: {
  //     childrenEducation: "Test",
  //     educationHelp: "Test",
  //     books: "Test",
  //     instruments: "Test",
  //     childrenClothing: "Test",
  //     food: "Test",
  //     quranEducation: "Test",
  //     misc: "Test",
  //   },
  // },

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
  programId: z.coerce.number({ invalid_type_error: "Required" }),

  // mustahik: z.string().min(1, "Required"),
  // items: z.array(z.string()).refine((value) => value.some((item) => item), {
  //   message: "You have to select at least one item.",
  // }),
});

export function CreateMustahikForm() {
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
      familyMembers: [
        {
          name: undefined,
          age: undefined,
          educationLevel: undefined,
          gender: undefined,
          ongoingMedicineOrTreatment: undefined,
          occupation: undefined,
          relationToHOF: undefined,
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    // let opinion = {
    //   safeWaterSource: false,
    //   toilet: false,
    //   placeToStay: false,
    // };

    // for (let o in opinion) {
    //   opinion[o as keyof typeof opinion] = values.items.includes(o);
    // }

    // const payload = {
    //   ...values,
    //   mustahik: {
    //     [values.mustahik]: true,
    //   },
    //   opinion,
    // };

    // eslint-disable-next-line no-console
    console.log(values);
  }

  console.log(form.formState.errors);

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
