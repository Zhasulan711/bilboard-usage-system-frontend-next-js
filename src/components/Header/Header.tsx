"use client";

import { ShoppingBasketIcon } from "@/components/Icons";
import { HeaderSearchBar } from "@/components/Header/HeaderSearchBar";
import { HeaderAccount } from "@/components/Header/HeaderAccount";
import { useRouter } from "next/navigation";
import { StrokeIconTheme } from "@/hooks/StrokeIconTheme";
export const Header = () => {
  const route = useRouter();
  const isDark = StrokeIconTheme();

  const isClicked = () => {
    route.push("/finance");
  };

  return (
    <header className="w-[1386px] bg-white dark:bg-[#0F1623] h-[68px] ml-auto flex border-l-2 dark:border-[#010714]">
      <div className="flex flex-row pl-[20px] space-x-[815px] items-center">
        {/* search bar */}
        <HeaderSearchBar />

        {/* notification and user information */}
        <div className="flex flex-row space-x-[15px] items-center">
          {/* shoppingBasket icon*/}

          <ShoppingBasketIcon
            isClicked={isClicked}
            strokeColor={isDark ? "white" : "black"}
          />

          <HeaderAccount />
        </div>
      </div>
    </header>
  );
};
