"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

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
      <Button onClick={() => isOpen(true)} size="sm">
        Create User
      </Button>
      <CreateUserDialog open={open} isOpen={isOpen} />
    </>
  );
}
