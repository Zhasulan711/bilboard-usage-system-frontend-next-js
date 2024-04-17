"use client";

import { useEffect, useState } from "react";

import { BILLBOARD_TABLE_LIST } from "@/constants/billboardTableList";
// import { LargeShoppingBagIcon } from "@/components/Icons";
import { BillboardTableList } from "@/constants/billboardTableList";

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
  const [processedIndex, setProcessedIndex] = useState<string[]>([]);
  const [purchasedIndex, setPurchasedItems] = useState<string[]>([]);

  useEffect(() => {
    const items = JSON.parse(
      localStorage.getItem("processingItems") || "[]"
    ) as BillboardTableList[];
    const purchasedItems = JSON.parse(
      localStorage.getItem("purchasedItems") || "[]"
    ) as BillboardTableList[];

    setProcessedIndex(items.map((item) => item.id));
    setPurchasedItems(purchasedItems.map((item) => item.id));
  }, []);

  const handleBuy = (item: BillboardTableList): void => {
    const itemId = item.id.toString();

    if (
      !processedIndex.includes(itemId) &&
      !purchasedIndex.includes(itemId)
    ) {
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
    <div className="h-[895px] overflow-y-auto overflow-x-hidden scroll-hidden">
      <table className="table-auto divide-y-[20px] divide-[#D9D9D9] dark:divide-[#010714]">
        <thead className="text-[#D9D9D9] dark:text-[#575C65] text-base font-normal">
          <tr>
            {navTable.map((item, index) => (
              <th key={index} className="py-[20px] px-[26px] text-left">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y-[12px] divide-[#D9D9D9] dark:divide-[#010714] text-black dark:text-white text-base font-normal whitespace-nowrap">
          {BILLBOARD_TABLE_LIST.map((item, index) => (
            <tr key={index}>
              <td className="py-[20px] px-[26px] truncate max-w-[270px]">{item.address}</td>
              <td className="py-[20px] px-[26px]">{item.region}</td>
              <td className="py-[20px] px-[26px]">{item.price}</td>
              <td className="py-[20px] px-[26px]">{item.grp}</td>
              <td className="py-[20px] px-[26px]">{item.date}</td>
              <td className="py-[20px] px-[26px]">{item.category}</td>
              <td className="py-[20px] px-[26px]">
                <button
                  className="text-black dark:text-white"
                  onClick={() => handleBuy(item)}
                  disabled={processedIndex.includes(item.id.toString()) || purchasedIndex.includes(item.id.toString())}
                >
                  {" "}
                  Buy
                </button>
                {/* <LargeShoppingBagIcon /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
