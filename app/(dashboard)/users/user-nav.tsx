"use client";

import { useEffect, useState } from "react";

import { generateAvatar, getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import CreateUserDialog from "./create-user-dialog";

export default function UserNav() {
  const [open, isOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name") || "");
    setEmail(localStorage.getItem("email") || "");
  }, [name, email]);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-9 w-9">
              <AvatarImage src={generateAvatar(name)} alt={name} />
              <AvatarFallback>{getInitials(name)}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{name}</p>
              <p className="text-xs leading-none text-muted-foreground">{email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                isOpen(true);
                document.body.style.pointerEvents = "";
              }}
            >
              Create User
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <CreateUserDialog open={open} isOpen={isOpen} />
    </>
  );
}
