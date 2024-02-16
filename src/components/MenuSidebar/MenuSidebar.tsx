"use client";

import Link from "next/link";

import { NAVBAR_LIST } from "@/constants";
import { Icon } from "../Icons/Icon";

export default function MenuSidebar() {
  return (
    <aside className="w-[342px] bg-[#0F1623] h-[100vh]">
      <nav className="flex flex-col mt-[88px] ml-[30px]">
        {NAVBAR_LIST.map(({ title, icon }) => {
          const href = "/" + title.toLowerCase();
          return (
            <div className="flex flex-row gap-[10px] items-center pl-2 w-[286px] h-[46px] rounded-lg">
              <Icon type={icon} />
              <Link
                href={href}
                className="text-[#3F454F] text-[19px] font-normal"
              >
                {title}
              </Link>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
