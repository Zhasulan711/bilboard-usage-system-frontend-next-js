"use client";

import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "@/components/Icons";

export const Tooltip = () => {
  const [activeTooltip, setActiveTooltip] = useState(1);
  const [isTooltipVisible, setIsTooltipVisible] = useState(() => {
    return localStorage.getItem("isTooltipVisible") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isTooltipVisible", isTooltipVisible.toString());
  }, [isTooltipVisible]);

  const handleCloseFirstTooltip = () => {
    setActiveTooltip(2);
  };

  const handleCloseSecondTooltip = () => {
    setActiveTooltip(0);
  };

  if (!isTooltipVisible) {
    return null;
  }
  
  return (
    <div className="">
      {activeTooltip === 1 && (
        <div className="absolute right-[1022px] top-[480px] flex flex-row items-center">
          <div className="w-[127px] bg-[#29354E] h-[2px]" />
          <div className="bg-[#29354E] rounded-[18px] shadow-lg w-[382px] h-[130px] flex flex-col space-y-[10px] p-[15px]">
            <p className="text-white text-2xl font-normal">
              You can, buy advertising by clicking, on this button
            </p>
            <div className="flex flex-row space-[20px] items-center ml-[250px] space-x-[15px]">
              <h1 className="text-white text-2xl font-normal">1 of 2</h1>
              <button onClick={handleCloseFirstTooltip}>
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTooltip === 2 && (
        <div className="absolute right-[74px] top-[50px] flex flex-col items-center">
          <div className="w-[1px] bg-[#29354E] h-[47px] ml-[100px]" />
          <div className="bg-[#29354E] rounded-[18px] shadow-lg w-[382px] h-[130px] flex flex-col space-y-[10px] p-[15px]">
            <p className="text-white text-2xl font-normal">
              You can, see what you've added to your cart and buy ads
            </p>
            <div className="flex flex-row space-[20px] items-center ml-[250px] space-x-[15px]">
              <h1 className="text-white text-2xl font-normal">2 of 2</h1>
              <button onClick={handleCloseSecondTooltip}>
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
