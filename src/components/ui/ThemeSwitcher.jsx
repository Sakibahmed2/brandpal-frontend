"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  if (resolvedTheme === "dark") {
    return <Sun size={42} color="white" onClick={() => setTheme("light")} />;
  }
  if (resolvedTheme === "light") {
    return <Moon size={42} color="black" onClick={() => setTheme("dark")} />;
  }
}
