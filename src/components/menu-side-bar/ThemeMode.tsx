"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ThemeModeIcon } from "@/components/Icons";

export const ThemeMode = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "light";
      const initialTheme = storedTheme === "system" ? "light" : storedTheme;
      setIsDark(initialTheme === "dark");
      document.body.className = initialTheme === "dark" ? "dark-mode" : "light-mode";
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentTheme = theme || "light";
      const appliedTheme = currentTheme === "system" ? "light" : currentTheme;
      console.log("Applied Theme: ", appliedTheme); // For debugging
      setIsDark(appliedTheme === "dark");
      document.body.className = appliedTheme === "dark" ? "dark-mode" : "light-mode";

      // Update local storage
      localStorage.setItem("theme", appliedTheme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);

    // Update local storage
    localStorage.setItem("theme", newTheme);
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
