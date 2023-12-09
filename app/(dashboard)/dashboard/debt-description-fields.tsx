"use client";

import { Fragment } from "react";
import { Trash2 } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Button } from "../../../components/ui/button";

export default function DebtorsFields() {
  const form = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "debtDescriptions",
  });

  // debtDescriptions: [
  //   {
  //     ngo: 0,
  //     bank: 0,
  //     shomobay: 0,
  //     dadon: 0,
  //     misc: 0,
  //     purpose: "Test",
  //   },
  // ],

  return (
    <section>
      {fields.map((field, index) => {
        return (
          <Fragment key={field.id}>
            <section className="mt-4 flex items-center justify-between first:mt-0">
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
                name={`debtDescriptions.${index}.ngo`}
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
                name={`debtDescriptions.${index}.bank`}
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
                name={`debtDescriptions.${index}.shomobay`}
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
                name={`debtDescriptions.${index}.dadon`}
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
                name={`debtDescriptions.${index}.misc`}
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
                name={`debtDescriptions.${index}.purpose`}
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
          </Fragment>
        );
      })}

      <Button
        className="mt-4 w-full"
        type="button"
        onClick={() =>
          append({
            bank: undefined,
            dadon: undefined,
            purposeOfDebt: undefined,
            ngo: undefined,
            misc: undefined,
            somobay: undefined,
          })
        }
      >
        Add Another
      </Button>
    </section>
  );
}
