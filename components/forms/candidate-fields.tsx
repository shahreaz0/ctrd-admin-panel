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

export default function CandidateFields() {
  const form = useFormContext();

  return (
    <>
      <FormField
        control={form.control}
        name="candidate.name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>প্রার্থীর নাম</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="candidate.religion"
        render={({ field }) => (
          <FormItem>
            <FormLabel>ধর্ম</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="candidate.age"
        render={({ field }) => (
          <FormItem>
            <FormLabel>বয়স</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="candidate.profession"
        render={({ field }) => (
          <FormItem>
            <FormLabel>পেশা</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="candidate.guardian_name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>পিতা/ স্বামীর নাম</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="candidate.identification_number"
        render={({ field }) => (
          <FormItem>
            <FormLabel>সনাক্তকরণ নম্বর</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
