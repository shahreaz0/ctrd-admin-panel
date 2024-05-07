"use client";

import { useEffect, useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Download, Loader2 } from "lucide-react";

import { exportMustahik } from "@/lib/export-mustahik";
import { useDebounce } from "@/hooks/custom/use-debounce";
import { useGetAllPrograms } from "@/hooks/rq/programs/use-get-all-programs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DataTableFacetedFilter } from "@/components/core/data-table/data-table-faceted-filter";
import { DataTableViewOptions } from "@/components/core/data-table/data-table-view-options";
import { useMustahikFilters } from "@/components/mustahik-filters-provider";

import { acceptanceStatuses, conditions, genders } from "./data/data";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function TableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const { data: programs } = useGetAllPrograms();

  const [isPending, setIsPending] = useState(false);

  const { setMustahikFilters, mustahikFilters } = useMustahikFilters();

  const [reset, setReset] = useState(false);

  const [q, setQ] = useState("");
  const debouncedSearchName = useDebounce(q, 400);

  useEffect(() => {
    setMustahikFilters((prev) => ({ ...prev, searchName: debouncedSearchName }));
  }, [debouncedSearchName]);

  const isFiltered =
    !!mustahikFilters.Condition.length ||
    !!mustahikFilters.Status.length ||
    !!mustahikFilters.Gender.length ||
    !!mustahikFilters.Program.length;

  const programsOptions = programs?.map((program) => ({
    value: program.id.toString(),
    label: program.name,
  }));

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search..."
          value={q}
          onChange={(event) => setQ(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("condition") && (
          <DataTableFacetedFilter
            title="Condition"
            options={conditions}
            reset={reset}
            onValueChange={(value) => {
              setMustahikFilters((prev) => {
                return {
                  ...prev,
                  Condition: value,
                };
              });
            }}
          />
        )}

        {table.getColumn("acceptanceStatus") && (
          <DataTableFacetedFilter
            title="Status"
            options={acceptanceStatuses}
            reset={reset}
            onValueChange={(value) => {
              setMustahikFilters((prev) => {
                return {
                  ...prev,
                  Status: value,
                };
              });
            }}
          />
        )}

        {table.getColumn("gender") && (
          <DataTableFacetedFilter
            title="Gender"
            options={genders}
            reset={reset}
            onValueChange={(value) => {
              setMustahikFilters((prev) => {
                return {
                  ...prev,
                  Gender: value,
                };
              });
            }}
          />
        )}

        {programsOptions && table.getColumn("programName") && (
          <>
            <DataTableFacetedFilter
              onValueChange={(value) => {
                setMustahikFilters((prev) => {
                  return {
                    ...prev,
                    Program: value,
                  };
                });
              }}
              className="w-[350px]"
              title="Program"
              options={programsOptions}
              reset={reset}
            />
          </>
        )}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => {
              setMustahikFilters((prev) => {
                return {
                  ...prev,
                  Program: [],
                  Status: [],
                  Condition: [],
                  Gender: [],
                };
              });

              setReset(true);
              setTimeout(() => setReset(false), 100);
            }}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="flex gap-x-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="outline"
                disabled={isPending}
                onClick={async () => {
                  const p = {
                    Condition: mustahikFilters.Condition,
                    Status: mustahikFilters.Status,
                    Program: mustahikFilters.Program,
                    Gender: mustahikFilters.Gender,
                  };

                  setIsPending(true);

                  await exportMustahik(p);

                  setIsPending(false);
                }}
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-1 h-4 w-4 animate-spin" /> Please wait...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                  </>
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Export Mustahik</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
