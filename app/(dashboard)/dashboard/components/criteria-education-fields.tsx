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

export default function CriteriaEducationFields() {
  const form = useFormContext();

  //   education: {
  //     childrensEducation: true,
  //     educationHelp: true,
  //     books: true,
  //     instruments: true,
  //     childrensClothings: true,
  //     food: true,
  //     quranEducation: true,
  //     misc: true,
  //   },

  return (
    <section className="space-y-4">
      <FormField
        control={form.control}
        name="criteriaToGrant.education.childrensEducation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>শিশু শিক্ষা</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="criteriaToGrant.education.educationHelp"
        render={({ field }) => (
          <FormItem>
            <FormLabel>শিক্ষা সহায়তা</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="criteriaToGrant.education.books"
        render={({ field }) => (
          <FormItem>
            <FormLabel>পাঠ্যবই</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="criteriaToGrant.education.instruments"
        render={({ field }) => (
          <FormItem>
            <FormLabel>শিক্ষা উপকরণ</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="criteriaToGrant.education.childrensClothings"
        render={({ field }) => (
          <FormItem>
            <FormLabel>শিশু বস্ত্র</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="criteriaToGrant.education.food"
        render={({ field }) => (
          <FormItem>
            <FormLabel>পুষ্টিকর খাবার</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="criteriaToGrant.education.quranEducation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>কুরআন শিক্ষা</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="criteriaToGrant.education.misc"
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
