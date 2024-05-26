"use client";

import React, { useEffect, useState } from "react";

import { CompassIcon, SmallShoppingBagIcon } from "@/components/Icons";

import { StrokeIconTheme } from "@/hooks/StrokeIconTheme";

enum STATUS {
  IDLING = "IDLING",
  IN_CART = "IN_CART",
  PURCHASED = "PURCHASED",
}

interface Billboard {
  id: number;
  address: string;
  region: string;
  price: string;
  grp: string;
  date: string;
  placeNumber: string;
  size: string;
  category: string;
  status: STATUS;
  time: string;
  colorClass: string;
}

export const LooseBillboards = () => {
  const [processingItems, setProcessingItems] = useState<number[]>([]);
  const [availableBillboards, setAvailableBillboards] = useState<Billboard[]>(
    []
  );
  const isDark = StrokeIconTheme();

  useEffect(() => {
    const fetchProcessingItems = async () => {
      try {
        const response = await fetch("/api/billboards?status=IN_CART");
        const data: Billboard[] = await response.json();
        setProcessingItems(data.map((item) => item.id));
      } catch (error) {
        console.error("Error fetching processing items:", error);
      }
    };

    fetchProcessingItems();

    const intervalId = setInterval(fetchProcessingItems, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchBillboards = async () => {
      try {
        const response = await fetch("/api/billboards?status=IDLING");
        const data: Billboard[] = await response.json();
        setAvailableBillboards(data);
      } catch (error) {
        console.error("Error fetching billboards:", error);
      }
    };

    fetchBillboards();

    const intervalId = setInterval(fetchBillboards, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleBuy = async (item: Billboard) => {
    if (!processingItems.includes(item.id)) {
      try {
        const response = await fetch("/api/billboards", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: item.id, status: STATUS.IN_CART }),
        });

        if (response.ok) {
          setProcessingItems((prev) => [...prev, item.id]);
        } else {
          throw new Error("Failed to update the billboard status.");
        }
      } catch (error) {
        console.error("Error buying item:", error);
      }
    }
  };

  return (
    <div className="bg-white dark:bg-[#0F1623] ml-[20px] w-[322px] h-[600px] rounded-lg pl-[26px] pt-[12px]">
      <h1 className="text-black dark:text-white text-[28px] font-medium">
        Available billboards
      </h1>
      <div className="flex flex-col pt-[20px] space-y-[10px] h-[540px] overflow-y-auto scroll-hidden">
        {availableBillboards.length > 0 ? (
          availableBillboards.map((item, index) => {
            const isDisabled = processingItems.includes(item.id);
            return (
              <div
                key={index}
                className={`w-[270px] h-[32px] flex flex-row items-center space-x-[80px] ${
                  isDisabled
                    ? "text-[#D9D9D9] dark:text-[#666666] bg-gray-100 dark:bg-[#182236]"
                    : ""
                }`}
              >
                <div
                  className={`flex flex-row space-x-[10px] items-center w-[160px] 
                `}
                >
                  <div
                    className={`bg-color-${item.colorClass} rounded-[5px] w-[32px] h-[32px] justify-center flex items-center`}
                  >
                    <CompassIcon />
                  </div>
                  <div className={`flex flex-col `}>
                    <h2
                      className={`text-black dark:text-white text-[12px] font-normal whitespace-nowrap truncate max-w-[100px] ${
                        isDisabled
                          ? "text-gray-400 dark:text-gray-700 bg-gray-100 dark:bg-[#182236]"
                          : ""
                      }`}
                    >
                      {item.address}
                    </h2>
                    <h3 className="text-[#D9D9D9] dark:text-[#3C424C] text-[11px] font-normal">
                      {item.id}
                    </h3>
                  </div>
                </div>

                <SmallShoppingBagIcon
                  onClick={() => !isDisabled && handleBuy(item)}
                  disabled={isDisabled}
                  strokeColor={
                    isDisabled
                      ? isDark
                        ? "#666666"
                        : "#D9D9D9"
                      : isDark
                      ? "white"
                      : "black"
                  }
                />
              </div>
            );
          })
        ) : (
          <p className="text-black dark:text-white text-[20px] font-normal">
            No billboards available.
          </p>
        )}
      </div>
    </div>
  );
};
