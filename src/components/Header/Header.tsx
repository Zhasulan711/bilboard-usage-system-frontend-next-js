"use client";

import {
  InfoToolTipIcon,
  LandingPageIcon,
  ShoppingBasketIcon,
} from "@/components/Icons";
import { HeaderSearchBar } from "@/components/Header/HeaderSearchBar";
import { HeaderAccount } from "@/components/Header/HeaderAccount";
import { useRouter } from "next/navigation";
import { StrokeIconTheme } from "@/hooks/StrokeIconTheme";
import React, { useState, useEffect } from "react";
import { useClickedIndex } from "@/context/ClickedIndexContext";

export const Header: React.FC = () => {
  const router = useRouter();
  const isDark = StrokeIconTheme();
  const { clickedIndex, setClickedIndex } = useClickedIndex();
  const [inCartCount, setInCartCount] = useState<number>(0);

  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const visibility = localStorage.getItem("isTooltipVisible") === "true";
      setIsTooltipVisible(visibility);
    }
  }, []);

  useEffect(() => {
    if (isTooltipVisible !== null) {
      localStorage.setItem("isTooltipVisible", isTooltipVisible.toString());
    }
  }, [isTooltipVisible]);

  useEffect(() => {
    const fetchInCartCount = async () => {
      try {
        const response = await fetch("/api/billboards?status=IN_CART");
        const data = await response.json();
        setInCartCount(data.length);
      } catch (error) {
        console.error("Error fetching in-cart count", error);
      }
    };

    fetchInCartCount();

    const intervalId = setInterval(fetchInCartCount, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleToggleTooltipVisibility = () => {
    const newVisibility = !isTooltipVisible;
    setIsTooltipVisible(newVisibility);
    localStorage.setItem("isTooltipVisible", newVisibility.toString());
  };

  const handleClickBasket = () => {
    setClickedIndex(4);
    router.push("/basket");
  };

  const handleClickLandingPage = () => {
    setClickedIndex(null);
    router.push("/landing");
  };

  const tooltipIconColor = isTooltipVisible
    ? "#F9B13C"
    : isDark
    ? "white"
    : "black";

  return (
    <header className="w-full bg-white dark:bg-[#0F1623] h-[68px] ml-auto flex flex-row items-center border-l-2 dark:border-[#010714]">
      {/* search bar */}
      <HeaderSearchBar />

      {/* notification and user information */}
      <div className="flex flex-row space-x-[15px] items-center ml-auto mr-[35px]">
        <LandingPageIcon
          isClicked={handleClickLandingPage}
          strokeColor={isDark ? "white" : "black"}
        />
        <div className="flex flex-row">
          <h1 className="text-black dark:text-white text-2xl font-normal">
            ({inCartCount})
          </h1>
          {/* shoppingBasket icon */}
          <ShoppingBasketIcon
            onClick={handleClickBasket}
            strokeColor={
              clickedIndex === 4 ? "#F9B13C" : isDark ? "white" : "black"
            }
          />
        </div>
        <InfoToolTipIcon
          toggleVisibility={handleToggleTooltipVisibility}
          strokeColor={tooltipIconColor}
        />

        <HeaderAccount />
      </div>
    </header>
  );
};
