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

import { Button } from "../../../../components/ui/button";

export default function BankAccountFields() {
  const form = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "bankAccount",
  });

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
                name={`bankAccount.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>নাম</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`bankAccount.${index}.bank`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ব্যাংক</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`bankAccount.${index}.accountNo`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>একাউন্ট নং</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`bankAccount.${index}.branch`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ব্রাঞ্চ</FormLabel>
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
        onClick={() => {
          append({
            accountNo: "",
            bank: "",
            branch: "",
            name: "",
          });
        }}
      >
        Add Another
      </Button>
    </section>
  );
}
