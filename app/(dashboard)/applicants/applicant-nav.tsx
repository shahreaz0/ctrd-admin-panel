"use client";

import { PlusCircle } from "lucide-react";

import { Mustahik } from "@/types/mustahik";
import { useGetUserInfo } from "@/hooks/rq/auth/use-get-user-info";
import { Button } from "@/components/ui/button";
import { useDialogStates } from "@/components/dialogs-provider";

import { CreateApplicantDialog } from "./create-applicant-dialog";

export function ApplicantNav() {
  const { setDialogsStates, setMustahik } = useDialogStates();

  const { data: user } = useGetUserInfo();

  return (
    <>
      {user?.roles?.includes("ADMINISTRATOR") && (
        <Button
          size="sm"
          onClick={() => {
            setMustahik({} as Mustahik);
            setDialogsStates((prev) => ({
              ...prev,
              upsertApplicantDialog: true,
              formType: "create",
            }));
          }}
        >
          <PlusCircle className="mr-2 h-4 w-4" /> Create Applicant
        </Button>
      )}

      <CreateApplicantDialog />
    </>
  );
}
