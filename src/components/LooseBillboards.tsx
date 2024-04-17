"use client";

import React, { useEffect, useState } from "react";

import { CompassIcon, SmallShoppingBagIcon } from "@/components/Icons";
import { BILLBOARD_TABLE_LIST } from "@/constants/billboardTableList";
import { BillboardTableList } from "@/constants/billboardTableList";

export const LooseBillboards = () => {
  const [processedIndex, setProcessedIndex] = useState<string[]>([]);
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [purchasedIds, setPurchasedIds] = useState<string[]>([]);
  const [availableBillboards, setAvailableBillboards] = useState<
    BillboardTableList[]
  >([]);

  useEffect(() => {
    const items = JSON.parse(
      localStorage.getItem("processingItems") || "[]"
    ) as BillboardTableList[];

    setProcessedIndex(items.map((item) => item.id));
  }, []);

  useEffect(() => {
    const items = localStorage.getItem("purchasedItems");
    setPurchasedItems(items ? JSON.parse(items) : []);
  }, []);

  useEffect(() => {
    setPurchasedIds(purchasedItems.map((item: { id: string }) => item.id));
  }, [purchasedItems]);

  useEffect(() => {
    setAvailableBillboards(
      BILLBOARD_TABLE_LIST.filter(
        (billboard) => !purchasedIds.includes(billboard.id)
      )
    );
  }, [purchasedIds]);

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

  return (
    <div className="bg-white dark:bg-[#0F1623] ml-[20px] w-[322px] h-[420px] rounded-lg pl-[26px] pt-[12px]">
      <h1 className="text-black dark:text-white text-[28px] font-medium">
        Loose billboards
      </h1>
      <div className="flex flex-col pt-[20px] space-y-[10px] h-[360px] overflow-y-auto scroll-hidden">
        {/* add DRY */}
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
                  <h2 className="text-black dark:text-white text-[12px] font-normal whitespace-nowrap truncate max-w-[100px]">
                    {item.address}
                  </h2>
                  <h3 className="text-[#D9D9D9] dark:text-[#3C424C] text-[11px] font-normal">
                    {item.id}
                  </h3>
                </div>
              </div>
              <button
                className="text-black dark:text-white"
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
