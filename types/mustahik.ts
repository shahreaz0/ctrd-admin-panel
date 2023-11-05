import { z } from "zod";

export const mustahik = {
  id: 234234, //autoGeneratedField
  mustahikCandidate: {
    name: "John Doe",
    religion: "Islam",
    age: 35,
    occupation: "Teacher",
    identificationNumber: "123456789",
    fatherOrHusbandName: "Muhammad Ali",
  },
  condition: "green",
  address: {
    village: "Sample Village",
    union: "Sample Union",
    postOffice: "Sample Post Office",
    thana: "Sample Thana",
    district: "Sample District",
  },
  bankAccount: [
    {
      name: "John Doe",
      bank: "Sample Bank",
      accountNo: "1234567890",
      branch: "Sample Branch",
    },
  ],
  familialInformation: [
    {
      name: "Jane Doe",
      age: 32,
      gender: "female",
      educationLevel: "Bachelor's Degree",
      relationToHeadOfFamily: "Spouse",
      occupation: "Doctor",
      disability: false,
      child: true,
      sick: false,
      jobless: false,
      ongoingMedicineOrTreatment: "None",
    },
    {
      name: "Alice Doe",
      age: 8,
      gender: "female",
      educationLevel: "Primary School",
      relationToHeadOfFamily: "Child",
      occupation: "",
      disability: false,
      child: true,
      sick: false,
      jobless: false,
      ongoingMedicineOrTreatment: "None",
    },
  ],
  landAndDebtDescription: {
    house: "Yes",
    land: "2 acres",
    numberOfCowsOrGoats: 5,
    cultivationInstruments: "Plow, Harrow",
    numberOfChickensOrDucks: 20,
    existingAssetInCurrency: 50000,
    totalDebt: 25000,
  },
  debtDescription: [
    {
      ngo: 10000,
      bank: 5000,
      shomobay: 3000,
      dadon: 2000,
      misc: 5000,
      purposeOfDebt: "Medical expenses",
    },
  ],
  sourceOfIncome: {
    farming: 20000,
    business: 5000,
    animals: 8000,
    kutirBusiness: 3000,
    governmentGrants: 1000,
    job: 15000,
    miscSources: 2000,
    totalAmountOfCalculatableIncome: 62000,
    totalAmountOfUnverifiedIncome: 5000,
    totalYearlyIncome: 67000,
  },
  fieldsOfSpending: {
    food: 12000,
    education: 8000,
    medicineOrTreatment: 4000,
    debtInstallments: 5000,
    misc: 2000,
    totalYearlySpending: 31000,
  },
  healthRelatedInfo: {
    lastingSicknesses: "None",
    ongoingTreatmentOrMedicine: "None",
    pregnancy: false,
    chronicSickness: false,
    cataract: false,
    hearingProblem: false,
    disable: false,
    healthEducation: true,
  },
  criteriaToGrant: {
    insaniat: {
      house: true,
      food: true,
      orphan: false,
      clothes: true,
    }, //( can be string representation as well dont know )
    employment: {
      biniyog: true,
      land: true,
      kutir: true,
      cultivatingInstruments: true,
      cowsOrGoats: true,
      hensOrDucks: true,
      business: true,
      farmingEquipments: true,
      misc: true,
    }, //( can be string representation as well dont know )
    education: {
      childrensEducation: true,
      educationHelp: true,
      books: true,
      instruments: true,
      childrensClothings: true,
      food: true,
      quranEducation: true,
      misc: true,
    }, // ( can be string representation as well dont know )
  },
  opinion: {
    placeToStay: true,
    toilet: true,
    safeWaterSource: true,
  }, //multiple option
  mustahik: {
    mustahik: true,
    fakir: false,
    miskin: true,
    amilin: false,
    muallatulKutub: true,
    rikkab: false,
    garimin: true,
    fiSabilillah: false,
  }, //only one codition should be taken so it can be only mustahik or fakir or miskin, but right now our instruction is to make everything mandatory
};

export const formSchema = z.object({
  mustahikCandidate: z.object({
    name: z.string().min(1).max(50),
    religion: z.string().min(1).max(50),
    age: z.string().min(1).max(100),
    occupation: z.string().min(1).max(50),
    identificationNumber: z.string().min(1).max(100),
    fatherOrHusbandName: z.string().min(1).max(50),
  }),
  condition: z.enum(["green", "yellow", "red"], {
    required_error: "Required",
  }),
  address: z.object({
    village: z.string().min(1).max(50),
    union: z.string().min(1).max(50),
    postOffice: z.string().min(1).max(50),
    thana: z.string().min(1).max(50),
    district: z.string().min(1).max(50),
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
      age: z.string().min(1).max(100),
      gender: z.string().min(1).max(100),
      educationLevel: z.string().min(1).max(100),
      relationToHeadOfFamily: z.string().min(1).max(100),
      occupation: z.string().min(1).max(100),
      disability: z.enum(["yes", "no"], {
        required_error: "Required",
      }),
      child: z.enum(["yes", "no"], {
        required_error: "Required",
      }),
      sick: z.enum(["yes", "no"], {
        required_error: "Required",
      }),
      jobless: z.enum(["yes", "no"], {
        required_error: "Required",
      }),
      ongoingMedicineOrTreatment: z.string().min(1).max(100),
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
    farming: z.coerce.number().min(1).max(100),
    business: z.coerce.number().min(1).max(100),
    animals: z.coerce.number().min(1).max(100),
    kutirBusiness: z.coerce.number().min(1).max(100),
    governmentGrants: z.coerce.number().min(1).max(100),
    job: z.coerce.number().min(1).max(100),
    miscSources: z.coerce.number().min(1).max(100),
    totalAmountOfCalculatableIncome: z.coerce.number().min(1).max(100),
    totalAmountOfUnverifiedIncome: z.coerce.number().min(1).max(100),
    totalYearlyIncome: z.coerce.number().min(1).max(100),
  }),
});
