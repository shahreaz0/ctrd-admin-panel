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

export default function ProgramRadioField() {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name="programId"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>প্রোগ্রাম</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="grid grid-cols-3 gap-4"
            >
              <FormItem>
                <FormControl>
                  <div>
                    <RadioGroupItem value="1" id="pro1" className="peer sr-only" />
                    <Label
                      htmlFor="pro1"
                      className="flex flex-col items-center justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Program 1
                    </Label>
                  </div>
                </FormControl>
              </FormItem>

              <FormItem>
                <FormControl>
                  <div>
                    <RadioGroupItem value="2" id="pro2" className="peer sr-only" />
                    <Label
                      htmlFor="pro2"
                      className="flex flex-col items-center justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Program 2
                    </Label>
                  </div>
                </FormControl>
              </FormItem>

              <FormItem className="cursor-pointer">
                <FormControl>
                  <div>
                    <RadioGroupItem value="3" id="pro3" className="peer sr-only" />
                    <Label
                      htmlFor="pro3"
                      className="flex flex-col items-center justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Program 3
                    </Label>
                  </div>
                </FormControl>
              </FormItem>

              <FormItem className="cursor-pointer">
                <FormControl>
                  <div>
                    <RadioGroupItem value="4" id="pro4" className="peer sr-only" />
                    <Label
                      htmlFor="pro4"
                      className="flex flex-col items-center justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Program 4
                    </Label>
                  </div>
                </FormControl>
              </FormItem>

              <FormItem className="cursor-pointer">
                <FormControl>
                  <div>
                    <RadioGroupItem value="5" id="pro5" className="peer sr-only" />
                    <Label
                      htmlFor="pro5"
                      className="flex flex-col items-center justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Program 5
                    </Label>
                  </div>
                </FormControl>
              </FormItem>

              <FormItem className="cursor-pointer">
                <FormControl>
                  <div>
                    <RadioGroupItem value="6" id="pro6" className="peer sr-only" />
                    <Label
                      htmlFor="pro6"
                      className="flex flex-col items-center justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Program 6
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
