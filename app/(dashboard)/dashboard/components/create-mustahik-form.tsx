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
import CriteriaEducationFields from "./criteria-education-fields";
import CriteriaEmployementFields from "./criteria-employment-fields";
import CriteriaInsaniatFields from "./criteria-insaniat-fields";
import DebtDescriptionFields from "./debt-description-fields";
import FamilyInfoFields from "./family-info-fields";
import HealthInfoFields from "./health-info-fields";
import IncomeSourceFields from "./income-source-fields";
import LandAndDebtFields from "./land-and-debt-fields";
import MustahikRadio from "./mutahik-radio";
import OpinionMultiCheckbox from "./opinion-multi-checkbox";
import SpendingFields from "./spending-fields";

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
      name: z.string().min(1, "Required").max(100),
      bank: z.string().min(1, "Required").max(100),
      accountNo: z.string().min(1, "Required").max(100),
      branch: z.string().min(1, "Required").max(100),
    })
  ),
  familialInformation: z.array(
    z.object({
      name: z.string().min(1, "Required").max(50),
      age: z.coerce
        .number({ invalid_type_error: "Required" })
        .positive("Please enter positive number")
        .max(150),
      gender: z.enum(["male", "female"], {
        required_error: "Required",
      }),
      educationLevel: z.string().min(1, "Required").max(100),
      relationToHeadOfFamily: z.string().min(1, "Required").max(100),
      occupation: z.string().min(1, "Required").max(100),
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
    house: z.string().min(1, "Required").max(100),
    land: z.string().min(1, "Required").max(100),
    numberOfCowsOrGoats: z.coerce
      .number({ invalid_type_error: "Required" })
      .nonnegative("Please enter positive number")
      .safe(),
    cultivationInstruments: z.string().min(1, "Required").max(100),
    numberOfChickensOrDucks: z.coerce
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
  debtDescription: z.array(
    z.object({
      ngo: z.coerce
        .number({ invalid_type_error: "Required" })
        .nonnegative("Please enter positive number")
        .safe(),
      bank: z.coerce
        .number({ invalid_type_error: "Required" })
        .nonnegative("Please enter positive number")
        .safe(),
      somobay: z.coerce
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
      purposeOfDebt: z.string().min(1, "Required").max(100),
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
    lastingSicknesses: z.string().min(1, "Required").max(100),
    ongoingTreatmentOrMedicine: z.string().min(1, "Required").max(100),
    pregnancy: z
      .enum(["yes", "no"], {
        required_error: "Required",
      })
      .transform((value) => value === "yes"),
    chronicSickness: z
      .enum(["yes", "no"], {
        required_error: "Required",
      })
      .transform((value) => value === "yes"),
    cataract: z
      .enum(["yes", "no"], {
        required_error: "Required",
      })
      .transform((value) => value === "yes"),
    hearingProblem: z
      .enum(["yes", "no"], {
        required_error: "Required",
      })
      .transform((value) => value === "yes"),
    disable: z
      .enum(["yes", "no"], {
        required_error: "Required",
      })
      .transform((value) => value === "yes"),
    healthEducation: z
      .enum(["yes", "no"], {
        required_error: "Required",
      })
      .transform((value) => value === "yes"),
  }),
  criteriaToGrant: z.object({
    insaniat: z.object({
      house: z
        .enum(["yes", "no"], {
          required_error: "Required",
        })
        .transform((value) => value === "yes"),
      food: z
        .enum(["yes", "no"], {
          required_error: "Required",
        })
        .transform((value) => value === "yes"),
      orphan: z
        .enum(["yes", "no"], {
          required_error: "Required",
        })
        .transform((value) => value === "yes"),
      clothes: z
        .enum(["yes", "no"], {
          required_error: "Required",
        })
        .transform((value) => value === "yes"),
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
      childrensEducation: z.string().min(1, "Required").max(100),
      educationHelp: z.string().min(1, "Required").max(100),
      books: z.string().min(1, "Required").max(100),
      instruments: z.string().min(1, "Required").max(100),
      childrensClothings: z.string().min(1, "Required").max(100),
      food: z.string().min(1, "Required").max(100),
      quranEducation: z.string().min(1, "Required").max(100),
      misc: z.string().min(1, "Required").max(100),
    }),
  }),
  mustahik: z.string().min(1, "Required"),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
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
      items: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    let opinion = {
      safeWaterSource: false,
      toilet: false,
      placeToStay: false,
    };

    for (let o in opinion) {
      opinion[o as keyof typeof opinion] = values.items.includes(o);
    }

    const payload = {
      ...values,
      mustahik: {
        [values.mustahik]: true,
      },
      opinion,
    };

    // eslint-disable-next-line no-console
    console.log(payload);
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
            {/* <section className="grid grid-cols-3 gap-4"> */}
            <ConditionRadio />
            {/* </section> */}
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

            <section className="mt-4">
              <h1 className="mb-2 text-lg">দায়িত্বপ্রাপ্ত মাঠ কর্মকর্তার মন্তব্য</h1>
              <OpinionMultiCheckbox />
            </section>

            <section className="mt-4">
              <h1 className="mb-2 text-lg">মুস্তাহিক</h1>
              <MustahikRadio />
            </section>
          </section>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
}
