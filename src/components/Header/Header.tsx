"use client";

import { BellIcon } from "@/components/Icons";
import { HeaderSearchBar } from "@/components/header/HeaderSearchBar";
import { HeaderAccount } from "./HeaderAccount";
import { currentUser } from "@/lib/auth";

export const Header = () => {

  return (
    <header className="w-[1386px] bg-[#0F1623] h-[68px] ml-auto flex border-l-2 border-[#010714]">
      <div className="flex flex-row pl-[20px] space-x-[820px] items-center">
        {/* search bar */}
        <HeaderSearchBar />

        {/* notification and user information */}
        <div className="flex flex-row space-x-[15px] items-center">
          {/* bell icon*/}
          <BellIcon />

          <HeaderAccount />
        </div>
      </div>
    </header>
  );
};
