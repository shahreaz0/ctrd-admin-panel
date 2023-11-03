"use client";

import { useFieldArray, useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

import { Trash2 } from "lucide-react";

export default function DebtorsFields() {
  const form = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "debtors",
  });

  return (
    <section>
      {fields.map((field, index) => {
        return (
          <>
            <section className="flex items-center justify-between mt-4 first:mt-0">
              <p className="text-base font-medium underline">তথ্য {index + 1}</p>
              {index > 0 && (
                <Button
                  size="sm"
                  variant="destructive"
                  className="h-8"
                  type="button"
                  onClick={() => remove(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </section>
            <section key={field.id} className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name={`debtors.${index}.ngo`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NGO</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`debtors.${index}.bank`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bank</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`debtors.${index}.samabay`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>সমবায়</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`debtors.${index}.dadan`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>দাদন</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`debtors.${index}.others`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>অন্যান্য</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`debtors.${index}.debt_purpose`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>দেনার উদ্দেশ্য</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>
          </>
        );
      })}

      <Button
        className="w-full mt-4"
        type="button"
        onClick={() => {
          append({ name: "", age: "" });
        }}
      >
        Add Another
      </Button>
    </section>
  );
}
