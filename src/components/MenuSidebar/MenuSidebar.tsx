"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { NAVBAR_LIST } from "@/constants";
import { Icon } from "../Icons/Icon";

import { useEffect, useState } from "react";
import React from "react";

export default function MenuSidebar() {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const savedIndex = localStorage.getItem("clickedIndex"); // use Effect это когда происходит изменение в DOM
    if (savedIndex !== null) {
      setClickedIndex(Number(savedIndex));
    }
  }, []);

  const handleClick = (event: any, index: number, href: string) => {
    event.preventDefault();
    if (index === 6) {
      localStorage.removeItem("clickedIndex");
      setClickedIndex(null);
      router.push("/");
    } else {
      localStorage.setItem("clickedIndex", index.toString());
      setClickedIndex(index);
      router.push(href);
    }
  };

  return (
    <aside className="w-[342px] bg-[#0F1623] h-[100vh] pt-[88px] px-[30px]">
      <nav className="flex flex-col">
        {NAVBAR_LIST.map(({ title, icon }, index) => {
          const href = "/" + title.toLowerCase();
          const isClicked = clickedIndex === index;
          return (
            <React.Fragment key={index}>
              {index === 5 && (
                <div className="border-t-2 border-[#182235] mt-[18px] pt-[8px]"></div>
              )}
              <button
                className={`flex flex-row gap-[10px] items-center pl-2 w-[286px] h-[46px] rounded-lg
              hover:bg-[#182235] transition duration-[2000ms] ease-in-out
              ${isClicked ? "bg-[#182235]" : "bg-[#0F1623]"} 
              `}
                onClick={(event) => handleClick(event, index, href)}
              >
                <Icon type={icon} />
                <Link
                  href={href}
                  className="text-[#3F454F] text-[19px] font-normal 
                hover:text-[#F9B13C] transition duration-300 ease-in-out"
                >
                  {title}
                </Link>
              </button>
            </React.Fragment>
          );
        })}
      </nav>
    </aside>
  );
}
