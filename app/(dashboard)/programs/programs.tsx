"use client";

import { useState } from "react";
// import Image from "next/image";
import { ArrowRight, PlusCircle, Trash2 } from "lucide-react";

import { generateAvatar } from "@/lib/utils";
import { useDeleteProgram } from "@/hooks/rq/programs/use-delete-program";
import { useGetAllPrograms } from "@/hooks/rq/programs/use-get-all-programs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import CreateProgramDialog from "./create-program-dialog";
import UpdateProgramDialog from "./update-program-dialog";

export default function Programs() {
  const [open, isOpen] = useState(false);

  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);

  const { data: programs } = useGetAllPrograms();

  const { mutate: deleteProgram } = useDeleteProgram();

  const [programId, setProgramId] = useState(-1);

  return (
    <section className="relative my-4">
      <section className="mb-4 flex gap-4">
        <Input placeholder="Search..." className="max-w-[400px]" />
        <Button onClick={() => isOpen(true)} className="min-w-[150px]">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Program
        </Button>
      </section>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {programs?.map((program) => (
          <Card className="w-max-[300px]" key={program.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{program.name}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </div>

                <Avatar>
                  <AvatarImage src={generateAvatar(program.name)} alt={program.name} />
                  <AvatarFallback>{program.name.slice(2)}</AvatarFallback>
                </Avatar>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <section>
                <p className=" text-sm font-semibold">Manager</p>
                <p className="text-sm text-gray-500 ">
                  {program.managers[0]?.fullName || "N/A"}
                </p>
              </section>

              <section>
                <p className="text-sm font-semibold">Workers</p>
                <p className="text-sm text-gray-500 ">
                  {program.workers.map((manager) => manager.fullName).join(", ") || "N/A"}
                </p>
              </section>

              <section className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    setProgramId(program.id);
                    setUpdateDialogOpen(true);
                  }}
                >
                  Edit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    deleteProgram(program.id);
                  }}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </section>
            </CardContent>
          </Card>
          // <div
          //   key={program.id}
          //   onClick={(e) => {
          //     e.preventDefault();
          //     setProgramId(program.id);
          //     setUpdateDialogOpen(true);
          //   }}
          // >
          //   <RadioGroupItem value="p1" id="p1" className="peer sr-only" />

          //   <Label
          //     htmlFor="p1"
          //     className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          //   >
          //     <div className="mb-2 h-12 w-12">
          //       {/* <Image src={program.icon} height={50} width={50} alt={program.name} /> */}
          //     </div>

          //     {program.name}
          //   </Label>
          //   <p>Manager: {program.managers[0]?.fullName}</p>

          //   <p>Workers</p>
          //   <ul>
          //     {program.workers.map((manager) => (
          //       <li key={manager.id}>{manager.fullName}</li>
          //     ))}
          //   </ul>
          // </div>
        ))}
      </div>

      <CreateProgramDialog open={open} isOpen={isOpen} />
      <UpdateProgramDialog
        open={updateDialogOpen}
        isOpen={setUpdateDialogOpen}
        programId={programId}
      />
    </section>
  );
}
