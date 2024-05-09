"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { getBase64 } from "@/lib/utils";
import { useImportMustahik } from "@/hooks/rq/mutahiks/use-import-mustahik";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useDialogStates } from "@/components/dialogs-provider";
import { FileInput } from "@/components/file-input";

const formSchema = z.object({
  file: z.any({ required_error: "Please select a file" }),
});

export function ImportApplicantForm() {
  const { mutate: importMustahik, isPending } = useImportMustahik();

  const { setDialogsStates } = useDialogStates();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "all",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const file = (await getBase64(values.file)) as string;

    // console.log(JSON.stringify());

    importMustahik(
      { file: file.split("base64,")[1] },
      {
        onSuccess: () => {
          setDialogsStates((prev) => ({
            ...prev,
            importApplicantDialog: false,
          }));

          toast.success("Imported Successfully", {
            description: "Mustahik's imported successfully.",
          });
        },
      }
    );
  }

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FileInput
            accept={{
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
            }}
            name="file"
            formats=".xlsx"
          />

          <Button type="submit" className="mt-4" size="sm" disabled={isPending}>
            {isPending && <Loader2 className="mr-1 h-4 w-4 animate-spin" />} Import
          </Button>
        </form>
      </Form>
    </section>
  );
}
