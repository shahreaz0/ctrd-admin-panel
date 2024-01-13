import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="dark:hidden h-[1.5rem] w-[1.3rem]" />
      <Moon className="dark:block hidden h-5 w-5" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
