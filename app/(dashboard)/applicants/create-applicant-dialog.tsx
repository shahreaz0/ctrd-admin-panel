"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDialogStates } from "@/components/dialogs-provider";

import { CreateMustahikForm } from "../dashboard/upsert-mustahik-form";

export function CreateApplicantDialog() {
  const { setDialogsStates, dialogsStates } = useDialogStates();

  return (
    <Dialog
      open={dialogsStates.upsertApplicantDialog}
      onOpenChange={() => {
        setDialogsStates((prev) => ({ ...prev, upsertApplicantDialog: false }));
        setTimeout(() => (document.body.style.pointerEvents = ""), 200);
      }}
    >
      <DialogContent className="top-[50%] max-h-[80vh] max-w-[80vw] overflow-auto">
        <DialogHeader>
          <DialogTitle>
            {dialogsStates.formType === "create" ? "Create" : "Update"} Applicant
          </DialogTitle>
          <DialogDescription>
            Please give necessary information to{" "}
            {dialogsStates.formType === "create" ? "create" : "update"} a applicant
          </DialogDescription>
        </DialogHeader>

        <CreateMustahikForm />
      </DialogContent>
    </Dialog>
  );
}
