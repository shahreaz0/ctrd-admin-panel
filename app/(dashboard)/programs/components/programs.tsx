"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import CreateProgramDialog from "./create-program-dialog";

export default function Programs() {
  const [open, isOpen] = useState(false);

  return (
    <section className="my-4">
      <section className="mb-4 flex gap-4">
        <Input placeholder="Search..." className="w-[400px]" />
        <Button onClick={() => isOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" /> Add Program
        </Button>
      </section>

      <RadioGroup defaultValue="p1" className="grid grid-cols-4 gap-4">
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
        <div>
          <RadioGroupItem value="p8" id="p8" className="peer sr-only" />
          <Label
            htmlFor="p8"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            Program
          </Label>
        </div>
        <div>
          <RadioGroupItem value="p9" id="p9" className="peer sr-only" />
          <Label
            htmlFor="p9"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            Program
          </Label>
        </div>
        <div>
          <RadioGroupItem value="p10" id="p10" className="peer sr-only" />
          <Label
            htmlFor="p10"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            Program
          </Label>
        </div>
        <div>
          <RadioGroupItem value="p11" id="p11" className="peer sr-only" />
          <Label
            htmlFor="p11"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            Program
          </Label>
        </div>
        <div>
          <RadioGroupItem value="p12" id="p12" className="peer sr-only" />
          <Label
            htmlFor="p12"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            Program
          </Label>
        </div>
        <div>
          <RadioGroupItem value="p13" id="p13" className="peer sr-only" />
          <Label
            htmlFor="p13"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            Program
          </Label>
        </div>
        <div>
          <RadioGroupItem value="p14" id="p14" className="peer sr-only" />
          <Label
            htmlFor="p14"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            Program
          </Label>
        </div>
        <div>
          <RadioGroupItem value="p15" id="p15" className="peer sr-only" />
          <Label
            htmlFor="p15"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            Program
          </Label>
        </div>
        <div>
          <RadioGroupItem value="p16" id="p16" className="peer sr-only" />
          <Label
            htmlFor="p16"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            Program
          </Label>
        </div>
      </RadioGroup>

      <CreateProgramDialog open={open} isOpen={isOpen} />
    </section>
  );
}
