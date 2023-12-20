export type Mustahik = {
  id: number;
  name: string;
  religion: string;
  age: number;
  mobile: string;
  gender: string;
  occupation: string;
  nationalIdentificationNumber: string;
  fatherOrHusbandName: string;
  condition: string;
  village: string;
  union: string;
  postOffice: string;
  thana: string;
  district: string;
  hasGoodPlaceToStay: string;
  hasSafeToilet: string;
  hasSafeWaterSource: string;
  status: Status[];
  bankAccounts: BankAccount[];
  familyMembers: FamilyMember[];
  landAndDebtDesc: LandAndDebtDesc;
  debtDescriptions: DebtDescription[];
  sourceOfIncome: SourceOfIncome;
  fieldsOfSpending: FieldsOfSpending;
  healthRelatedInfo: HealthRelatedInfo;
  criteriaToGrant: CriteriaToGrant;
  acceptanceStatus: string;
  generalComment: string;
  programId: number;
  acceptedStatusUpdatedByUserId: string;
  addedByUserId: string;
};

export type BankAccount = {
  id: number;
  accountHolderName: string;
  bankName: string;
  accountNumber: string;
  branchName: string;
};

export type CriteriaToGrant = {
  id: number;
  insaniat: Insaniat;
  employment: Employment;
  education: Education;
};

export type Education = {
  id: number;
  childrenEducation: string;
  educationHelp: string;
  books: string;
  instruments: string;
  childrenClothing: string;
  food: string;
  quranEducation: string;
  misc: string;
};

export type Employment = {
  id: number;
  biniyog: string;
  land: string;
  kutir: string;
  cultivatingInstruments: string;
  cowsOrGoats: string;
  hensOrDucks: string;
  business: string;
  farmingEquipments: string;
  misc: string;
};

export type Insaniat = {
  id: number;
  house: string;
  food: string;
  orphan: string;
  clothes: string;
};

export type DebtDescription = {
  id: number;
  ngo: number;
  bank: number;
  shomobay: number;
  dadon: number;
  misc: number;
  purpose: string;
};

export type FamilyMember = {
  id: number;
  name: string;
  age: number;
  gender: number;
  educationLevel: string;
  relationToHof: string;
  occupation: string;
  hasDisability: string;
  isChild: string;
  isSick: string;
  isJobless: string;
  ongoingMedicineOrTreatment: string;
};

export type FieldsOfSpending = {
  id: number;
  food: number;
  education: number;
  medicineOrTreatment: number;
  debtInstallments: number;
  totalYearlySpending: number;
  misc: number;
};

export type HealthRelatedInfo = {
  id: number;
  lastingSickness: string;
  ongoingTreatmentOrMedicine: string;
  hasPregnancy: string;
  hasChronicSickness: string;
  hasCataract: string;
  hasHearingProblem: string;
  hasDisability: string;
  hasHealthEducation: string;
};

export type LandAndDebtDesc = {
  id: number;
  house: string;
  land: string;
  numberOfCows: number;
  numberOfGoats: number;
  interestLoanAmount: number;
  cultivationInstruments: string;
  numberOfChickenAndDucks: number;
  existingAssetInCurrency: number;
  totalDebt: number;
};

export type SourceOfIncome = {
  id: number;
  farming: number;
  business: number;
  animals: number;
  kutirBusiness: number;
  governmentGrants: number;
  jobSalary: number;
  dailyWages: number;
  totalYearlyIncome: number;
  misc: number;
};

export type Status = {
  id: number;
  status: string;
};
