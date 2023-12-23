"use client";

import { Label } from "@radix-ui/react-label";
import { useFormContext } from "react-hook-form";

import { useGetAllPrograms } from "@/hooks/rq/programs/use-get-all-programs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

  const { data: programs } = useGetAllPrograms();

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
              className="grid grid-cols-2 gap-4 lg:grid-cols-6"
            >
              {programs?.map((program) => (
                <FormItem key={program.id}>
                  <FormControl>
                    <div>
                      <RadioGroupItem
                        value={`${program.id}`}
                        id={`program-${program.id}`}
                        className="peer sr-only"
                      />

                      <Label
                        htmlFor={`program-${program.id}`}
                        className="flex h-[110px] flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <div className="mb-2 h-12 w-12">
                          {/* <Image
                            src={program.icon}
                            height={50}
                            width={50}
                            alt={program.name}
                          /> */}

                          <Avatar>
                            <AvatarImage src={program.icon} alt={program.name} />
                            <AvatarFallback>{program.name.slice(2)}</AvatarFallback>
                          </Avatar>
                        </div>

                        {program.name}
                      </Label>
                    </div>
                  </FormControl>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
