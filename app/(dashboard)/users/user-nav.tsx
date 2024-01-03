"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";

import { useGetUserInfo } from "@/hooks/rq/auth/use-get-user-info";
import { Button } from "@/components/ui/button";

import CreateUserDialog from "./create-user-dialog";

export default function UserNav() {
  const [open, isOpen] = useState(false);

  const { data: user } = useGetUserInfo();

  return (
    <>
      {user?.roles?.includes("ADMINISTRATOR") && (
        <Button onClick={() => isOpen(true)} size="sm">
          <PlusCircle className="mr-2 h-4 w-4" /> Create User
        </Button>
      )}

      <CreateUserDialog open={open} isOpen={isOpen} />
    </>
  );
}
