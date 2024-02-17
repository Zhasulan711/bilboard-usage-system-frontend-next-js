"use client";

import { useState, useRef, ChangeEvent } from "react";
import Image from "next/image";
import { BellIcon, SearchIcon } from "../Icons";

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSVGClick = (current: HTMLInputElement | null) => {
    if (current) {
      current.focus();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <header className="w-[1386px] bg-[#0F1623] h-[68px] ml-auto flex border-l-2 border-[#010714]">
      <div className="flex flex-row pl-[20px] space-x-[820px] items-center">
        {/* search bar */}
        <div
          className="w-[321px] h-[42px] bg-[#182235] rounded-lg pl-[10px]
        flex flex-row space-x-[6px] items-center "
        >
          <SearchIcon handleSVGClick={() => handleSVGClick(inputRef.current)} />
          <input
            ref={inputRef}
            className="placeholder-[#6E7581] text-sm font-normal bg-[#182235] text-[#6E7581] focus:outline-none"
            type="search"
            placeholder="Search"
            value={searchText}
            onChange={handleChange}
          />
        </div>

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
