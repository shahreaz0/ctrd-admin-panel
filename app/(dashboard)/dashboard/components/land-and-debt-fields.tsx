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

  return (
    <>
      <FormField
        control={form.control}
        name="landAndDebtDescription.house"
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
        name="landAndDebtDescription.land"
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
        name="landAndDebtDescription.numberOfCowsOrGoats"
        render={({ field }) => (
          <FormItem>
            <FormLabel>গরু ও ছাগলের সংখ্যা</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="landAndDebtDescription.cultivationInstruments"
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
        name="landAndDebtDescription.numberOfChickensOrDucks"
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
        name="landAndDebtDescription.existingAssetInCurrency"
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
        name="landAndDebtDescription.totalDebt"
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
