"use client";

import { useState, useEffect } from "react";

import { TengeLargeCurrencyIcon } from "@/components/Icons";

export const TotalSpending = () => {
  const [totalSpending, setTotalSpending] = useState(0);

  useEffect(() => {
    const fetchTotalSpending = async () => {
      try {
        const response = await fetch("/api/billboards?status=PURCHASED");
        const billboards = await response.json();

        if (response.ok) {
          const total = billboards.reduce((acc: number, billboard: any) => {
            return acc + parseFloat(billboard.price);
          }, 0);
          setTotalSpending(total);
        } else {
          console.error("Error fetching total spending:", billboards.error);
        }
      } catch (error) {
        console.error("Error fetching total spending:", error);
      }
    };

    fetchTotalSpending();
  }, []);

  return (
    <div className="bg-white dark:bg-[#0F1623] w-[321px] h-[160px] rounded-lg flex flex-col pl-[26px] space-y-[10px] justify-center">
      <h1 className="text-black dark:text-white text-[28px] font-medium text-left">
        Total spending
      </h1>
      <div className="flex flex-row items-center space-x-[3px]">
        <h1 className="text-black dark:text-white text-5xl font-normal">
          {totalSpending.toLocaleString()}
        </h1>
        <TengeLargeCurrencyIcon />
      </div>
    </div>
  );
};
