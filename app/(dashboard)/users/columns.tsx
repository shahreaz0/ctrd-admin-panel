"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

import type { User } from "@/types/user";
import { generateAvatar, getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";

import { DataTableColumnHeader } from "./table-column-header";
import { DataTableRowActions } from "./table-row-actions";

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "fullName",
    accessorFn: (row) => {
      return row.fullName;
    },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Employee" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage
            src={generateAvatar(row.original.fullName)}
            alt={row.original.fullName}
          />
          <AvatarFallback>{getInitials(row.original.fullName)}</AvatarFallback>
        </Avatar>

        <section>
          <p className="m-0">{row.original.fullName}</p>
          <p className="m-0 text-xs text-gray-500">{row.original.email}</p>
        </section>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "dateOfBirth",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date of Birth" />
    ),
    cell: (info) => <>{format(new Date(info.getValue() as string), "PPP")}</>,
    enableSorting: false,
  },
  {
    accessorKey: "department",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Department" />,
    enableSorting: false,
  },

  {
    accessorKey: "dateOfJoining",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date of joining" />
    ),
    cell: (info) => <>{format(new Date(info.getValue() as string), "dd-MM-yyyy")}</>,
    enableSorting: false,
  },

  {
    accessorKey: "monthlySalary",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Monthly Salary (BDT)" />
    ),
    enableSorting: false,
  },
  {
    id: "actions",
    cell: DataTableRowActions,
  },
];
