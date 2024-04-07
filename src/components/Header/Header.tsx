"use client";

import { BellIcon, ShoppingBasketIcon } from "@/components/Icons";
import { HeaderSearchBar } from "@/components/header/HeaderSearchBar";
import { HeaderAccount } from "./HeaderAccount";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [isShoppingBasketIconClicked, setIsShoppingBasketIconClicked] = useState<boolean>(false);
  const route = useRouter();

  const isClicked = () => {
    route.push("/buy");
  }

  return (
    <header className="w-[1386px] bg-[#0F1623] h-[68px] ml-auto flex border-l-2 border-[#010714]">
      <div className="flex flex-row pl-[20px] space-x-[780px] items-center">
        {/* search bar */}
        <HeaderSearchBar />

        {/* notification and user information */}
        <div className="flex flex-row space-x-[15px] items-center">
          {/* bell icon*/}
          <div className="flex flex-row space-x-[8px]">
            <ShoppingBasketIcon isClicked={isClicked}/>
            <BellIcon/>
          </div>

          <HeaderAccount />
        </div>
      </div>
    </header>
  );
};
