"use client";

import React, { useMemo, useEffect, useState } from "react";

import { CompassIcon, SmallShoppingBagIcon } from "@/components/Icons";
import { BILLBOARD_TABLE_LIST } from "@/constants/billboardTableList";
import { BillboardTableList } from "@/constants/billboardTableList";

export const Recommendation = () => {
  const [processedIndex, setProcessedIndex] = useState<string[]>([]);

  useEffect(() => {
    const items = JSON.parse(
      localStorage.getItem("processingItems") || "[]"
    ) as BillboardTableList[];

    setProcessedIndex(items.map((item) => item.id));
  }, []);

  const handleBuy = (item: BillboardTableList): void => {
    const itemId = item.id.toString();

    if (!processedIndex.includes(itemId)) {
      const currentProcessingItems = JSON.parse(
        localStorage.getItem("processingItems") || "[]"
      ) as BillboardTableList[];

      currentProcessingItems.push(item);

      localStorage.setItem(
        "processingItems",
        JSON.stringify(currentProcessingItems)
      );
      setProcessedIndex((prev) => [...prev, itemId]); // Update the purchasedIds state
    }
  };

  const purchasedItems = useMemo(() => {
    const items = localStorage.getItem("purchasedItems");
    return items ? JSON.parse(items) : [];
  }, []);

  const purchasedIds = useMemo(() => {
    return purchasedItems.map((item: { id: string }) => item.id);
  }, [purchasedItems]);

  const availableBillboards = useMemo(() => {
    return BILLBOARD_TABLE_LIST.filter(
      (billboard) => !purchasedIds.includes(billboard.id)
    ).reverse();
  }, [purchasedIds]);
  
  return (
    <div className="bg-[#0F1623] w-[322px] h-[501px] rounded-lg pl-[26px] pt-[16px] flex flex-col space-y-[3px] mb-[20px]">
      <h1 className="text-white text-2xl font-medium">Recommendation</h1>
      <div className="h-[425px] overflow-y-auto overflow-x-hidden scroll-hidden flex flex-col space-y-[12px]">
        {availableBillboards.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[270px] h-[32px] flex flex-row items-center space-x-[80px]"
            >
              <div className="flex flex-row space-x-[10px] items-center w-[160px]">
                <div
                  className={`bg-color-${item.colorClass} rounded-[5px] w-[32px] h-[32px] justify-center flex items-center`}
                >
                  <CompassIcon />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-white text-[12px] font-normal whitespace-nowrap truncate max-w-[100px]">
                    {item.address}
                  </h2>
                  <h3 className="text-[#3C424C] text-[11px] font-normal">
                    {item.id}
                  </h3>
                </div>
              </div>
              <button
                className="text-white"
                onClick={() => handleBuy(item)}
                disabled={processedIndex.includes(item.id.toString())}
              >
                {" "}
                Buy
              </button>
              {/* <SmallShoppingBagIcon /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
