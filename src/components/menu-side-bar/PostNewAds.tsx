"use client";

import Link from "next/link";
import { PlusIcon } from "@/components/Icons";
import { StrokeIconTheme } from "@/hooks/StrokeIconTheme";

export const PostNewAds = () => {
  const isDark = StrokeIconTheme();

  return (
    <Link
      href="/post-add"
      className={`w-[277px] h-[216px] border border-transparent rounded-[18px] mt-[68px] 
          flex flex-col space-y-[15px] justify-center items-center text-center
        ${isDark ? "bg-[#040C19]" : "bg-[#FF9800]"}`}
    >
      <div
        className={`rounded-full w-[60px] h-[60px] flex justify-center items-center ${
          isDark ? "bg-[#F99801]" : "bg-white"
        }`}
      >
        <PlusIcon strokeColor={isDark ? "white" : "black"} />
      </div>
      <section className="flex flex-col space-y-[6px]">
        <h1 className="text-white text-3xl font-normal">Post New Ads</h1>
        <p
          className={`text-base font-normal ${
            isDark ? "text-[#454B57]" : "text-[#D9D9D9]"
          }`}
        >
          When placing new 24 ads, <br />{" "}
          <span className={`${isDark ? "text-[#F99801]" : "text-black"}`}>
            discount 10%
          </span>
        </p>
      </section>
    </Link>
  );
};
