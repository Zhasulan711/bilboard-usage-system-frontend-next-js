"use client";

import { useState } from "react";
import { NightModeIcon } from "../Icons/NightModeIcon";

export default function NightModeButton() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  }
  const textColorClass = isClicked ? "text-[#F9B13C]" : "text-white";
  return (
    <div
    className={`flex flex-row gap-[10px] items-center pl-2 w-[286px] h-[46px] rounded-lg mt-[75px]
    hover:bg-[#182235] focus:bg-[#182235] transition duration-300 ease-in-out ${textColorClass}`}
    onClick={handleClick}
    >
      <NightModeIcon />
      <input type="button" value="Night Mode" className={`text-[19px] font-normal ${textColorClass} hover:text-[#F9B13C]`}/>
    </div>
  );    
}
