"use client";

import { useState } from "react";
// import Image from "next/image";
import { ArrowRight, PlusCircle, Trash2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/custom/use-auth";
import { useDeleteProgram } from "@/hooks/rq/programs/use-delete-program";
import { useGetAllPrograms } from "@/hooks/rq/programs/use-get-all-programs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
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

  const { user } = useAuth();

  return (
    <section className="relative my-4">
      <section className="mb-4 flex justify-between gap-4">
        {user?.roles?.includes("ADMINISTRATOR") && (
          <>
            <Input placeholder="Search..." className="h-8 max-w-[400px]" />
            <Button onClick={() => isOpen(true)} className="min-w-[150px]" size="sm">
              <PlusCircle className="mr-2 h-4 w-4" /> Create Program
            </Button>
          </>
        )}
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
                  <AvatarImage src={program.icon} alt={program.name} />
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

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the
                        program.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        className={cn(buttonVariants({ variant: "destructive" }))}
                        onClick={() => {
                          deleteProgram(program.id);
                        }}
                      >
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </section>
            </CardContent>
          </Card>
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
