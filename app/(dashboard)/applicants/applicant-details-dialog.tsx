import { Dispatch, SetStateAction } from "react";
import { CONDITION, GENDER } from "@/configs/globals";

import { Mustahik } from "@/types/mustahik";
import { getKeyByValue } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  mustahik: Mustahik;
};

export function ApplicantDetailsDialog(props: Props) {
  const { mustahik } = props;

  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });

  return (
    <Dialog open={props.open} onOpenChange={props.setOpen}>
      <DialogContent className="max-h-[80vh] max-w-[80vw] overflow-auto">
        <DialogHeader>
          <DialogTitle>{mustahik.name}</DialogTitle>
          <DialogDescription>{mustahik.mobile}</DialogDescription>
        </DialogHeader>
        <section className="space-y-8">
          <section>
            <h1 className="mb-2 text-lg">মুস্তাহিক প্রার্থী</h1>
            <section className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <Label>প্রার্থীর নাম</Label>
                <p className="text-sm">{mustahik.name}</p>
              </div>

              <div className="space-y-1">
                <Label>ধর্ম</Label>
                <p className="text-sm">{mustahik.religion || "--"}</p>
              </div>
              <div className="space-y-1">
                <Label>লিঙ্গ</Label>
                <p className="text-sm capitalize">
                  {getKeyByValue(GENDER, +mustahik.gender) || "--"}
                </p>
              </div>
              <div className="space-y-1">
                <Label>বয়স</Label>
                <p className="text-sm">{mustahik.age || "--"}</p>
              </div>
              <div className="space-y-1">
                <Label>পেশা</Label>
                <p className="text-sm">{mustahik.occupation || "--"}</p>
              </div>
              <div className="space-y-1">
                <Label>পিতা/ স্বামীর নাম</Label>
                <p className="text-sm">{mustahik.fatherOrHusbandName || "--"}</p>
              </div>
              <div className="space-y-1">
                <Label>ফোন নম্বর</Label>
                <p className="text-sm">{mustahik.mobile || "--"}</p>
              </div>
              <div className="space-y-1">
                <Label>পরিচয়পত্র নম্বর</Label>
                <p className="text-sm">{mustahik.nationalIdentificationNumber || "--"}</p>
              </div>
            </section>
          </section>

          <section>
            <h1 className="mb-2 text-lg">অবস্থা</h1>
            <section className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <Label>বর্তমান অবস্থা</Label>
                <p className="text-sm capitalize">
                  {getKeyByValue(CONDITION, +mustahik.condition) || "--"}
                </p>
              </div>
            </section>
          </section>

          <section>
            <h1 className="mb-2 text-lg">ঠিকানা</h1>
            <section className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <Label>গ্রামঃ</Label>
                <p className="text-sm">{mustahik.village || "--"}</p>
              </div>

              <div className="space-y-1">
                <Label>ইউনিয়ন</Label>
                <p className="text-sm">{mustahik.union || "--"}</p>
              </div>
              <div className="space-y-1">
                <Label>পোস্টঅফিস</Label>
                <p className="text-sm capitalize">{mustahik.postOffice || "--"}</p>
              </div>
              <div className="space-y-1">
                <Label>থানা</Label>
                <p className="text-sm">{mustahik.thana || "--"}</p>
              </div>
              <div className="space-y-1">
                <Label>জেলা</Label>
                <p className="text-sm">{mustahik.district || "--"}</p>
              </div>
            </section>
          </section>

          <section>
            <h1 className="mb-2 text-lg">ব্যাংক একাউন্ট</h1>
            {mustahik.bankAccounts.map((info, i) => (
              <div key={i}>
                <p className="underline">তথ্য {i + 1}</p>
                <section className="grid grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <Label>নাম</Label>
                    <p className="text-sm">{info.accountHolderName || "--"}</p>
                  </div>

                  <div className="space-y-1">
                    <Label>ব্যাংক</Label>
                    <p className="text-sm">{info.bankName || "--"}</p>
                  </div>
                  <div className="space-y-1">
                    <Label>একাউন্ট নং</Label>
                    <p className="text-sm capitalize">{info.accountNumber || "--"}</p>
                  </div>
                  <div className="space-y-1">
                    <Label>ব্রাঞ্চ</Label>
                    <p className="text-sm">{info.branchName || "--"}</p>
                  </div>
                </section>
              </div>
            ))}
          </section>

          <section>
            <h1 className="mb-2 text-lg">পারিবারিক তথ্য</h1>
            {mustahik.familyMembers.map((info, i) => (
              <div key={i}>
                <p className="underline">তথ্য {i + 1}</p>
                <section className="grid grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <Label>নাম</Label>
                    <p className="text-sm">{info.name || "--"}</p>
                  </div>

                  <div className="space-y-1">
                    <Label>বয়স</Label>
                    <p className="text-sm">{info.age || "--"}</p>
                  </div>
                  <div className="space-y-1">
                    <Label>লিঙ্গ</Label>
                    <p className="text-sm capitalize">
                      {getKeyByValue(GENDER, info.gender)}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <Label>শিক্ষা</Label>
                    <p className="text-sm">{info.educationLevel || "--"}</p>
                  </div>
                  <div className="space-y-1">
                    <Label>পরিবার প্রধানের সাথে সম্পর্ক</Label>
                    <p className="text-sm">{info.relationToHof || "--"}</p>
                  </div>
                  <div className="space-y-1">
                    <Label>পেশা ( ছাত্র / ছাত্রী হলে শ্রেণী )</Label>
                    <p className="text-sm">{info.occupation || "--"}</p>
                  </div>
                  <div className="space-y-1">
                    <Label>প্রতিবন্ধী</Label>
                    <p className="text-sm">{info.hasDisability || "--"}</p>
                  </div>
                  <div className="space-y-1">
                    <Label>শিশু</Label>
                    <p className="text-sm">{info.isChild || "--"}</p>
                  </div>
                  <div className="space-y-1">
                    <Label>রোগাক্রান্ত</Label>
                    <p className="text-sm">{info.isSick || "--"}</p>
                  </div>
                  <div className="space-y-1">
                    <Label>বেকার</Label>
                    <p className="text-sm">{info.isJobless || "--"}</p>
                  </div>

                  <div className="space-y-1">
                    <Label>নিয়মিত ঔষধ / চিকিৎসা</Label>
                    <p className="text-sm">{info.ongoingMedicineOrTreatment || "--"}</p>
                  </div>
                </section>
              </div>
            ))}
          </section>

          <section>
            <h1 className="mb-2 text-lg">পারিবারিক সম্পত্তি</h1>
            <section className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <Label>ঘর (শতাংশ)</Label>
                <p className="text-sm">{mustahik.landAndDebtDesc?.house || "--"}</p>
              </div>

              <div className="space-y-1">
                <Label>কৃষিজমি (শতাংশ)</Label>
                <p className="text-sm">{mustahik.landAndDebtDesc?.land || "--"}</p>
              </div>

              <div className="space-y-1">
                <Label>গরুর সংখ্যা</Label>
                <p className="text-sm capitalize">
                  {mustahik.landAndDebtDesc?.numberOfCows || "--"}
                </p>
              </div>
              <div className="space-y-1">
                <Label>ছাগলের সংখ্যা</Label>
                <p className="text-sm">
                  {mustahik.landAndDebtDesc.numberOfGoats || "--"}
                </p>
              </div>
              <div className="space-y-1">
                <Label>উৎপাদনশীল যন্ত্রপাতি</Label>
                <p className="text-sm">
                  {mustahik.landAndDebtDesc.cultivationInstruments}
                </p>
              </div>

              <div className="space-y-1">
                <Label>হাঁস ও মুরগির সংখ্যা</Label>
                <p className="text-sm">
                  {mustahik.landAndDebtDesc.numberOfChickenAndDucks}
                </p>
              </div>
              <div className="space-y-1">
                <Label>নগদ / স্বর্ণ / রৌপ্য (টাকায়)</Label>
                <p className="text-sm">
                  {mustahik.landAndDebtDesc.existingAssetInCurrency}
                </p>
              </div>
              <div className="space-y-1">
                <Label>সুদী দেনার পরিমান</Label>
                <p className="text-sm">
                  {mustahik.landAndDebtDesc.interestLoanAmount || "--"}
                </p>
              </div>

              <div className="space-y-1">
                <Label>সর্বমোট দেনার পরিমাণ</Label>
                <p className="text-sm">{mustahik.landAndDebtDesc.totalDebt || "--"}</p>
              </div>
            </section>
          </section>

          <section>
            <h1 className="mb-2 text-lg">দেনার পরিমাণ</h1>
            {mustahik.debtDescriptions.map((info, i) => (
              <div key={i}>
                <p className="underline">তথ্য {i + 1}</p>
                <section className="grid grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <Label>NGO</Label>
                    <p className="text-sm">{info.ngo}</p>
                  </div>

                  <div className="space-y-1">
                    <Label>Bank</Label>
                    <p className="text-sm">{info.bank}</p>
                  </div>
                  <div className="space-y-1">
                    <Label>সমবায়</Label>
                    <p className="text-sm capitalize">{info.shomobay}</p>
                  </div>
                  <div className="space-y-1">
                    <Label>দাদন</Label>
                    <p className="text-sm">{info.dadon}</p>
                  </div>

                  <div className="space-y-1">
                    <Label>অন্যান্য</Label>
                    <p className="text-sm">{info.misc}</p>
                  </div>

                  <div className="space-y-1">
                    <Label>দেনার উদ্দেশ্য</Label>
                    <p className="text-sm">{info.purpose}</p>
                  </div>
                </section>
              </div>
            ))}
          </section>

          <section>
            <h1 className="mb-2 text-lg">বাৎসরিক পারিবারিক আয়ের উৎস</h1>
            <section className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <Label>কৃষিকাজ</Label>
                <p className="text-sm">{mustahik.sourceOfIncome.farming}</p>
              </div>

              <div className="space-y-1">
                <Label>ক্ষুদ্র ব্যাবসা</Label>
                <p className="text-sm">{mustahik.sourceOfIncome.business}</p>
              </div>

              <div className="space-y-1">
                <Label>গরু / ছাগল</Label>
                <p className="text-sm capitalize">{mustahik.sourceOfIncome.animals}</p>
              </div>
              <div className="space-y-1">
                <Label>কুটির ব্যাবসা</Label>
                <p className="text-sm">{mustahik.sourceOfIncome.kutirBusiness}</p>
              </div>
              <div className="space-y-1">
                <Label>সরকারি ভাতা (বিধবা / বয়স্ক)</Label>
                <p className="text-sm">{mustahik.sourceOfIncome.governmentGrants}</p>
              </div>

              <div className="space-y-1">
                <Label>চাকুরী হতে আয়</Label>
                <p className="text-sm">{mustahik.sourceOfIncome.jobSalary}</p>
              </div>
              <div className="space-y-1">
                <Label>অন্যান্য উৎস হতে আয়</Label>
                <p className="text-sm">{mustahik.sourceOfIncome.misc}</p>
              </div>
              <div className="space-y-1">
                <Label>মোট বাৎসরিক আয়</Label>
                <p className="text-sm">{mustahik.sourceOfIncome.totalYearlyIncome}</p>
              </div>
            </section>
          </section>

          <section>
            <h1 className="mb-2 text-lg">বাৎসরিক পারিবারিক বায়ের খাতসমূহ</h1>
            <section className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <Label>খাদ্য ব্যাবদ ব্যয়</Label>
                <p className="text-sm">{mustahik.fieldsOfSpending?.food}</p>
              </div>

              <div className="space-y-1">
                <Label>শিক্ষা ব্যাবদ ব্যয়</Label>
                <p className="text-sm">{mustahik.fieldsOfSpending?.education}</p>
              </div>

              <div className="space-y-1">
                <Label>ঔষধ / চিকিৎসা ব্যাবদ ব্যয়</Label>
                <p className="text-sm capitalize">
                  {mustahik.fieldsOfSpending?.medicineOrTreatment}
                </p>
              </div>
              <div className="space-y-1">
                <Label>ঋণের কিস্তি পরিশোধ</Label>
                <p className="text-sm">{mustahik.fieldsOfSpending?.debtInstallments}</p>
              </div>
              <div className="space-y-1">
                <Label>অন্যান্য খ্যাতে ব্যয়</Label>
                <p className="text-sm">{mustahik.fieldsOfSpending?.misc}</p>
              </div>

              <div className="space-y-1">
                <Label>মোট বাৎসরিক ব্যয়</Label>
                <p className="text-sm">
                  {mustahik.fieldsOfSpending?.totalYearlySpending}
                </p>
              </div>
            </section>
          </section>

          <section>
            <h1 className="mb-2 text-lg">স্বাস্থ্য সংক্রান্ত তথ্য</h1>
            <section className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <Label>দীর্ঘস্থায়ী অসুস্থতা</Label>
                <p className="text-sm">{mustahik.healthRelatedInfo?.lastingSickness}</p>
              </div>

              <div className="space-y-1">
                <Label>নিয়মিত ঔষধ / চিকিৎসা</Label>
                <p className="text-sm">
                  {mustahik.healthRelatedInfo?.ongoingTreatmentOrMedicine}
                </p>
              </div>

              <div className="space-y-1">
                <Label>গর্ভবতী / প্রসূতী নারী</Label>
                <p className="text-sm capitalize">
                  {mustahik.healthRelatedInfo?.hasPregnancy}
                </p>
              </div>
              <div className="space-y-1">
                <Label>জটিল রোগ / চিকিৎসা</Label>
                <p className="text-sm">
                  {mustahik.healthRelatedInfo?.hasChronicSickness}
                </p>
              </div>
              <div className="space-y-1">
                <Label>চোখের ছানি</Label>
                <p className="text-sm">{mustahik.healthRelatedInfo?.hasCataract}</p>
              </div>

              <div className="space-y-1">
                <Label>স্রবণ সমস্যা</Label>
                <p className="text-sm">{mustahik.healthRelatedInfo?.hasHearingProblem}</p>
              </div>
              <div className="space-y-1">
                <Label>প্রতিবন্ধী</Label>
                <p className="text-sm">{mustahik.healthRelatedInfo?.hasDisability}</p>
              </div>
              <div className="space-y-1">
                <Label>স্বাস্থ্যশিক্ষা</Label>
                <p className="text-sm">
                  {mustahik.healthRelatedInfo?.hasHealthEducation}
                </p>
              </div>
            </section>
          </section>

          <section className="criteria">
            <h1 className="text-lg">চাহিদা নিরুপন</h1>
            <section className="mt-2 grid grid-cols-3 gap-4">
              <section>
                <h1 className="mb-2 text-base text-gray-400">ইনসানিয়াত</h1>
                <section className="space-y-4">
                  <div className="space-y-1">
                    <Label>ঘর নির্মাণ</Label>
                    <p className="text-sm">{mustahik.criteriaToGrant?.insaniat?.house}</p>
                  </div>
                  <div className="space-y-1">
                    <Label>খাদ্য সহায়তা</Label>
                    <p className="text-sm">{mustahik.criteriaToGrant?.insaniat?.food}</p>
                  </div>
                  <div className="space-y-1">
                    <Label>এতিম ভাতা</Label>
                    <p className="text-sm">
                      {mustahik.criteriaToGrant?.insaniat?.orphan}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <Label>পরিধেয় বস্ত্র</Label>
                    <p className="text-sm">
                      {mustahik.criteriaToGrant?.insaniat?.clothes}
                    </p>
                  </div>
                </section>
              </section>
              <section>
                <h1 className="mb-2 text-base text-gray-400">কর্মসংস্থান</h1>
                <section className="space-y-4">
                  <div className="space-y-1">
                    <Label>বিনিয়োগ পুঁজি</Label>
                    <p className="text-sm">
                      {mustahik.criteriaToGrant?.employment?.biniyog}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <Label>কৃষিজমি</Label>
                    <p className="text-sm">
                      {mustahik.criteriaToGrant?.employment?.land}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <Label>কুটির</Label>
                    <p className="text-sm">
                      {mustahik.criteriaToGrant?.employment?.kutir}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <Label>উৎপাদন যন্ত্র</Label>
                    <p className="text-sm">
                      {mustahik.criteriaToGrant?.employment?.cultivatingInstruments}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <Label>গবাদি পশু</Label>
                    <p className="text-sm">
                      {mustahik.criteriaToGrant?.employment?.cowsOrGoats}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <Label>হাঁস মুরগি</Label>
                    <p className="text-sm">
                      {mustahik.criteriaToGrant?.employment?.hensOrDucks}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <Label>ক্ষুদ্র ব্যাবসায়ের জন্য পুঁজি</Label>
                    <p className="text-sm">
                      {mustahik.criteriaToGrant?.employment?.business}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <Label>কৃষি যন্ত্র</Label>
                    <p className="text-sm">
                      {mustahik.criteriaToGrant?.employment?.farmingEquipments}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <Label>অন্যান্য</Label>
                    <p className="text-sm">
                      {mustahik.criteriaToGrant?.employment?.misc}
                    </p>
                  </div>
                </section>
              </section>

              <section>
                <h1 className="mb-2 text-base text-gray-400">শিক্ষা</h1>
                <section className="space-y-4">
                  <div className="space-y-1">
                    <Label>শিশু শিক্ষা</Label>
                    <p className="text-sm">
                      {mustahik.criteriaToGrant?.education?.childrenEducation}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <Label>শিক্ষা সহায়তা</Label>
                    <p className="text-sm">
                      {mustahik.criteriaToGrant?.education?.educationHelp}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <Label>পাঠ্যবই</Label>
                    <p className="text-sm">
                      {mustahik.criteriaToGrant?.education?.books}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <Label>শিক্ষা উপকরণ</Label>
                    <p className="text-sm">
                      {mustahik.criteriaToGrant?.education?.instruments}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <Label>শিশু বস্ত্র</Label>
                    <p className="text-sm">
                      {mustahik.criteriaToGrant?.education?.childrenClothing}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <Label>পুষ্টিকর খাবার</Label>
                    <p className="text-sm">{mustahik.criteriaToGrant?.education?.food}</p>
                  </div>
                  <div className="space-y-1">
                    <Label>কুরআন শিক্ষা</Label>
                    <p className="text-sm">
                      {mustahik.criteriaToGrant?.education?.quranEducation}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <Label>অন্যান্য</Label>
                    <p className="text-sm">{mustahik.criteriaToGrant?.education?.misc}</p>
                  </div>
                </section>
              </section>
            </section>
          </section>

          <section>
            <h1 className="mb-2 text-lg">অন্যান্য</h1>
            <section className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <Label>ভালো বাসস্থান</Label>
                <p className="text-sm">{mustahik.hasGoodPlaceToStay || "--"}</p>
              </div>

              <div className="space-y-1">
                <Label>নিরাপদ টয়লেট</Label>
                <p className="text-sm">{mustahik.hasSafeToilet || "--"}</p>
              </div>

              <div className="space-y-1">
                <Label>পানির উৎস</Label>
                <p className="text-sm">{mustahik.hasSafeWaterSource || "--"}</p>
              </div>
            </section>
          </section>

          <section>
            <h1 className="mb-2 text-lg">মুস্তাহিক</h1>
            <section className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <p className="text-sm">
                  {formatter.format(mustahik.status.map((s) => s.status)) || "--"}
                </p>
              </div>
            </section>
          </section>
        </section>
      </DialogContent>
    </Dialog>
  );
}
