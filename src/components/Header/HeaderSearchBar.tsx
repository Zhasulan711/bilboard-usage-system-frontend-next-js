"use client";

import { useState, useRef, ChangeEvent } from "react";
import { SearchIcon } from "@/components/Icons";
import { useRouter } from "next/navigation";
import { StrokeIconTheme } from "@/hooks/StrokeIconTheme";

export const HeaderSearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState(""); // Add this line

  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const isDark = StrokeIconTheme();

  const routes: { [key: string]: string } = {
    landing: "/landing",
    dashboard: "/dashboard",
    transaction: "/transaction",
    analytics: "/analytics",
    settings: "/settings",
    basket: "/basket",
    checks: "/checks",
    contactWithUs: "/contactWithUs",
    logout: "/",
    postAdd: "/post-add",
  };

  const findFullRouteName = (inputText: string) => {
    for (const routeKey of Object.keys(routes)) {
      if (routeKey.startsWith(inputText)) {
        return routeKey;
      }
    }
    return "";
  };

  const handleSVGClick = (current: HTMLInputElement | null) => {
    if (current) {
      current.focus();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value.toLowerCase();
    setSearchText(inputText);

    if (!inputText) {
      setShowTooltip(false);
      setTooltipText("");
      return;
    }

    const fullRouteName = findFullRouteName(inputText);
    if (fullRouteName) {
      setTooltipText(fullRouteName);
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
      setTooltipText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchText) {
      const routePath = routes[tooltipText];
      if (routePath) {
        setShowTooltip(false);
        router.push(routePath);
      }
    }
  };

  return (
    <div
      className="w-[321px] h-[42px] bg-[#D9D9D9] dark:bg-[#182235] rounded-lg pl-[10px]
        flex flex-row space-x-[6px] items-center "
    >
      <SearchIcon
        handleSVGClick={() => handleSVGClick(inputRef.current)}
        strokeColor={isDark ? "white" : "black"}
      />
      <input
        ref={inputRef}
        className="placeholder-[#6E7581] text-sm font-normal bg-[#D9D9D9] dark:bg-[#182235] text-[#6E7581] focus:outline-none"
        type="search"
        placeholder="Search"
        value={searchText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {showTooltip && (
        <div className="text-white text-[15px]"> {tooltipText}</div>
      )}{" "}
    </div>
  );
};
