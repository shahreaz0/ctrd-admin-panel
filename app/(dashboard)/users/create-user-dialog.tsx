import { Dispatch, SetStateAction } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import CreateUserForm from "./create-user-form";

type Props = {
  open: boolean;
  isOpen: Dispatch<SetStateAction<boolean>>;
};

export default function CreateUserDialog(props: Props) {
  return (
    <Dialog open={props.open} onOpenChange={() => props.isOpen(false)}>
      <DialogContent className="top-[50%] max-h-[80vh] max-w-[700px] overflow-auto">
        <DialogHeader>
          <DialogTitle>Create User</DialogTitle>
          <DialogDescription>
            Please give necessary information to create a user
          </DialogDescription>
        </DialogHeader>

        <CreateUserForm isOpen={props.isOpen} />
      </DialogContent>
    </Dialog>
  );
}
