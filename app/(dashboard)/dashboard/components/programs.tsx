"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CreateProgramDialog from "@/app/(dashboard)/programs/components/create-program-dialog";

export default function Programs() {
  const [open, isOpen] = useState(false);

  return (
    <section>
      <RadioGroup defaultValue="p1" className="grid grid-cols-8 gap-4">
        <div>
          <RadioGroupItem value="p1" id="p1" className="peer sr-only" />
          <Label
            htmlFor="p1"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            Program
          </Label>
        </div>

        <div>
          <RadioGroupItem value="p2" id="p2" className="peer sr-only" />
          <Label
            htmlFor="p2"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            Program
          </Label>
        </div>
        <div>
          <RadioGroupItem value="p3" id="p3" className="peer sr-only" />
          <Label
            htmlFor="p3"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            Program
          </Label>
        </div>

        <div>
          <RadioGroupItem value="p4" id="p4" className="peer sr-only" />
          <Label
            htmlFor="p4"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            Program
          </Label>
        </div>
        <div>
          <RadioGroupItem value="p5" id="p5" className="peer sr-only" />
          <Label
            htmlFor="p5"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            Program
          </Label>
        </div>
        <div>
          <RadioGroupItem value="p6" id="p6" className="peer sr-only" />
          <Label
            htmlFor="p6"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            Program
          </Label>
        </div>
        <div>
          <RadioGroupItem value="p7" id="p7" className="peer sr-only" />
          <Label
            htmlFor="p7"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            Program
          </Label>
        </div>

        <div onClick={() => isOpen(true)}>
          <RadioGroupItem value="p8" id="p8" className="peer sr-only" />
          <Label
            htmlFor="p8"
            className="flex flex-col items-center  justify-between rounded-md border-muted bg-primary p-4 text-white hover:bg-accent hover:text-accent-foreground "
          >
            <PlusCircle className="h-4 w-4" />
          </Label>
        </div>
      </RadioGroup>

      <CreateProgramDialog open={open} isOpen={isOpen} />
    </section>
  );
}
