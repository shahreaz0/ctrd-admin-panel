"use client";

import { Mustahik } from "@/types/mustahik";
import { Button } from "@/components/ui/button";
import { useDialogStates } from "@/components/dialogs-provider";

import { CreateApplicantDialog } from "./create-applicant-dialog";

export function ApplicantNav() {
  const { setDialogsStates, setMustahik } = useDialogStates();

  return (
    <>
      <Button
        onClick={() => {
          setMustahik({} as Mustahik);
          setDialogsStates((prev) => ({ ...prev, upsertApplicantDialog: true }));
        }}
      >
        Create Applicant
      </Button>

      <CreateApplicantDialog />
    </>
  );
}
