"use client";

import districts from "@/data/districts.json";
import divisions from "@/data/divisions.json";
import unions from "@/data/unions.json";
import upazilas from "@/data/upazilas.json";
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

export function AddressFields() {
  const form = useFormContext();

  return (
    <>
      <FormField
        control={form.control}
        name="division"
        render={({ field }) => (
          <FormItem>
            <FormLabel>বিভাগ</FormLabel>
            <section className="relative">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent position="popper">
                  {divisions.map((division) => (
                    <SelectItem value={division.id} key={division.id}>
                      {division.bn_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </section>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="district"
        render={({ field }) => (
          <FormItem>
            <FormLabel>জেলা</FormLabel>
            <section className="relative">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent position="popper">
                  {form.watch("division") ? (
                    <>
                      {districts
                        .filter(
                          (district) => district.division_id === form.watch("division")
                        )
                        .map((district) => (
                          <SelectItem value={district.id} key={district.id}>
                            {district.bn_name}
                          </SelectItem>
                        ))}
                    </>
                  ) : (
                    <>
                      <p className="p-1 text-sm">
                        Please select division to see the options
                      </p>
                    </>
                  )}
                </SelectContent>
              </Select>
            </section>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="thana"
        render={({ field }) => (
          <FormItem>
            <FormLabel>উপজেলাঃ</FormLabel>
            <section className="relative">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent position="popper">
                  {form.watch("district") ? (
                    <>
                      {upazilas
                        .filter(
                          (upazila) => upazila.district_id === form.watch("district")
                        )
                        .map((upazila) => (
                          <SelectItem value={upazila.id} key={upazila.id}>
                            {upazila.bn_name}
                          </SelectItem>
                        ))}
                    </>
                  ) : (
                    <>
                      <p className="p-1 text-sm">
                        Please select district to see the options
                      </p>
                    </>
                  )}
                </SelectContent>
              </Select>
            </section>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="union"
        render={({ field }) => (
          <FormItem>
            <FormLabel>ইউনিয়ন</FormLabel>
            <section className="relative">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent position="popper">
                  {form.watch("thana") ? (
                    <>
                      {unions
                        .filter((union) => union.upazilla_id === form.watch("thana"))
                        .map((union) => (
                          <SelectItem value={union.id} key={union.id}>
                            {union.bn_name}
                          </SelectItem>
                        ))}
                    </>
                  ) : (
                    <>
                      <p className="p-1 text-sm">
                        Please select upazila to see the options
                      </p>
                    </>
                  )}
                </SelectContent>
              </Select>
            </section>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="postOffice"
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
        name="village"
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
    </>
  );
}
