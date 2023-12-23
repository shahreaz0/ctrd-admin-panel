"use client";

import { useEffect, useState } from "react";

type User = {
  id: string;
  fullName: string;
  email: string;
  department: string;
  roles: string[];
};

export function useAuth() {
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("info") as string));
  }, []);

  return { user };
}
