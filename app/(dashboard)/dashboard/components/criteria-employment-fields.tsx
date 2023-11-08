"use client";

import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "../../../../components/ui/input";

export default function CriteriaEmployementFields() {
  const form = useFormContext();

  //   employment: {
  //     biniyog: true,
  //     land: true,
  //     kutir: true,
  //     cultivatingInstruments: true,
  //     cowsOrGoats: true,
  //     hensOrDucks: true,
  //     business: true,
  //     farmingEquipments: true,
  //     misc: true,
  //   },

  return (
    <section className="space-y-4">
      <FormField
        control={form.control}
        name="criteriaToGrant.employment.biniyog"
        render={({ field }) => (
          <FormItem>
            <FormLabel>বিনিয়োগ পুঁজি</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="criteriaToGrant.employment.land"
        render={({ field }) => (
          <FormItem>
            <FormLabel>কৃষিজমি</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="criteriaToGrant.employment.kutir"
        render={({ field }) => (
          <FormItem>
            <FormLabel>কুটির</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="criteriaToGrant.employment.cultivatingInstruments"
        render={({ field }) => (
          <FormItem>
            <FormLabel>উৎপাদন যন্ত্র</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="criteriaToGrant.employment.cowsOrGoats"
        render={({ field }) => (
          <FormItem>
            <FormLabel>গবাদি পশু</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="criteriaToGrant.employment.hensOrDucks"
        render={({ field }) => (
          <FormItem>
            <FormLabel>হাঁস মুরগি</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="criteriaToGrant.employment.business"
        render={({ field }) => (
          <FormItem>
            <FormLabel>ক্ষুদ্র ব্যাবসায়ের জন্য পুঁজি</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="criteriaToGrant.employment.farmingEquipments"
        render={({ field }) => (
          <FormItem>
            <FormLabel>কৃষি যন্ত্র</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="criteriaToGrant.employment.misc"
        render={({ field }) => (
          <FormItem>
            <FormLabel>অন্যান্য</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </section>
  );
}
