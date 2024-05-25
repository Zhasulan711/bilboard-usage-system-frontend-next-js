"use client";

import { useState, useEffect } from "react";
// import { BillboardTableList } from "@/constants/billboardTableList";

const headerTable = [
  "Address",
  "Price",
  "GRP",
  "Time",
  "Place number",
  "Size",
  "Category",
];

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
}

export const SmallAddInformationTable = () => {
  const [purchasedItems, setPurchasedItems] = useState<Billboard[]>([]);

  useEffect(() => {
    const fetchPurchasedItems = async () => {
      try {
        const response = await fetch('/api/billboards?status=PURCHASED');
        const data: Billboard[] = await response.json();
        setPurchasedItems(data.filter(item => item.status === STATUS.PURCHASED));
      } catch (error) {
        console.error("Error fetching purchased items:", error);
      }
    };

    fetchPurchasedItems();
  }, []);

  return (
    <div className="overflow-y-auto h-[300px] mt-[10px] scroll-hidden">
      <table className="w-full table-auto divide-y-[3px] divide-[#D9D9D9] dark:divide-[#182235]">
        <thead className="text-[#D9D9D9] dark:text-[#6F737B] text-base font-normal">
          <tr>
            {headerTable.map((item, index) => (
              <th
                key={index}
                scope="col"
                className="px-[10px] py-[10px] text-left"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-black dark:text-white text-lg font-normal divide-y-[3px] divide-[#D9D9D9] dark:divide-[#182235]">
          {purchasedItems.length > 0 ? (
            purchasedItems.map(
              (
                { address, price, grp, time, placeNumber, size, category },
                index
              ) => {
                return (
                  <tr key={index}>
                    <td className="px-[10px] py-[10px]">{address}</td>
                    <td className="px-[10px] py-[10px]">{price}</td>
                    <td className="px-[10px] py-[10px]">{grp}</td>
                    <td className="px-[10px] py-[10px]">{time}</td>
                    <td className="px-[10px] py-[10px]">{placeNumber}</td>
                    <td className="px-[10px] py-[10px]">{size}</td>
                    <td className="px-[10px] py-[10px]">{category}</td>
                  </tr>
                );
              }
            )
          ) : (
            <tr>
              <td colSpan={7} className="text-center py-[10px]">
                No purchased billboards. Buy some billboards to fill this table.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
