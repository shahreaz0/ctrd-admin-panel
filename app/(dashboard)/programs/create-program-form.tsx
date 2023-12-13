"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { getBase64 } from "@/lib/utils";
import { useCreateProgram } from "@/hooks/rq/programs/use-create-program";
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
  icon: z.any({ required_error: "Please select a image file" }),
  description: z.string().min(1, "Required"),
  region: z.string().min(1, "Required").max(500),
  // programManager: z.string(),
  // fieldWorkers: z.array(z.string()).refine((value) => value.some((item) => item), {
  //   message: "You have to select at least one item.",
  // }),
});

const fieldWorkersData = [
  { label: "Person A", value: "personA" },
  { label: "Person B", value: "personB" },
  { label: "Person C", value: "personC" },
  { label: "Person D", value: "personD" },
  { label: "Person E", value: "personE" },
];

type Props = {
  isOpen: Dispatch<SetStateAction<boolean>>;
};

export default function CreateProgramForm(props: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "all",
  });

  const [step, setStep] = useState(1);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // eslint-disable-next-line no-console
    console.log(values);

    props.isOpen(false);

    toast.success("Program created", {
      description: "Program has been created successfully.",
    });
  }

  const { mutate: createProgram } = useCreateProgram();

  async function nextButtonHandler() {
    // hit API to save user

    const b64 = await getBase64(form.getValues("icon"));
    const payload = {
      ...form.getValues(),
      icon: b64,
    };

    createProgram(payload, {
      onSuccess: async () => {
        toast.success("Program Added");

        const isValid = await form.trigger();

        if (isValid) setStep(2);
      },
    });
  }

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

          {step === 2 && (
            <div className="space-y-4">
              <p className="my-4 text-lg font-medium">Step 2</p>
              <div>
                <p className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Select Manager
                </p>
                <Select onValueChange={(val) => console.log(val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>

                  <SelectContent position="popper">
                    <SelectItem value="personA">Person A</SelectItem>
                    <SelectItem value="personB">Person B</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Select Field Workers
                </p>
                <MultiSelect
                  data={fieldWorkersData}
                  onChange={(values) => {
                    console.log(values);
                  }}
                />
              </div>
            </div>
          )}

          <Button type="button" className="mt-4" onClick={nextButtonHandler}>
            Next
          </Button>
        </form>
      </Form>
    </section>
  );
}
