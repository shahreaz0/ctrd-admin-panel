import { Dispatch, SetStateAction } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import CreateProgramForm from "./create-program-form";

type Props = {
  open: boolean;
  isOpen: Dispatch<SetStateAction<boolean>>;
};

export default function CreateProgramDialog(props: Props) {
  return (
    <Dialog open={props.open} onOpenChange={props.isOpen}>
      <DialogContent className="top-[50%] max-h-[80vh] max-w-[700px] overflow-auto">
        <DialogHeader>
          <DialogTitle>Create Program</DialogTitle>
          <DialogDescription>
            Please give necessary information to create a program
          </DialogDescription>
        </DialogHeader>
        <CreateProgramForm isOpen={props.isOpen} />
      </DialogContent>
    </Dialog>
  );
}
