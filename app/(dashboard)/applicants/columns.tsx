"use client";

import { ColumnDef } from "@tanstack/react-table";

import type { Mustahik } from "@/types/mustahik";
import { generateAvatar } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/core/data-table/data-table-column-header";

import { acceptanceStatuses, conditions, genders } from "./data/data";
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
    accessorFn: (row) => {
      const status = conditions.find((condition) => condition.value === row.condition);
      return status?.label;
    },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Condition" />,
    cell: ({ row }) => {
      const status = conditions.find(
        (condition) => condition.label === row.getValue("condition")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
          <p>{status.label}</p>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      const condition = conditions.find(
        (condition) => condition.label === row.getValue(id)
      );

      return value.includes(String(condition?.value));
    },
  },
  {
    accessorKey: "acceptanceStatus",
    accessorFn: (row) => {
      const status = acceptanceStatuses.find(
        (status) => status.value === row.acceptanceStatus
      );
      return status?.label;
    },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Acceptance" />,
    cell: ({ row }) => {
      const status = acceptanceStatuses.find(
        (status) => status.label === row.getValue("acceptanceStatus")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
          <p>{status.label}</p>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      const acceptanceStatus = acceptanceStatuses.find(
        (status) => status.label === row.getValue(id)
      );

      return value.includes(String(acceptanceStatus?.value));
    },
  },

  {
    accessorKey: "status",
    accessorFn: (row) => {
      return row.status?.map((e) => e.status).join(", ");
    },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Statuses" />,
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span>{row.getValue("status")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "gender",
    accessorFn: (row) => {
      const status = genders.find((gender) => gender.value === row.gender);
      return status?.label;
    },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Gender" />,
    cell: ({ row }) => {
      const status = genders.find((gender) => gender.label === row.getValue("gender"));

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
      const gender = genders.find((gender) => gender.label === row.getValue(id));

      return value.includes(String(gender?.value));
    },
  },
  {
    accessorKey: "age",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Age" />,
  },
  {
    accessorKey: "address",
    accessorFn: (row) => {
      return `${row.name}__${row.village}__${row.thana}__${row.district}`;
    },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Address" />,
    cell: ({ row }) => {
      const address = row.getValue("address") as string;

      const [village, thana, district] = address.split("__");

      return (
        <section>
          <p className="m-0">{village}</p>
          <p className="m-0 text-xs text-gray-500">
            {thana}, {district}
          </p>
        </section>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "programId",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Program ID" />,
    // filterFn: (row, id, value) => {
    //   const program = programs.find((program) => program.label === row.getValue(id));

    //   return value.includes(String(program?.value));
    // },
  },
  {
    id: "actions",
    cell: TableRowActions,
  },
];
