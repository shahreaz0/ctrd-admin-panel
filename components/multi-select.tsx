"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";

type Framework = Record<"value" | "label", string>;

interface Props {
  data: { label: string; value: string }[];
  placeholder?: string;
  defaultValue?: Framework[];
  // eslint-disable-next-line no-unused-vars
  onChange?: (values: { value: string; label: string }[]) => void;
}

export function MultiSelect({
  data,
  onChange,
  placeholder = "Select",
  defaultValue,
}: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Framework[]>([]);
  const [filtered, setFiltered] = React.useState<Framework[]>([]);
  const [inputValue, setInputValue] = React.useState("");

  const handleUnselect = React.useCallback((framework: Framework) => {
    setSelected((prev) => prev.filter((s) => s.value !== framework.value));
  }, []);

  const handleKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const input = inputRef.current;
    if (input) {
      if (e.key === "Delete" || e.key === "Backspace") {
        if (input.value === "") {
          setSelected((prev) => {
            const newSelected = [...prev];
            newSelected.pop();
            return newSelected;
          });
        }
      }
      // This is not a default behaviour of the <input /> field
      if (e.key === "Escape") {
        input.blur();
      }
    }
  }, []);

  React.useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  React.useEffect(() => {
    if (defaultValue) {
      setSelected(() => defaultValue);
    }
  }, [defaultValue]);

  React.useEffect(() => {
    const tempData = data ? [...data] : [];

    if (selected.length) {
      for (const framework of selected) {
        for (const item of tempData) {
          if (item.value === framework.value) {
            tempData.splice(tempData.indexOf(item), 1);
          }
        }
      }
    }

    setFiltered(() => tempData);
  }, [selected, data]);

  return (
    <Command onKeyDown={handleKeyDown} className="overflow-visible bg-transparent">
      <div className="group rounded-md border border-input  px-3 py-2 text-sm shadow-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-1">
        <div className="flex flex-wrap gap-1">
          {selected.map((framework, index) => {
            return (
              <Badge key={index} variant="secondary">
                {framework.label}
                <button
                  className="ml-1 rounded-full  outline-none ring-offset-background  focus:ring-ring focus:ring-offset-1"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(framework);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(framework)}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            );
          })}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            className="ml-2 flex-1  bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open && filtered.length > 0 ? (
          <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
            <CommandGroup className="h-full overflow-auto">
              {filtered.map((selected, index) => {
                return (
                  <CommandItem
                    key={index}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onSelect={() => {
                      setInputValue("");
                      setSelected((prev) => [...prev, selected]);
                    }}
                    className={"cursor-pointer"}
                  >
                    {selected.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </div>
        ) : null}
      </div>
    </Command>
  );
}
