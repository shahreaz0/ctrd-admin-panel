"use client";

import { type Dispatch, type SetStateAction } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableFacetedFilter } from "@/components/core/data-table/data-table-faceted-filter";
import { DataTableViewOptions } from "@/components/core/data-table/data-table-view-options";

import { acceptanceStatuses, conditions, genders } from "./data/data";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  setQuery: Dispatch<SetStateAction<string>>;
  query: string;
}

export function TableToolbar<TData>({
  table,
  query,
  setQuery,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter users by name..."
          value={query}
          onChange={(event) =>
            // table.getColumn("name")?.setFilterValue(event.target.value)
            setQuery(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("condition") && (
          <DataTableFacetedFilter
            column={table.getColumn("condition")}
            title="Condition"
            options={conditions}
          />
        )}

        {table.getColumn("acceptanceStatus") && (
          <DataTableFacetedFilter
            column={table.getColumn("acceptanceStatus")}
            title="Status"
            options={acceptanceStatuses}
          />
        )}

        {table.getColumn("gender") && (
          <DataTableFacetedFilter
            column={table.getColumn("gender")}
            title="Gender"
            options={genders}
          />
        )}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
