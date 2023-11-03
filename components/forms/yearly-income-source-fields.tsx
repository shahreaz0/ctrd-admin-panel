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

  //   yearly_income_source: z.object({
  //     farming: z.string().min(1).max(100),
  //     small_business: z.string().min(1).max(100),
  //     cattle: z.string().min(1).max(100),
  //     kutir_business: z.string().min(1).max(100),
  //     govt_fund: z.string().min(1).max(100),
  //     job_income: z.string().min(1).max(100),
  //     others_income: z.string().min(1).max(100),
  //     total_worthy_income: z.string().min(1).max(100),
  //     total_unworthy_income: z.string().min(1).max(100),
  //     total_yearly_income: z.string().min(1).max(100),
  //   }),

  return (
    <>
      <FormField
        control={form.control}
        name="yearly_income_source.farming"
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
        name="yearly_income_source.small_business"
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
        name="yearly_income_source.cattle"
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
        name="yearly_income_source.kutir_business"
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
        name="yearly_income_source.govt_fund"
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
        name="yearly_income_source.job_income"
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
        name="yearly_income_source.others_income"
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

      <FormField
        control={form.control}
        name="yearly_income_source.total_worthy_income"
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
        name="yearly_income_source.total_unworthy_income"
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
        name="yearly_income_source.total_yearly_income"
        render={({ field }) => (
          <FormItem>
            <FormLabel>মোট বাৎসরিক আয়</FormLabel>
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
