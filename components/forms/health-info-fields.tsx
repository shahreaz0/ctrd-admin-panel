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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HealthInfoFields() {
  const form = useFormContext();

  //   healthRelatedInfo: {
  //     lastingSicknesses: "None",
  //     ongoingTreatmentOrMedicine: "None",
  //     pregnancy: false,
  //     chronicSickness: false,
  //     cataract: false,
  //     hearingProblem: false,
  //     disable: false,
  //     healthEducation: true,
  //   },

  return (
    <>
      <FormField
        control={form.control}
        name="healthRelatedInfo.lastingSicknesses"
        render={({ field }) => (
          <FormItem>
            <FormLabel>দীর্ঘস্থায়ী অসুস্থতা</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="healthRelatedInfo.ongoingTreatmentOrMedicine"
        render={({ field }) => (
          <FormItem>
            <FormLabel>নিয়মিত ঔষধ / চিকিৎসা</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`healthRelatedInfo.pregnancy`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>গর্ভবতী / প্রসূতী নারী</FormLabel>
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
        name={`healthRelatedInfo.chronicSickness`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>জটিল রোগ / চিকিৎসা</FormLabel>
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
        name={`healthRelatedInfo.cataract`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>চোখের ছানি</FormLabel>
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
        name={`healthRelatedInfo.hearingProblem`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>স্রবণ সমস্যা</FormLabel>
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
        name={`healthRelatedInfo.disable`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>প্রতিবন্ধী</FormLabel>
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
        name={`healthRelatedInfo.healthEducation`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>স্বাস্থ্যশিক্ষা</FormLabel>
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
