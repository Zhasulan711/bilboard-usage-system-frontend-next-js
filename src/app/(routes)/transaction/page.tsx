"use client";

import React, { useEffect, useState } from "react";

import { SearchIcon } from "@/components/Icons";
import { BillboardTableList } from "@/constants/billboardTableList";

const navItems = [
  { name: "All", width: "53px" },
  { name: "Region", width: "91px" },
  { name: "Price", width: "75px" },
  { name: "Size", width: "68px" },
  { name: "Category", width: "110px" },
  { name: "Date", width: "72px" },
  { name: "Status", width: "86px" },
];

const navTable = [
  "Address",
  "Region",
  "Price, tg",
  "Place number",
  "Category",
  "Date",
  "Status",
];

export default function TransactionPage() {
  const [processingItems, setProcessingItems] = useState<BillboardTableList[]>(
    []
  );
  const [purchasedItems, setPurchasedItems] = useState<BillboardTableList[]>(
    []
  );
  const [canceledItems, setCanceledItems] = useState<BillboardTableList[]>([]);

  useEffect(() => {
    setProcessingItems(
      JSON.parse(localStorage.getItem("processingItems") || "[]")
    );
    setPurchasedItems(
      JSON.parse(localStorage.getItem("purchasedItems") || "[]")
    );
    setCanceledItems(JSON.parse(localStorage.getItem("canceledItems") || "[]"));
  }, []);

  function TableRow({
    item,
    statusColor,
    statusWord,
  }: {
    item: BillboardTableList;
    statusColor: string;
    statusWord: string;
  }) {
    return (
      <tr>
        <td className="px-6 py-4 truncate">{item.address}</td>
        <td className="px-6 py-4">{item.region}</td>
        <td className="px-6 py-4">{item.price}</td>
        <td className="px-6 py-4">{item.placeNumber}</td>
        <td className="px-6 py-4">{item.category}</td>
        <td className="px-6 py-4">{item.date}</td>
        <td className={`px-6 py-4 ${statusColor}`}>{statusWord}</td>
      </tr>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row space-x-[275px]">
        <div className="bg-[#0F1623] rounded-lg h-[40px] w-[451px] flex flex-row items-center pl-[20px] space-x-[20px]">
          <SearchIcon />
          <h2 className="text-[#575C65] text-xl font-normal">Search</h2>
        </div>

        {/* navbars */}
        <div className="flex flex-row space-x-[10px]">
          {navItems.map(({ name, width }, index) => (
            <div
              className="h-[40px] flex items-center justify-center bg-[#0B101F] text-xl font-normal text-white rounded-lg"
              style={{ width: width }}
              key={index}
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* table */}
      <div className="overflow-y-auto scroll-hidden max-h-[930px] border rounded-lg mt-[16px] border-transparent">
        <table className="table-fixed divide-y-[32px] divide-[#010714] w-[1346px]">
          <thead className="text-[#B7B9BE] font-normal bg-[#0F1623]">
            <tr>
              {navTable.map((item, index) => (
                <th
                  scope="col"
                  className="px-[26px] py-[18px] pb-[30px] text-left"
                  key={index}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-white text-lg font-normal bg-[#0F1623] divide-y-[16px] divide-[#010714]">
            {canceledItems.map((item, index) => (
              <TableRow
                key={index}
                item={item}
                statusColor="text-red-400"
                statusWord="Canceled"
              />
            ))}
            {purchasedItems.map((item, index) => (
              <TableRow
                key={index}
                item={item}
                statusColor="text-green-400"
                statusWord="Success"
              />
            ))}
            {processingItems.map((item, index) => (
              <TableRow
                key={index}
                item={item}
                statusColor="text-orange-400"
                statusWord="Process"
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
