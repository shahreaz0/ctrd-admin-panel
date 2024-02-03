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

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

export function CriteriaInsaniatFields() {
  const form = useFormContext();

  // insaniat: {
  //   house: true,
  //   food: true,
  //   orphan: false,
  //   clothes: true,
  // }

  return (
    <section className="space-y-4">
      <FormField
        control={form.control}
        name="criteriaToGrant.insaniat.house"
        render={({ field }) => (
          <FormItem>
            <FormLabel>ঘর নির্মাণ</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="criteriaToGrant.insaniat.food"
        render={({ field }) => (
          <FormItem>
            <FormLabel>খাদ্য সহায়তা</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="criteriaToGrant.insaniat.orphan"
        render={({ field }) => (
          <FormItem>
            <FormLabel>এতিম ভাতা</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="criteriaToGrant.insaniat.clothes"
        render={({ field }) => (
          <FormItem>
            <FormLabel>পরিধেয় বস্ত্র</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      {/* <FormField
        control={form.control}
        name={`criteriaToGrant.insaniat.clothes`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>পরিধেয় বস্ত্র</FormLabel>
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
      /> */}
    </section>
  );
}
