"use client";

import { useFormContext } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const items = [
  {
    id: "placeToStay",
    label: "নিজ বাসস্থান",
  },
  {
    id: "toilet",
    label: "স্বাস্থ্যকর ল্যাট্রিন",
  },
  {
    id: "safeWaterSource",
    label: "নিরাপদ পানি",
  },
] as const;

export function OpinionMultiCheckbox() {
  const form = useFormContext();

  return (
    <>
      <FormField
        control={form.control}
        name="items"
        render={() => (
          <FormItem className="relative">
            {items.map((item) => (
              <FormField
                key={item.id}
                control={form.control}
                name="items"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={item.id}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.id])
                              : field.onChange(
                                  field.value?.filter(
                                    (value: string) => value !== item.id
                                  )
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">{item.label}</FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
