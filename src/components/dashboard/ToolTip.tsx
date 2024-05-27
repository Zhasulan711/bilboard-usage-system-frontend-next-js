"use client";

import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "@/components/Icons";

export const Tooltip = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(1);
  const [isTooltipVisible, setIsTooltipVisible] = useState(true); // default to true or false, doesn't matter here

  useEffect(() => {
    setIsClient(true); // Component did mount, we're on the client
    const visibility = localStorage.getItem("isTooltipVisible") === "true";
    setIsTooltipVisible(visibility);
  }, []);

  useEffect(() => {
    if (isClient) { // Now safe to use localStorage
      localStorage.setItem("isTooltipVisible", isTooltipVisible.toString());
    }
  }, [isTooltipVisible, isClient]);

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
    <>
      {activeTooltip === 1 && (
        <div className="absolute top-[572px] flex flex-row items-center
        right-[900px] ipad:right-[1020px] laptop:right-[1295px] QHD:right-[1650px]">
          <div className="w-[127px] bg-[#29354E] h-[2px]" />
          <div className="bg-[#29354E] rounded-[18px] shadow-lg w-[382px] h-[130px] flex flex-col space-y-[10px] p-[15px]">
            <p className="text-white text-2xl font-normal">
              You can, buy billboards by clicking, on this button
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
        <div className="absolute right-[127px] top-[50px] flex flex-col items-center">
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
    </>
  );
};
