"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ThemeModeIcon } from "@/components/Icons";

export const ThemeMode = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const appliedTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;
    setIsDark(appliedTheme === "dark");
    document.body.className =
      appliedTheme === "dark" ? "dark-mode" : "light-mode";
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      className="flex flex-row space-x-[10px] items-center pl-[10px] hover:bg-[#D9D9D9]
      dark:hover:bg-[#182235] transition duration-1000 ease-in-out"
      onClick={toggleTheme}
    >
      <ThemeModeIcon strokeColor={isDark ? "white" : "black"} />
      <h1
        className={`text-lg font-normal ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {isDark ? "Night Mode" : "Light Mode"}
      </h1>
    </button>
  );
};
