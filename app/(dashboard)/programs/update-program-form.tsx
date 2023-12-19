"use client";

import { Dispatch, SetStateAction } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { getBase64 } from "@/lib/utils";
import { useAddManager } from "@/hooks/rq/programs/use-add-manager";
import { useAddWorker } from "@/hooks/rq/programs/use-add-worker";
import { useGetAllProgramDetails } from "@/hooks/rq/programs/use-get-program-details";
import { useRemoveManager } from "@/hooks/rq/programs/use-remove-manager";
import { useRemoveWorker } from "@/hooks/rq/programs/use-remove-worker";
import { useUpdateProgram } from "@/hooks/rq/programs/use-update-program";
import useGetAllUsers from "@/hooks/rq/users/use-get-all-users";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import FileInput from "@/components/file-input";
import { MultiSelect } from "@/components/multi-select";

const formSchema = z.object({
  name: z.string().min(1, "Required").max(100).optional(),
  icon: z.any({ required_error: "Please select a image file" }).optional(),
  description: z.string().min(1, "Required").optional(),
  region: z.string().min(1, "Required").max(500).optional(),
});

type Props = {
  isOpen: Dispatch<SetStateAction<boolean>>;
  programId: number;
};

export function UpdateProgramForm(props: Props) {
  const { data: users } = useGetAllUsers();
  const { mutate: updateProgram } = useUpdateProgram(props.programId);
  const { mutate: addManager } = useAddManager();
  const { mutate: removeManager } = useRemoveManager();
  const { mutate: addWorker } = useAddWorker();
  const { mutate: removeWorker } = useRemoveWorker();

  const { data: programDetails } = useGetAllProgramDetails(props.programId);

  console.log(programDetails);

  const usersOptions =
    users?.map((user) => ({
      label: user.fullName,
      value: user.id,
    })) || [];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      name: programDetails?.name,
      region: programDetails?.region,
      description: programDetails?.description,
    },
    resetOptions: {
      keepDirtyValues: true,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const b64 = await getBase64(form.getValues("icon"));
    const payload = {
      ...values,
      icon: b64,
    };

    updateProgram(payload, {
      onSuccess: () => {
        toast.success("Program Updated", {
          description: "Program has been Updated successfully.",
        });
      },
    });
  }

  return (
    <section>
      {programDetails && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FileInput
              accept={{
                "image/jpeg": [],
                "image/png": [],
              }}
              name="icon"
            />

            <FormField
              control={form.control}
              name="region"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Region</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea className="resize-none" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="mt-4">
              Update
            </Button>

            <div className="space-y-4">
              <div>
                <p className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Select Manager
                </p>
                <Select
                  defaultValue={programDetails?.managers[0]?.id}
                  onValueChange={(val) => {
                    const payload = {
                      userId: val,
                      programId: props.programId,
                    };

                    removeManager({
                      userId: programDetails?.managers[0]?.id,
                      programId: props.programId,
                    });

                    addManager(payload, {
                      onSuccess: () => {
                        toast.success("Manager Added");
                      },
                    });
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" className="text-red-500" />
                  </SelectTrigger>

                  <SelectContent position="popper">
                    {usersOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Select Field Workers
                </p>

                <MultiSelect
                  defaultValue={programDetails.workers.map((worker) => ({
                    label: worker.fullName,
                    value: worker.id,
                  }))}
                  data={usersOptions}
                  onUnselect={(data) => {
                    const payload = {
                      userId: data.value,
                      programId: props.programId,
                    };

                    removeWorker(payload, {
                      onSuccess: () => {
                        toast.success("Worker Removed");
                      },
                    });
                  }}
                  onSelect={(data) => {
                    const payload = {
                      userId: data.value,
                      programId: props.programId,
                    };

                    addWorker(payload, {
                      onSuccess: () => {
                        toast.success("Worker Added");
                      },
                    });
                  }}
                />
              </div>
            </div>

            <Button type="button" className="mt-4" onClick={() => props.isOpen(false)}>
              Done
            </Button>
          </form>
        </Form>
      )}
    </section>
  );
}
