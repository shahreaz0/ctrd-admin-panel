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

export function ExtraFields() {
  const form = useFormContext();

  return (
    <>
      <FormField
        control={form.control}
        name="hasGoodPlaceToStay"
        render={({ field }) => (
          <FormItem>
            <FormLabel>ভালো বাসস্থান</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="hasSafeToilet"
        render={({ field }) => (
          <FormItem>
            <FormLabel>নিরাপদ টয়লেট</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="hasSafeWaterSource"
        render={({ field }) => (
          <FormItem>
            <FormLabel>পানির উৎস</FormLabel>
            <Input {...field} />
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
