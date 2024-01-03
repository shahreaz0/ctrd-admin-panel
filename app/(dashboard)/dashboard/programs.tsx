"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";

import { generateAvatar, getInitials } from "@/lib/utils";
import { useGetAllPrograms } from "@/hooks/rq/programs/use-get-all-programs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CreateProgramDialog from "@/app/(dashboard)/programs/create-program-dialog";

export default function Programs() {
  const [open, isOpen] = useState(false);

  const { data: programs } = useGetAllPrograms();

  return (
    <section>
      <RadioGroup defaultValue="p1" className="grid grid-cols-2 gap-4 lg:grid-cols-6 ">
        {programs?.map((program) => (
          <div key={program.id}>
            <RadioGroupItem
              value={`pp${program.id}`}
              id={`pp${program.id}`}
              className="peer sr-only"
            />

            <Label
              htmlFor={`pp${program.id}`}
              className="flex h-[110px] flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <div className="mb-2 h-12 w-12">
                <Avatar>
                  <AvatarImage
                    src={program.icon || generateAvatar(getInitials(program.name))}
                    alt={program.name}
                  />
                  <AvatarFallback>{getInitials(program.name)}</AvatarFallback>
                </Avatar>
              </div>

              {program.name}
            </Label>
          </div>
        ))}
        <div onClick={() => isOpen(true)}>
          <RadioGroupItem value="p8" id="p8" className="peer sr-only" />
          <Label
            htmlFor="p8"
            className="flex h-[110px] flex-col items-center   justify-center rounded-md border-muted bg-primary p-4 text-white hover:bg-accent hover:text-accent-foreground "
          >
            <PlusCircle className="h-12 w-12" strokeWidth={1} />
          </Label>
        </div>
      </RadioGroup>

      <CreateProgramDialog open={open} isOpen={isOpen} />
    </section>
  );
}
