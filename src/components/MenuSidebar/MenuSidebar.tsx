"use client";

import Link from "next/link";
import { NAVBAR_LIST } from "@/constants";
import { Icon } from "../Icons/Icon";

import NightModeButton from "../NightModeButton/NightModeButton";

export default function MenuSidebar() {
  return (
    <aside className="w-[342px] bg-[#0F1623] h-[100vh]">
      <nav className="flex flex-col mt-[88px] pl-[30px]">
        {NAVBAR_LIST.map(({ title, icon }, index) => {
          const href = "/" + title.toLowerCase();
          return (
            <div
              key={index}
              className="flex flex-row gap-[10px] items-center pl-2 w-[286px] h-[46px] rounded-lg
              hover:bg-[#182235] focus:bg-[#182235] transition duration-300 ease-in-out"
            >
              <Icon type={icon} />
              <Link
                href={href}
                className="text-[#3F454F] text-[19px] font-normal 
                hover:text-[#F9B13C] transition duration-300 ease-in-out"
              >
                {title}
              </Link>
            </div>
          );
        })}
        <NightModeButton />
      </nav>
    </aside>
  );
}
