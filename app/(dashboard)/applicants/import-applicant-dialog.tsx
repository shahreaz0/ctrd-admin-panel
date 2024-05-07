"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDialogStates } from "@/components/dialogs-provider";

import { ImportApplicantForm } from "./import-applicant-form";

export function ImportApplicantDialog() {
  const { setDialogsStates, dialogsStates } = useDialogStates();

  return (
    <Dialog
      open={dialogsStates.importApplicantDialog}
      onOpenChange={() => {
        setDialogsStates((prev) => ({ ...prev, importApplicantDialog: false }));
        setTimeout(() => (document.body.style.pointerEvents = ""), 200);
      }}
    >
      <DialogContent className="top-[50%] max-h-[80vh] max-w-[40vw] overflow-auto">
        <DialogHeader>
          <DialogTitle>Import Applicant</DialogTitle>
          <DialogDescription>
            Please give appropriate to import applicant
          </DialogDescription>
        </DialogHeader>

        <ImportApplicantForm />
      </DialogContent>
    </Dialog>
  );
}
