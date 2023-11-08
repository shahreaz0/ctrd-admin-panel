"use client";

import { Dispatch, SetStateAction } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

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
  programName: z.string().min(1, "Required").max(100),
  programLogo: z.any({ required_error: "Please select a image file" }).array(),
  programDescription: z.string().min(1, "Required"),
  programAddress: z.string().min(1, "Required").max(500),
  programManager: z.string(),
  fieldWorkers: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  mustahiks: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
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
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // eslint-disable-next-line no-console
    console.log(values);

    props.isOpen(false);

    toast.success("Program created", {
      description: "Program has been created successfully.",
    });
  }

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <section className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="programName"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Program Name</FormLabel>
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
              name="programLogo"
              className="col-span-2"
            />

            <FormField
              control={form.control}
              name="programDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Permanent Address</FormLabel>
                  <FormControl>
                    <Textarea className="resize-none" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="programAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Permanent Address</FormLabel>
                  <FormControl>
                    <Textarea className="resize-none" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="programManager"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Program Manager</FormLabel>
                  <section className="relative">
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent position="popper">
                        <SelectItem value="personA">Person A</SelectItem>
                        <SelectItem value="personB">Person B</SelectItem>
                      </SelectContent>
                    </Select>
                  </section>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fieldWorkers"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Field Workers</FormLabel>
                  <FormControl>
                    <section>
                      <MultiSelect
                        data={fieldWorkersData}
                        onChange={(values) => {
                          field.onChange(values.map(({ value }) => value));
                        }}
                      />
                    </section>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mustahiks"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Mustahiks</FormLabel>
                  <FormControl>
                    <section>
                      <MultiSelect
                        data={fieldWorkersData}
                        onChange={(values) => {
                          field.onChange(values.map(({ value }) => value));
                        }}
                      />
                    </section>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>
          <Button type="submit" className="mt-4">
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
}
