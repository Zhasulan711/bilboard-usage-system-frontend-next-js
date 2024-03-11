"use client";

import Image from "next/image";
import { BellIcon } from "../Icons";
import HeaderSearchBar from "../HeaderSearchBar/HeaderSearchBar";

export default function Header() {
  return (
    <header className="w-[1386px] bg-[#0F1623] h-[68px] ml-auto flex border-l-2 border-[#010714]">
      <div className="flex flex-row pl-[20px] space-x-[820px] items-center">
        {/* search bar */}
        <HeaderSearchBar />

        {/* notification and user information */}
        <div className="flex flex-row space-x-[15px] items-center">
          {/* bell icon*/}
          <BellIcon />

          <div className="flex flex-row space-x-[10px]">
            {/* user logo */}
            <Image
              className="rounded-full h-[42px]"
              alt="user-logo"
              width={42}
              height={42}
              src="/images/user-logo.png"
            />
            {/* user name & id */}
            <div className="flex flex-col">
              <span className="text-[#FFFFFF] text-sm font-normal">
                Talgat Galymzhan
              </span>
              <span className="text-[#6F737B] text-sm font-normal">
                ID:1910435
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
