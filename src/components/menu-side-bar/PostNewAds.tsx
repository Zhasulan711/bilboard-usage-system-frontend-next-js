"use client";

import Link from "next/link";
import { PlusIcon } from "@/components/Icons";
import { StrokeIconTheme } from "@/hooks/StrokeIconTheme";
import { usePathname } from "next/navigation";

export const PostNewAds = () => {
  const isDark = StrokeIconTheme();
  const pathname = usePathname();

  const isActive = pathname === "/post-add";

  return (
    <Link
      href="/post-add"
      className={`w-[277px] h-[216px] border-[3px] border-transparent rounded-[18px] mt-[68px] 
          flex flex-col space-y-[15px] justify-center items-center text-center
          ${
            isActive
              ? isDark
                ? "bg-[#040C19]"
                : "bg-[#FF9800]"
              : isDark
              ? "bg-[#0F1623] border-black"
              : "bg-white border-[#FF9800]"
          }`}
    >
      <div
        className={`rounded-full w-[60px] h-[60px] flex justify-center items-center ${
          isActive
            ? isDark
              ? "bg-[#FF9800]"
              : "bg-white"
            : isDark
            ? "bg-black"
            : "bg-[#FF9800]"
        }`}
      >
        <PlusIcon
          strokeColor={`${
            isActive
              ? isDark
                ? "white"
                : "black"
              : isDark
              ? "white"
              : "white"
          }`}
        />
      </div>
      <section className="flex flex-col space-y-[6px]">
        <h1
          className={`text-3xl font-normal
        ${
          isActive
            ? isDark
              ? "text-white"
              : "text-white"
            : isDark
            ? "text-white"
            : "text-black"
        }`}
        >
          Buy new Billboards
        </h1>
        <p
          className={`text-base font-normal ${
            isActive
              ? isDark
                ? "text-[#454B57]"
                : "text-[#D9D9D9]"
              : isDark
              ? "text-[#454B57]"
              : "text-[#454B57]"
          }`}
        >
          Click to that box, to buy <br />{" "}
          <span
            className={`${
              isActive
                ? isDark
                  ? "text-[#FF9800]"
                  : "text-black"
                : isDark
                ? "text-[#FF9800]"
                : "text-[#FF9800]"
            }`}
          >
            billboards
          </span>
        </p>
      </section>
    </Link>
  );
};
