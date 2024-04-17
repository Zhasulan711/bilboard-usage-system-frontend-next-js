"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ThemeModeIcon } from "@/components/Icons";

export const ThemeMode = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === "dark");
    document.body.className = theme === "dark" ? "dark-mode" : "light-mode";
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);
  };

  return (
    <div className="flex flex-row space-x-[15px] items-center pl-[10px]" onClick={toggleTheme}>
      <ThemeModeIcon strokeColor={isDark ? "white" : "black"}/>
      <h1
        className={`text-lg font-normal ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {isDark ? "Night Mode" : "Light Mode"}
      </h1>
    </div>
  );
};
