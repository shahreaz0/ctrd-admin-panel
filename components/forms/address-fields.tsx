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

export default function AddressFields() {
  const form = useFormContext();

  return (
    <>
      <FormField
        control={form.control}
        name="address.village"
        render={({ field }) => (
          <FormItem>
            <FormLabel>গ্রামঃ</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="address.union"
        render={({ field }) => (
          <FormItem>
            <FormLabel>ইউনিয়ন</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="address.post_office"
        render={({ field }) => (
          <FormItem>
            <FormLabel>পোস্টঅফিস</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="address.police_station"
        render={({ field }) => (
          <FormItem>
            <FormLabel>থানা </FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="address.district"
        render={({ field }) => (
          <FormItem>
            <FormLabel>জেলা</FormLabel>
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
