"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { CreateApplicantDialog } from "./create-applicant-dialog";

export default function UserNav() {
  const [open, isOpen] = useState(false);

  return (
    <>
      <Button onClick={() => isOpen(true)}>Create Applicant</Button>
      <CreateApplicantDialog open={open} isOpen={isOpen} />
    </>
  );
}
