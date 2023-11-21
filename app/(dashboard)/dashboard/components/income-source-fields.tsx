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

export default function YearlyIncomeSourceFields() {
  const form = useFormContext();

  // sourceOfIncome: {
  //   farming: 0,
  //   business: 0,
  //   animals: 0,
  //   kutirBusiness: 0,
  //   governmentGrants: 0,
  //   jobSalary: 0,
  //   misc: 0,
  // },

  return (
    <>
      <FormField
        control={form.control}
        name="sourceOfIncome.farming"
        render={({ field }) => (
          <FormItem>
            <FormLabel>কৃষিকাজ</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="sourceOfIncome.business"
        render={({ field }) => (
          <FormItem>
            <FormLabel>ক্ষুদ্র ব্যাবসা</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="sourceOfIncome.animals"
        render={({ field }) => (
          <FormItem>
            <FormLabel>গরু / ছাগল</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="sourceOfIncome.kutirBusiness"
        render={({ field }) => (
          <FormItem>
            <FormLabel>কুটির ব্যাবসা</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="sourceOfIncome.governmentGrants"
        render={({ field }) => (
          <FormItem>
            <FormLabel>সরকারি ভাতা (বিধবা / বয়স্ক)</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="sourceOfIncome.jobSalary"
        render={({ field }) => (
          <FormItem>
            <FormLabel>চাকুরী হতে আয়</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="sourceOfIncome.misc"
        render={({ field }) => (
          <FormItem>
            <FormLabel>অন্যান্য উৎস হতে আয়</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* <FormField
        control={form.control}
        name="sourceOfIncome.totalAmountOfCalculatableIncome"
        render={({ field }) => (
          <FormItem>
            <FormLabel>মোট যাচাইযোগ্য আয়</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="sourceOfIncome.totalAmountOfUnverifiedIncome"
        render={({ field }) => (
          <FormItem>
            <FormLabel>মোট যাচাই অযোগ্য আয়</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="sourceOfIncome.totalYearlyIncome"
        render={({ field }) => (
          <FormItem>
            <FormLabel>মোট বাৎসরিক আয়</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      /> */}
    </>
  );
}
