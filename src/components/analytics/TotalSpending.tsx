"use client";

import { useState, useEffect } from "react";

import {
  TengeLargeCurrencyIcon,
} from "@/components/Icons";

export const TotalSpending = () => {
  const [totalSpending, setTotalSpending] = useState(0);

  useEffect(() => {
    const transactionHistory = JSON.parse(
      localStorage.getItem("transactionHistory") || "[]"
    );
    const total = transactionHistory.reduce(
      (acc: any, amount: any) => acc + amount,
      0
    );
    setTotalSpending(total);
  }, []);

  return (
    <div className="bg-[#0F1623] w-[321px] h-[160px] rounded-lg flex flex-col pl-[26px] space-y-[10px] justify-center">
      <h1 className="text-white text-[28px] font-medium text-left">
        Total spending
      </h1>
      <div className="flex flex-row items-center space-x-[3px]">
        <h1 className="text-white text-5xl font-normal">
          {totalSpending.toLocaleString()}
        </h1>
        <TengeLargeCurrencyIcon />
      </div>
    </div>
  );
};
