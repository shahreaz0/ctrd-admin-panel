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

export function SpendingFields() {
  const form = useFormContext();

  return (
    <>
      <FormField
        control={form.control}
        name="fieldsOfSpending.food"
        render={({ field }) => (
          <FormItem>
            <FormLabel>খাদ্য ব্যাবদ ব্যয়</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="fieldsOfSpending.education"
        render={({ field }) => (
          <FormItem>
            <FormLabel>শিক্ষা ব্যাবদ ব্যয়</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="fieldsOfSpending.medicineOrTreatment"
        render={({ field }) => (
          <FormItem>
            <FormLabel>ঔষধ / চিকিৎসা ব্যাবদ ব্যয়</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="fieldsOfSpending.debtInstallments"
        render={({ field }) => (
          <FormItem>
            <FormLabel>ঋণের কিস্তি পরিশোধ</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="fieldsOfSpending.misc"
        render={({ field }) => (
          <FormItem>
            <FormLabel>অন্যান্য খ্যাতে ব্যয়</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="fieldsOfSpending.totalYearlySpending"
        render={({ field }) => (
          <FormItem>
            <FormLabel>মোট বাৎসরিক ব্যয়</FormLabel>
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
