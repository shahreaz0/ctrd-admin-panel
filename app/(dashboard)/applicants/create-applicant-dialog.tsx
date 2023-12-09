import { Dispatch, SetStateAction } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { CreateMustahikForm } from "../dashboard/create-mustahik-form";

type Props = {
  open: boolean;
  isOpen: Dispatch<SetStateAction<boolean>>;
};

export function CreateApplicantDialog(props: Props) {
  return (
    <Dialog
      open={props.open}
      onOpenChange={() => {
        props.isOpen(false);
        setTimeout(() => (document.body.style.pointerEvents = ""), 200);
      }}
    >
      <DialogContent className="top-[50%] max-h-[80vh] max-w-[80vw] overflow-auto">
        <DialogHeader>
          <DialogTitle>Create Applicant</DialogTitle>
          <DialogDescription>
            Please give necessary information to create a user
          </DialogDescription>
        </DialogHeader>

        <CreateMustahikForm />
      </DialogContent>
    </Dialog>
  );
}
