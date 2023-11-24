"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

import type { User } from "@/types/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";

import { statuses } from "../data/data";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

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
    accessorKey: "firstName",
    accessorFn: (row) => {
      return `${row.firstName} ${row.lastName}`;
    },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Employee" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <section>
          <p className="m-0">
            {row.original.firstName} {row.original.lastName}
          </p>
          <p className="m-0 text-xs text-gray-500">{row.original.department}</p>
        </section>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // {
  //   accessorKey: "title",
  //   header: ({ column }) => <DataTableColumnHeader column={column} title="Title" />,
  //   cell: ({ row }) => {
  //     const label = labels.find((label) => label.value === row.original.label);

  //     return (
  //       <div className="flex space-x-2">
  //         {label && <Badge variant="outline">{label.label}</Badge>}
  //         <span className="max-w-[500px] truncate font-medium">
  //           {row.getValue("title")}
  //         </span>
  //       </div>
  //     );
  //   },
  // },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const status = statuses.find((status) => status.value === row.getValue("status"));

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "phoneNumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone Number" />
    ),
    enableSorting: false,
  },
  {
    accessorKey: "department",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Department" />,
    enableSorting: false,
  },
  {
    accessorKey: "NID",
    header: ({ column }) => <DataTableColumnHeader column={column} title="NID" />,
    enableSorting: false,
  },
  {
    accessorKey: "dateOfJoining",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date of joining" />
    ),
    cell: (info) => <>{format(new Date(info.getValue() as string), "PPP")}</>,
    enableSorting: false,
  },
  // {
  //   accessorKey: "priority",
  //   header: ({ column }) => <DataTableColumnHeader column={column} title="Priority" />,
  //   cell: ({ row }) => {
  //     const priority = priorities.find(
  //       (priority) => priority.value === row.getValue("priority")
  //     );

  //     if (!priority) {
  //       return null;
  //     }

  //     return (
  //       <div className="flex items-center">
  //         {priority.icon && (
  //           <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
  //         )}
  //         <span>{priority.label}</span>
  //       </div>
  //     );
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id));
  //   },
  // },
  {
    id: "actions",
    cell: DataTableRowActions,
  },
];
