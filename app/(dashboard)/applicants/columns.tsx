"use client";

import { ColumnDef } from "@tanstack/react-table";

import type { Mustahik } from "@/types/mustahik";
import { generateAvatar } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/core/data-table/data-table-column-header";

import { conditions, genders, statuses } from "./data/data";
import { TableRowActions } from "./table-row-actions";

export const columns: ColumnDef<Mustahik>[] = [
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
    accessorKey: "name",
    accessorFn: (row) => {
      return `${row.name}`;
    },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Applicant" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={generateAvatar(row.original.name)} alt={row.original.name} />
          <AvatarFallback>{row.original.name.slice(2)}</AvatarFallback>
        </Avatar>

        <section>
          <p className="m-0">{row.original.name}</p>
          <p className="m-0 text-xs text-gray-500">{row.original.occupation}</p>
        </section>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "condition",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Condition" />,
    cell: ({ row }) => {
      const status = conditions.find(
        (condition) => condition.value === row.getValue("condition")
      );

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
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const status = statuses.find((status) => status.value === row.getValue("status"));

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "gender",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Gender" />,
    cell: ({ row }) => {
      const status = genders.find((g) => g.value === row.getValue("gender"));

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "age",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Age" />,
    enableSorting: false,
  },
  {
    accessorKey: "id",
    accessorFn: (row) => {
      return `${row.name}`;
    },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Address" />,
    cell: ({ row }) => (
      <section>
        <p className="m-0">{row.original.village}</p>
        <p className="m-0 text-xs text-gray-500">
          {row.original.thana}, {row.original.district}
        </p>
      </section>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: TableRowActions,
  },
];
