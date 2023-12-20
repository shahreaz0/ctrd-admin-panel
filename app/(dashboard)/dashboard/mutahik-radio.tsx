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
    id: "1",
    label: "ফকির",
  },
  {
    id: "2",
    label: "মিসকিন",
  },
  {
    id: "3",
    label: "আমিলিন",
  },
  {
    id: "4",
    label: "মুয়াল্লাতুল কুলুব",
  },
  {
    id: "5",
    label: "রিক্কাব",
  },
  {
    id: "6",
    label: "গারিমীন",
  },
  {
    id: "7",
    label: "ফী সাবিলিল্লাহ",
  },
] as const;

export default function MustahikRadio() {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name="status"
      render={() => (
        <FormItem className="relative">
          {items.map((item) => (
            <FormField
              key={item.id}
              control={form.control}
              name="statusList"
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
                                field.value?.filter((value: string) => value !== item.id)
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
  );
}
