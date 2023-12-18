"use client";

import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function FamilyPropertyFields() {
  const form = useFormContext();

  // landAndDebtDesc: {
  //   house: "Test",
  //   land: "Test",
  //   numberOfCowsAndGoats: 0,
  //   cultivationInstruments: "Test",
  //   numberOfChickenAndDucks: 0,
  //   existingAssetInCurrency: 0,
  //   totalDebt: 0,
  // },

  return (
    <>
      <FormField
        control={form.control}
        name="landAndDebtDesc.house"
        render={({ field }) => (
          <FormItem>
            <FormLabel>ঘর (শতাংশ)</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="landAndDebtDesc.land"
        render={({ field }) => (
          <FormItem>
            <FormLabel>কৃষিজমি (শতাংশ)</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="landAndDebtDesc.numberOfCows"
        render={({ field }) => (
          <FormItem>
            <FormLabel>গরুর সংখ্যা</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="landAndDebtDesc.numberOfGoats"
        render={({ field }) => (
          <FormItem>
            <FormLabel>ছাগলের সংখ্যা</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="landAndDebtDesc.cultivationInstruments"
        render={({ field }) => (
          <FormItem>
            <FormLabel>উৎপাদনশীল যন্ত্রপাতি</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="landAndDebtDesc.numberOfChickenAndDucks"
        render={({ field }) => (
          <FormItem>
            <FormLabel>হাঁস ও মুরগির সংখ্যা</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="landAndDebtDesc.existingAssetInCurrency"
        render={({ field }) => (
          <FormItem>
            <FormLabel>নগদ / স্বর্ণ / রৌপ্য (টাকায়) </FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="landAndDebtDesc.interestLoanAmount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>সুদী দেনার পরিমান</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="landAndDebtDesc.totalDebt"
        render={({ field }) => (
          <FormItem>
            <FormLabel>সর্বমোট দেনার পরিমাণ</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
