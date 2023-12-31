"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { generateAvatar, getBase64 } from "@/lib/utils";
import { useAddManager } from "@/hooks/rq/programs/use-add-manager";
import { useAddWorker } from "@/hooks/rq/programs/use-add-worker";
import { useCreateProgram } from "@/hooks/rq/programs/use-create-program";
import { useRemoveWorker } from "@/hooks/rq/programs/use-remove-worker";
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
  name: z.string().min(1, "Required").max(100),
  icon: z.any({ required_error: "Please select a image file" }).optional(),
  description: z.string().min(1, "Required"),
  region: z.string().min(1, "Required").max(500),
});

type Props = {
  isOpen: Dispatch<SetStateAction<boolean>>;
};

export default function CreateProgramForm(props: Props) {
  const [step, setStep] = useState(1);

  const { data: users } = useGetAllUsers();
  const { mutate: createProgram } = useCreateProgram();
  const { mutate: addManager } = useAddManager();
  const { mutate: addWorker } = useAddWorker();
  const { mutate: removeWorker } = useRemoveWorker();

  const usersOptions =
    users?.map((user) => ({
      label: user.fullName,
      value: user.id,
    })) || [];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "all",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    let icon = "";
    if (values.icon) {
      icon = (await getBase64(form.getValues("icon"))) as string;
    }

    const payload = {
      ...values,
      icon: icon || generateAvatar(values.name),
    };

    createProgram(payload, {
      onSuccess: (data) => {
        localStorage.setItem("recentProgram", JSON.stringify(data.data));
        setStep(2);

        toast.success("Program created", {
          description: "Program has been created successfully.",
        });
      },
    });
  }

  // function onManagerChangeHandler(value: string) {
  //   console.log(value);
  // }

  return (
    <section>
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

          {step === 1 && (
            <Button type="submit" className="mt-4">
              Next
            </Button>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <p className="my-4 text-lg font-medium">Step 2</p>
              <div>
                <p className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Select Manager
                </p>
                <Select
                  onValueChange={(val) => {
                    const payload = {
                      userId: val,
                      programId: JSON.parse(
                        localStorage.getItem("recentProgram") as string
                      ).id,
                    };

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
                  data={usersOptions}
                  onUnselect={(data) => {
                    const payload = {
                      userId: data.value,
                      programId: JSON.parse(
                        localStorage.getItem("recentProgram") as string
                      ).id,
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
                      programId: JSON.parse(
                        localStorage.getItem("recentProgram") as string
                      ).id,
                    };

                    addWorker(payload, {
                      onSuccess: () => {
                        toast.success("Worker Added");
                      },
                    });
                  }}
                />
              </div>

              <Button type="button" className="mt-4" onClick={() => props.isOpen(false)}>
                Done
              </Button>
            </div>
          )}
        </form>
      </Form>
    </section>
  );
}
