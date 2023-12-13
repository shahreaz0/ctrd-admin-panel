"use client";

import { useState } from "react";
import Image from "next/image";
import { PlusCircle } from "lucide-react";

import { useGetAllPrograms } from "@/hooks/rq/programs/use-get-all-programs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import CreateProgramDialog from "./create-program-dialog";

export default function Programs() {
  const [open, isOpen] = useState(false);

  const { data: programs } = useGetAllPrograms();

  return (
    <section className="relative my-4">
      <section className="mb-4 flex gap-4">
        <Input placeholder="Search..." className="max-w-[400px]" />
        <Button onClick={() => isOpen(true)} className="min-w-[150px]">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Program
        </Button>
      </section>

      <RadioGroup defaultValue="p1" className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {programs?.map((program) => (
          <div key={program.id}>
            <RadioGroupItem value="p1" id="p1" className="peer sr-only" />

            <Label
              htmlFor="p1"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <div className="mb-2 h-12 w-12">
                <Image src={program.icon} height={50} width={50} alt={program.name} />
              </div>

              {program.name}
            </Label>
          </div>
        ))}
      </RadioGroup>

      <CreateProgramDialog open={open} isOpen={isOpen} />
    </section>
  );
}
