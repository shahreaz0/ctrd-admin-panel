"use client";

import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function MustahikRadio() {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name="mustahik"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormControl>
            <section className="relative">
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-wrap space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="mustahik" />
                  </FormControl>
                  <FormLabel className="font-normal">মুস্তাহিক</FormLabel>
                </FormItem>

                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="fakir" />
                  </FormControl>
                  <FormLabel className="font-normal">ফকির</FormLabel>
                </FormItem>

                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="miskin" />
                  </FormControl>
                  <FormLabel className="font-normal">মিসকিন</FormLabel>
                </FormItem>

                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="amilin" />
                  </FormControl>
                  <FormLabel className="font-normal">আমিলিন</FormLabel>
                </FormItem>

                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="muallatulKutub" />
                  </FormControl>
                  <FormLabel className="font-normal">মুয়াল্লাতুল কুলুব</FormLabel>
                </FormItem>

                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="rikkab" />
                  </FormControl>
                  <FormLabel className="font-normal">রিক্কাব</FormLabel>
                </FormItem>

                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="garimin" />
                  </FormControl>
                  <FormLabel className="font-normal">গারিমীন</FormLabel>
                </FormItem>

                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="fiSabilillah" />
                  </FormControl>
                  <FormLabel className="font-normal ">ফী সাবিলিল্লাহ</FormLabel>
                </FormItem>
              </RadioGroup>
            </section>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
