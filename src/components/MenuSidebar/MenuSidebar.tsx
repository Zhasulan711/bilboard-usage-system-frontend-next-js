"use client";

import Link from "next/link";
import { NAVBAR_LIST } from "@/constants";
import { Icon } from "../Icons/Icon";
import { PlusIcon } from "../Icons";
import { ContactWithUsIcon } from "../Icons";
import { LogOutIcon } from "../Icons";

export default function MenuSidebar() {
  return (
    <aside className="w-[342px] bg-[#0F1623] h-[100vh] pt-[88px] px-[30px]">
      <nav className="flex flex-col">
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

        {/* Contact With US and LogOut */}
        <div className="border-t-2 border-[#182235] mt-[18px]"></div>
        <div
          className="flex flex-row gap-[10px] items-center pl-2 w-[286px] h-[46px] rounded-lg
              hover:bg-[#182235] focus:bg-[#182235] transition duration-300 ease-in-out mt-[18px]"
        >
          <ContactWithUsIcon />
          <Link
            href="#"
            className="text-[#72B152] text-[19px] font-normal 
                hover:text-[#F9B13C] transition duration-300 ease-in-out"
          >
            Contact With Us
          </Link>
        </div>

        <div
          className="flex flex-row gap-[10px] items-center pl-2 w-[286px] h-[46px] rounded-lg
              hover:bg-[#182235] focus:bg-[#182235] transition duration-300 ease-in-out"
        >
          <LogOutIcon />
          <Link
            href="/"
            className="text-[#D6343D] text-[19px] font-normal 
                hover:text-[#F9B13C] transition duration-300 ease-in-out"
          >
            Log Out
          </Link>
        </div>

        {/* post new ads */}
        <Link
          href="/post-add"
          className="w-[277px] h-[216px] bg-[#040C19] border border-transparent rounded-[18px] mt-[68px] 
          flex flex-col space-y-[15px] justify-center items-center text-center"
        >
          <div className="rounded-full w-[60px] h-[60px] bg-[#1A2843] flex justify-center items-center">
            <PlusIcon />
          </div>
          <section className="flex flex-col space-y-[6px]">
            <h1 className="text-white text-3xl font-normal">Post New Ads</h1>
            <p className="text-[#454B57] text-base font-normal">
              When placing new 24 ads, <br />{" "}
              <span className="text-[#F99801]">discount 10%</span>
            </p>
          </section>
        </Link>
      </nav>
    </aside>
  );
}
