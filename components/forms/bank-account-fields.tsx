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

export default function BankAccountFields() {
  const form = useFormContext();

  return (
    <>
      <FormField
        control={form.control}
        name="bank_account.name"
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
        name="bank_account.bank"
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
        name="bank_account.number"
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
        name="bank_account.branch"
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
    </>
  );
}
