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
        name="family_property.house_percent"
        render={({ field }) => (
          <FormItem>
            <FormLabel>ঘর (শতাংশ)</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="family_property.land_percent"
        render={({ field }) => (
          <FormItem>
            <FormLabel>কৃষিজমি (শতাংশ)</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="family_property.cattle_number"
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
        name="family_property.produce_machine"
        render={({ field }) => (
          <FormItem>
            <FormLabel>উৎপাদনশীল যন্ত্রপাতি</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="family_property.hen_number"
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
        name="family_property.cash_amount"
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
        name="family_property.loan_amount"
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
