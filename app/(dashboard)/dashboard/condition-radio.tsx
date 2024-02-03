"use client";

import { Label } from "@radix-ui/react-label";
import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function ConditionRadio() {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name="condition"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>বর্তমান অবস্থা</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="grid grid-cols-3 gap-4"
            >
              <FormItem className="cursor-pointer">
                <FormControl>
                  <div>
                    <RadioGroupItem value="red" id="red" className="peer sr-only" />
                    <Label
                      htmlFor="red"
                      className="flex flex-col items-center justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      লাল
                    </Label>
                  </div>
                </FormControl>
              </FormItem>

              <FormItem>
                <FormControl>
                  <div>
                    <RadioGroupItem value="green" id="green" className="peer sr-only" />
                    <Label
                      htmlFor="green"
                      className="flex flex-col items-center justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      সবুজ
                    </Label>
                  </div>
                </FormControl>
              </FormItem>

              <FormItem>
                <FormControl>
                  <div>
                    <RadioGroupItem value="yellow" id="yellow" className="peer sr-only" />
                    <Label
                      htmlFor="yellow"
                      className="flex flex-col items-center justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      হলুদ
                    </Label>
                  </div>
                </FormControl>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
