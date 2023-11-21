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

  // healthRelatedInfo: {
  //   lastingSickness: "Test",
  //   ongoingTreatmentOrMedicine: "Test",
  //   hasPregnancy: true,
  //   hasChronicSickness: true,
  //   hasCataract: true,
  //   hasHearingProblem: true,
  //   hasDisability: true,
  //   hasHealthEducation: true,
  // },

  return (
    <>
      <FormField
        control={form.control}
        name="healthRelatedInfo.lastingSickness"
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
        name={`healthRelatedInfo.hasPregnancy`}
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
        name={`healthRelatedInfo.hasChronicSickness`}
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
        name={`healthRelatedInfo.hasCataract`}
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
        name={`healthRelatedInfo.hasHearingProblem`}
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
        name={`healthRelatedInfo.hasDisability`}
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
        name={`healthRelatedInfo.hasHealthEducation`}
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
