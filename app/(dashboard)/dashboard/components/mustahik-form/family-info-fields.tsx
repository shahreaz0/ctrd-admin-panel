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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "../../../../../components/ui/button";

export default function FamilyInfoFields() {
  const form = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "familialInformation",
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
                name={`familialInformation.${index}.name`}
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
                name={`familialInformation.${index}.age`}
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
                name={`familialInformation.${index}.gender`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>লিঙ্গ</FormLabel>
                    <section className="relative">
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent position="popper">
                          <SelectItem value="male">পুরুষ</SelectItem>
                          <SelectItem value="female">নারী</SelectItem>
                        </SelectContent>
                      </Select>
                    </section>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`familialInformation.${index}.educationLevel`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>শিক্ষা </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`familialInformation.${index}.relationToHeadOfFamily`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরিবার প্রধানের সাথে সম্পর্ক</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`familialInformation.${index}.occupation`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পেশা ( ছাত্র / ছাত্রী হলে শ্রেণী )</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`familialInformation.${index}.disability`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>প্রতিবন্ধী</FormLabel>
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
              />

              <FormField
                control={form.control}
                name={`familialInformation.${index}.child`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>শিশু</FormLabel>
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
              />

              <FormField
                control={form.control}
                name={`familialInformation.${index}.sick`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>রোগাক্রান্ত</FormLabel>
                    <section className="relative">
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value="yes">হ্যা</SelectItem>
                          <SelectItem value="no">না</SelectItem>
                        </SelectContent>
                      </Select>
                    </section>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`familialInformation.${index}.jobless`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>বেকার</FormLabel>
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
              />

              <FormField
                control={form.control}
                name={`familialInformation.${index}.ongoingMedicineOrTreatment`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>নিয়মিত ঔষধ / চিকিৎসা</FormLabel>
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
          append({ name: "", age: "" });
        }}
      >
        Add Another
      </Button>
    </section>
  );
}
