import { Dispatch, SetStateAction } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { UpdateProgramForm } from "./update-program-form";

type Props = {
  open: boolean;
  isOpen: Dispatch<SetStateAction<boolean>>;
  programId: number;
};

export default function UpdateProgramDialog(props: Props) {
  return (
    <Dialog open={props.open} onOpenChange={props.isOpen}>
      <DialogContent className="top-[50%] max-h-[80vh] max-w-[700px] overflow-auto">
        <DialogHeader>
          <DialogTitle>Update Program</DialogTitle>
          <DialogDescription>
            Please give necessary information to update a program
          </DialogDescription>
        </DialogHeader>
        <UpdateProgramForm isOpen={props.isOpen} programId={props.programId} />
      </DialogContent>
    </Dialog>
  );
}
