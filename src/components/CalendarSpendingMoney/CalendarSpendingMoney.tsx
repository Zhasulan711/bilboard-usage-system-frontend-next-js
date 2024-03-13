"use client";

import { useState } from "react";
import React from "react";
export default function CalendarSpendingMoney() {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const handleClick = (index: number, event: any) => {
    event.preventDefault();
    setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const colorData = [
    { color: "midnightCircle", text: "0" },
    { color: "denimCircle", text: "200k-300k" },
    { color: "cobaltCircle", text: "300k-500k" },
    { color: "blueCircle", text: "500k-800k" },
    { color: "oceanCircle", text: "Above 800k" },
  ];

  const chunk = (array: any[], size: number) => {
    const chunked_arr = [];
    let index = 0;
    while (index < array.length) {
      chunked_arr.push(array.slice(index, size + index));
      index += size;
    }
    return chunked_arr;
  };

  const colorDataChunks = chunk(colorData, 2);

  return (
    <div className="flex flex-col space-y-[10px] mt-[20px]">
      {colorDataChunks.map(
        (
          chunk,
          chunkIndex // every two massive chunks to be displayed in a row 1,2 .  3,4 . 5,(6)
        ) => (
          <div key={chunkIndex} className="flex flex-row space-x-[30px]">
            {chunk.map((item, itemIndex) => {
              const globalIndex =
                chunkIndex * colorDataChunks[0].length + itemIndex;  // 0 * 2 + 0; 
              const isActive = clickedIndex === globalIndex;
              
              return (
                <div
                  key={globalIndex}
                  className={`flex flex-row items-center space-x-[5px] ${
                    isActive ? "bg-[#182235]" : ""
                  }`}
                  onClick={(event) => handleClick(globalIndex, event)}
                >
                  <div
                    className={`w-2 h-2 bg-color-${item.color} rounded-full`}
                  ></div>
                  <h3 className="text-white text-xl font-normal">
                    {item.text}
                  </h3>
                </div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
}
