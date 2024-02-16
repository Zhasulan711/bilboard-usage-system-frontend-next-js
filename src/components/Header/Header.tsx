"use client";
import { useState, useRef } from "react";
import Image from "next/image";

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSvgClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <header className="w-[1386px] bg-[#0F1623] h-[68px] ml-auto flex">
      <div className="flex flex-row pl-[20px] space-x-[820px] items-center">
        {/* search bar */}
        <div
          className="w-[321px] h-[42px] bg-[#182235] rounded-lg pl-[10px]
        flex flex-row space-x-[6px] items-center "
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleSvgClick}
          >
            <path
              className="hover:stroke-[#6E7581]"
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="white"
              stroke-opacity="0.5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              className="hover:stroke-[#6E7581]"
              d="M21 21L16.7 16.7"
              stroke="white"
              stroke-opacity="0.5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            ref={inputRef}
            className="placeholder-[#6E7581] text-sm font-normal bg-[#182235] text-[#6E7581]
            focus:outline-none"
            type="search"
            placeholder="Search"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </div>

        {/* notification and user information */}
        <div className="flex flex-row space-x-[15px] items-center">
          {/* bell icon*/}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 10.6667C8 8.54502 8.84286 6.51018 10.3431 5.00989C11.8434 3.5096 13.8783 2.66675 16 2.66675C18.1217 2.66675 20.1566 3.5096 21.6569 5.00989C23.1571 6.51018 24 8.54502 24 10.6667C24 20.0001 28 22.6667 28 22.6667H4C4 22.6667 8 20.0001 8 10.6667Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.7334 28C13.9566 28.4059 14.2847 28.7445 14.6834 28.9803C15.0821 29.216 15.5368 29.3404 16.0001 29.3404C16.4633 29.3404 16.918 29.216 17.3167 28.9803C17.7155 28.7445 18.0436 28.4059 18.2667 28"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

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
              <span className="text-[#FFFFFF] text-sm font-normal">Talgat Galymzhan</span>
              <span className="text-[#6F737B] text-sm font-normal">ID:1910435</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
