"use client";

import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ExtraFields() {
  const form = useFormContext();

  //   "hasGoodPlaceToStay": true,
  //   "hasSafeToilet": true,
  //   "hasSafeWaterSource": true,

  return (
    <>
      <FormField
        control={form.control}
        name="hasGoodPlaceToStay"
        render={({ field }) => (
          <FormItem>
            <FormLabel>ভালো বাসস্থান</FormLabel>
            <section className="relative">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent position="popper">
                  <SelectItem value="yes">হ্যা</SelectItem>
                  <SelectItem value="no">না</SelectItem>
                </SelectContent>
              </Select>
            </section>
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
            <section className="relative">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent position="popper">
                  <SelectItem value="yes">হ্যা</SelectItem>
                  <SelectItem value="no">না</SelectItem>
                </SelectContent>
              </Select>
            </section>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="hasSafeWaterSource"
        render={({ field }) => (
          <FormItem>
            <FormLabel>নিরাপদ পানি</FormLabel>
            <section className="relative">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent position="popper">
                  <SelectItem value="yes">হ্যা</SelectItem>
                  <SelectItem value="no">না</SelectItem>
                </SelectContent>
              </Select>
            </section>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
