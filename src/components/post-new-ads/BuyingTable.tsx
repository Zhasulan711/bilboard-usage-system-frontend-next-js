"use client";

import React, { useEffect, useState } from "react";

import { LargeShoppingBagIcon } from "@/components/Icons";

import { StrokeIconTheme } from "@/hooks/StrokeIconTheme";

interface Billboard {
  id: number;
  address: string;
  region: string;
  price: string;
  grp: string;
  date: string;
  category: string;
  status: "IN_CART" | "PURCHASED" | "IDLING";
}

const navTable = [
  "Address",
  "Region",
  "Price, tg",
  "GRP",
  "Date",
  "Category",
  "Buying",
];

export const BuyingTable: React.FC = () => {
  const [billboards, setBillboards] = useState<Billboard[]>([]);
  const isDark = StrokeIconTheme();

  useEffect(() => {
    const fetchBillboards = async () => {
      try {
        const response = await fetch("/api/billboards");
        const data = await response.json();
        if (Array.isArray(data)) {
          setBillboards(data);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchBillboards();

    const intervalId = setInterval(fetchBillboards, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleBuy = async (item: Billboard) => {
    if (item.status === "IDLING") {
      try {
        const response = await fetch("/api/billboards", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: item.id, status: "IN_CART" }),
        });
        if (response.ok) {
          updateBillboardStatus(item.id, "IN_CART");
        } else {
          console.error("Failed to update status:", await response.text());
        }
      } catch (error) {
        console.error("Error updating status:", error);
      }
    }
  };

  const updateBillboardStatus = (
    id: number,
    status: "IN_CART" | "PURCHASED" | "IDLING"
  ) => {
    setBillboards((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status } : b))
    );
  };

  return (
    <div className="overflow-y-auto overflow-x-hidden scroll-hidden
    h-[895px] laptop:h-[1045px]">
      <table className="table-auto divide-y-[20px] divide-[#D9D9D9] dark:divide-[#010714] w-[1350px] laptop:w-[1600px]">
        <thead className="text-[#464B56] dark:text-[#575C65] text-base font-normal">
          <tr>
            {navTable.map((item, index) => (
              <th key={index} className="py-[20px] px-[54px] text-left">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y-[12px] divide-[#D9D9D9] dark:divide-[#010714] text-black dark:text-white text-base font-normal whitespace-nowrap">
          {billboards.map((item, index) => {
            const isDisabled = item.status !== "IDLING";
            return (
              <tr
                key={index}
                className={
                  isDisabled
                    ? "text-[#D9D9D9] dark:text-[#666666] bg-gray-100 dark:bg-[#182236]"
                    : ""
                }
              >
                <td className="py-[20px] px-[54px] truncate max-w-[270px]">
                  {item.address}
                </td>
                <td className="py-[20px] px-[54px]">{item.region}</td>
                <td className="py-[20px] px-[54px]">{item.price}</td>
                <td className="py-[20px] px-[54px]">{item.grp}</td>
                <td className="py-[20px] px-[54px]">{item.date}</td>
                <td className="py-[20px] px-[54px]">{item.category}</td>
                <td className="py-[20px] px-[54px]">
                  <LargeShoppingBagIcon
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
