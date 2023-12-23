"use client";

import { Mustahik } from "@/types/mustahik";
import { useAuth } from "@/hooks/custom/use-auth";
import { Button } from "@/components/ui/button";
import { useDialogStates } from "@/components/dialogs-provider";

import { CreateApplicantDialog } from "./create-applicant-dialog";

export function ApplicantNav() {
  const { setDialogsStates, setMustahik } = useDialogStates();

  const { user } = useAuth();

  return (
    <>
      {user?.roles?.includes("ADMINISTRATOR") && (
        <Button
          size="sm"
          onClick={() => {
            setMustahik({} as Mustahik);
            setDialogsStates((prev) => ({ ...prev, upsertApplicantDialog: true }));
          }}
        >
          Create Applicant
        </Button>
      )}

      <CreateApplicantDialog />
    </>
  );
}
