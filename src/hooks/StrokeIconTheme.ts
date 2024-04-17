"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const StrokeIconTheme = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return isDark;
};
