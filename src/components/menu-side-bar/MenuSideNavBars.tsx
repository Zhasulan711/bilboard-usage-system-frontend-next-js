"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import { NAVBAR_LIST } from "@/constants";
import { Icon } from "@/components/Icons/Icon";
// import { LogoutButton } from "@/components/auth//logout-button";
import { logout } from "@/actions/logout";

import { useEffect, useState } from "react";
import React from "react";

export const MenuSideNavBars = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const savedIndex = localStorage.getItem("clickedIndex");
    if (savedIndex !== null) {
      setClickedIndex(Number(savedIndex));
    }

    const currentIndex = NAVBAR_LIST.findIndex(
      ({ title }) => "/" + title.toLowerCase() === pathname
    );
    setClickedIndex(currentIndex);
    if (currentIndex !== -1) {
      localStorage.setItem("clickedIndex", currentIndex.toString());
    }
  }, [pathname]);

  const handleClick = (event: any, index: number, href: string) => {
    event.preventDefault();
    if (index === 7) {
      localStorage.removeItem("clickedIndex");
      setClickedIndex(null);
      logout();
    } else if (index === 6) {
      localStorage.removeItem("clickedIndex");
      setClickedIndex(null);
      router.push("https://wa.me/qr/3NR4CZ7RSLCXB1");
    } else {
      localStorage.setItem("clickedIndex", index.toString());
      setClickedIndex(index);
      router.push(href);
    }
  };

  return (
    <nav className="flex flex-col">
      {NAVBAR_LIST.map(({ title, icon }, index) => {
        const href = "/" + title.toLowerCase();
        const isClicked = clickedIndex === index;
        return (
          <React.Fragment key={index}>
            {index === 6 && (
              <div className="border-t-2 dark:border-[#182235] mt-[8px] pt-[8px]"></div>
            )}
            <button
              className={`flex flex-row gap-[10px] items-center pl-2 w-[286px] h-[46px] rounded-lg hover:bg-[#D9D9D9]
              dark:hover:bg-[#182235] transition duration-2000 ease-in-out
              ${
                isClicked
                  ? "bg-[#D9D9D9] dark:bg-[#182235]"
                  : "bg-white dark:bg-[#0F1623]"
              } 
              `}
              onClick={(event) => handleClick(event, index, href)}
            >
              <Icon type={icon} isClicked={isClicked} />
              <Link
                href={href}
                className={`text-[#3F454F] text-[19px] font-normal 
                hover:text-[#F9B13C] target:text-[#F9B13C] transition duration-2000 ease-in-out
                ${
                  isClicked
                    ? "text-[#F9B13C]"
                    : "text-[#D9D9D9] dark:text-[#3F454F]"
                }`}
              >
                {title}
              </Link>
            </button>
          </React.Fragment>
        );
      })}
    </nav>
  );
};
