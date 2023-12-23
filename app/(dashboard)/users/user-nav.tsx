"use client";

import { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";

import { useAuth } from "@/hooks/custom/use-auth";
import { Button } from "@/components/ui/button";

import CreateUserDialog from "./create-user-dialog";

export default function UserNav() {
  const [open, isOpen] = useState(false);

  const { user } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name") || "");
    setEmail(localStorage.getItem("email") || "");
  }, [name, email]);

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
