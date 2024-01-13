"use client";

import { Fragment } from "react";
import { Trash2 } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
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

export default function FamilyInfoFields() {
  const form = useFormContext();

  // familyMembers: [
  //   {
  //     name: "Test",
  //     age: "2023-11-21T10:29:29.018Z",
  //     gender: 0,
  //     educationLevel: "Test",
  //     relationToHOF: "Test",
  //     occupation: "Test",
  //     hasDisability: true,
  //     isChild: true,
  //     isSick: true,
  //     isJobless: true,
  //     ongoingMedicineOrTreatment: "Test",
  //          phoneNumber: ""
  //   },
  // ],

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "familyMembers",
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
                name={`familyMembers.${index}.name`}
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
                name={`familyMembers.${index}.age`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>বয়স</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`familyMembers.${index}.gender`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>লিঙ্গ</FormLabel>
                    <section className="relative">
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="বাছাই করুন" />
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
                name={`familyMembers.${index}.educationLevel`}
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
                name={`familyMembers.${index}.relationToHof`}
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
                name={`familyMembers.${index}.occupation`}
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
                name={`familyMembers.${index}.hasDisability`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>প্রতিবন্ধী</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`familyMembers.${index}.isChild`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>শিশু</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`familyMembers.${index}.isSick`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>রোগাক্রান্ত</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`familyMembers.${index}.isJobless`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>বেকার</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`familyMembers.${index}.ongoingMedicineOrTreatment`}
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

              {/* <FormField
                control={form.control}
                name={`familyMembers.${index}.phoneNumber`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>মোবাইল নম্বর</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              /> */}
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
