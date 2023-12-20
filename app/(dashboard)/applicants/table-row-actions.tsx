"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { toast } from "sonner";

import { Mustahik } from "@/types/mustahik";
import { useDeleteMustahik } from "@/hooks/rq/mutahiks/use-delete-mustahik";
import { useMustahikApprove } from "@/hooks/rq/mutahiks/use-mustahik-approve";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDialogStates } from "@/components/dialogs-provider";

interface DataTableRowActionsProps {
  row: Row<Mustahik>;
}

export function TableRowActions({ row }: DataTableRowActionsProps) {
  const { mutate: deleteMustahik } = useDeleteMustahik();
  const { mutate: mustahikApprove } = useMustahikApprove();

  const { setMustahik, setDialogsStates } = useDialogStates();

  function editMustahikHandler() {
    setMustahik(row.original);
    setDialogsStates((prev) => ({ ...prev, upsertApplicantDialog: true }));
    document.body.style.pointerEvents = "";
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {/* <DropdownMenuItem>Details</DropdownMenuItem> */}
        <DropdownMenuItem onClick={editMustahikHandler}>Edit</DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            mustahikApprove(
              { mustahikId: row.original.id, isApproved: true },
              {
                onSuccess: () => {
                  toast.success("Approved", {
                    description: "Mushtahik successfully approved.",
                  });
                },
              }
            );
          }}
        >
          Approve
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            mustahikApprove(
              { mustahikId: row.original.id, isApproved: false },
              {
                onSuccess: () => {
                  toast.success("Rejected", {
                    description: "Mushtahik successfully rejected.",
                  });
                },
              }
            );
          }}
        >
          Reject
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="text-red-500"
          onClick={() => deleteMustahik(row.original.id)}
        >
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
