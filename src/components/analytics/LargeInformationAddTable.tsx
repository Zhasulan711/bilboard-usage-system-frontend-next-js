"use client";

import { useState, useEffect } from "react";
import { CalendarDaysIcon, ChevronDownAddIcon } from "@/components/Icons";
import {
  BillboardTableList,
  BILLBOARD_TABLE_LIST,
} from "@/constants/billboardTableList";

const headerTable = [
  "Address",
  "Price",
  "GRP",
  "Time",
  "Place number",
  "Size",
  "Category",
];
const navItems = [
  { name: "All", width: "53px" },
  { name: "Price", width: "75px" },
  { name: "GRP", width: "75px" },
  { name: "Time", width: "75px" },
  { name: "Place number", width: "145px" },
  { name: "Size", width: "68px" },
  { name: "Category", width: "110px" },
];

const regionToDistrict = {
  Almalinsk: "Almalinsk district",
  Auezov: "Auezov district",
  Bostandyk: "Bostandyk district",
  Medeu: "Medeu district",
  Nauryzbay: "Nauryzbay district",
  Turksib: "Turksib district",
  Zhetysu: "Zhetysu district",
  Alatau: "Alatau district",
};

export const LargeInformationAddTable = () => {
  const [purchasedItems, setPurchasedItems] = useState<BillboardTableList[]>(
    []
  );

  useEffect(() => {
    const items = localStorage.getItem("purchasedItems");
    if (items) {
      setPurchasedItems(JSON.parse(items));
    }
  }, []);

  return (
    <div className="mt-[20px]">
      <div className="bg-white dark:bg-[#0F1623] px-6 py-6 border-b-2 dark:border-[#182235] rounded-lg">
        <div className="flex flex-row space-x-[600px]">
          <h1 className="text-black dark:text-white text-[28px] font-medium ml-[10px]">
            Information about your add
          </h1>
          {/* <div className="flex flex-row space-x-[60px] mt-[10px]">
            <div className="flex flex-row space-x-[10px] items-center">
              <CalendarDaysIcon />
              <h2 className="text-white text-xl font-normal">
                01 Aug. - 01 Sep.
              </h2>
              <ChevronDownAddIcon />
            </div>
            <div className="flex flex-row space-x-[10px] items-center">
              <h2 className="text-black dark:text-white text-xl font-normal">
                Compare
              </h2>
              <ChevronDownAddIcon />
            </div>
          </div> */}
        </div>
        {Object.entries(regionToDistrict).map(([region, districtName]) => {
          const districtItems = purchasedItems.filter(
            (item) => item.region === region
          );
          return (
            <div key={region}>
              <div className="flex flex-row justify-between text-center pl-[10px] pt-[20px]">
                <h1 className="text-black dark:text-white text-2xl font-normal">
                  {districtName}
                </h1>
                {/* <div className="flex flex-row space-x-[10px]">
                  {navItems.map(({ name, width }, index) => (
                    <div
                      className="h-[40px] flex items-center justify-center bg-[#D9D9D9] dark:bg-[#0B101F] text-xl font-normal text-black dark:text-white rounded-lg"
                      style={{ width }}
                      key={index}
                    >
                      {name}
                    </div>
                  ))}
                </div> */}
              </div>
              <table className="w-full table-auto divide-y-[3px] divide-[#D9D9D9] dark:divide-[#182235] mt-[10px] border-b-2 dark:border-[#182235]">
                <thead className="text-[#D9D9D9] dark:text-[#6F737B] text-base font-normal">
                  <tr>
                    {headerTable.map((header, idx) => (
                      <th
                        key={idx}
                        scope="col"
                        className="px-[10px] py-[10px] text-left"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-black dark:text-white text-lg font-normal divide-y-[3px] divide-[#D9D9D9] dark:divide-[#182235]">
                  {districtItems.length > 0 ? (
                    districtItems.map((item, index) => (
                      <tr key={index}>
                        <td className="px-[10px] py-[10px]">{item.address}</td>
                        <td className="px-[10px] py-[10px]">{item.price}</td>
                        <td className="px-[10px] py-[10px]">{item.grp}</td>
                        <td className="px-[10px] py-[10px]">{item.time}</td>
                        <td className="px-[10px] py-[10px]">
                          {item.placeNumber}
                        </td>
                        <td className="px-[10px] py-[10px]">{item.size}</td>
                        <td className="px-[10px] py-[10px]">{item.category}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="text-center py-[10px]">
                        No purchased items for {districtName}.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};
