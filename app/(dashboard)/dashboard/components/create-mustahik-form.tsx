"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { formatISO } from "date-fns";
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

// eslint-disable-next-line no-unused-vars
const a = {
  name: "Test One",
  religion: "Islam",
  dateOfBirth: "2023-11-21T10:29:29.017Z",
  gender: 0,
  occupation: "Rickshaw Puller",
  identificationNumber: "1231231122",
  fatherOrHusbandName: "John Cena",
  village: "Test",
  union: "Test",
  postOffice: "Test",
  thana: "Test",
  district: "Test",
  condition: 0,
  hasGoodPlaceToStay: true,
  hasSafeToilet: true,
  hasSafeWaterSource: true,
  status: 0,
  bankAccounts: [
    {
      accountHolderName: "Test",
      bankName: "Test",
      accountNumber: "Test",
      branchName: "Test",
    },
  ],
  familyMembers: [
    {
      name: "Test",
      dateOfBirth: "2023-11-21T10:29:29.018Z",
      gender: 0,
      educationLevel: "Test",
      relationToHOF: "Test",
      occupation: "Test",
      hasDisability: true,
      isChild: true,
      isSick: true,
      isJobless: true,
      ongoingMedicineOrTreatment: "Test",
    },
  ],
  landAndDebtDesc: {
    house: "Test",
    land: "Test",
    numberOfCowsAndGoats: 0,
    cultivationInstruments: "Test",
    numberOfChickenAndDucks: 0,
    existingAssetInCurrency: 0,
    totalDebt: 0,
  },
  debtDescriptions: [
    {
      ngo: 0,
      bank: 0,
      shomobay: 0,
      dadon: 0,
      misc: 0,
      purpose: "Test",
    },
  ],
  sourceOfIncome: {
    farming: 0,
    business: 0,
    animals: 0,
    kutirBusiness: 0,
    governmentGrants: 0,
    jobSalary: 0,
    misc: 0,
  },
  fieldsOfSpending: {
    food: 0,
    education: 0,
    medicineOrTreatment: 0,
    debtInstallments: 0,
    misc: 0,
  },
  healthRelatedInfo: {
    lastingSickness: "Test",
    ongoingTreatmentOrMedicine: "Test",
    hasPregnancy: true,
    hasChronicSickness: true,
    hasCataract: true,
    hasHearingProblem: true,
    hasDisability: true,
    hasHealthEducation: true,
  },
  criteriaToGrant: {
    insaniat: {
      house: "Test",
      food: "Test",
      orphan: "Test",
      clothes: "Test",
    },
    employment: {
      biniyog: "Test",
      land: "Test",
      kutir: "Test",
      cultivatingInstruments: "Test",
      cowsOrGoats: "Test",
      hensOrDucks: "Test",
      business: "Test",
      farmingEquipments: "Test",
      misc: "Test",
    },
    education: {
      childrenEducation: "Test",
      educationHelp: "Test",
      books: "Test",
      instruments: "Test",
      childrenClothing: "Test",
      food: "Test",
      quranEducation: "Test",
      misc: "Test",
    },
  },
  programId: 6,
};

const formSchema = z.object({
  name: z.string().min(1, "Required").max(100),
  religion: z.string().min(1, "Required").max(100),
  dateOfBirth: z.date({ invalid_type_error: "Required" }).transform((value) => {
    return formatISO(value);
  }),
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
    .transform((value) => {
      const mapper = {
        red: 0,
        green: 1,
        yellow: 2,
      };

      return mapper[value];
    }),

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
    .transform((value) => {
      const mapper = {
        mustahik: 0,
        fakir: 1,
        miskin: 2,
        amilin: 3,
        muallatulKutub: 4,
        rikkab: 5,
        garimin: 6,
        fiSabilillah: 7,
      };

      return mapper[value];
    }),

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
      dateOfBirth: z.date({ invalid_type_error: "Required" }).transform((value) => {
        return formatISO(value);
      }),
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
      isSick: z
        .enum(["yes", "no"], {
          required_error: "Required",
        })
        .transform((value) => value === "yes"),
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
    numberOfCowsAndGoats: z.coerce
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
    // totalAmountOfCalculatableIncome: z.coerce
    //   .number({ invalid_type_error: "Required" })
    //   .nonnegative("Please enter positive number")
    //   .safe(),
    // totalAmountOfUnverifiedIncome: z.coerce
    //   .number({ invalid_type_error: "Required" })
    //   .nonnegative("Please enter positive number")
    //   .safe(),
    // totalYearlyIncome: z.coerce
    //   .number({ invalid_type_error: "Required" })
    //   .nonnegative("Please enter positive number")
    //   .safe(),
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
          dateOfBirth: undefined,
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
