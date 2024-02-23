"use client";

import { useState } from "react";
import { INFORMATION_ADD_TABLE_LIST } from "@/constants";

export default function SmallAddInformationTable() {
  //   const [isShow, setIsShow] = useState(true);
  const headerTable = [
    "Address",
    "Price",
    "GRP",
    "Time",
    "Place number",
    "Size",
    "Category",
  ];

  return (
    <div className="overflow-auto h-[300px] mt-[10px]">
      <table className="w-full table-auto divide-y-[3px] divide-[#182235]">
        <thead className="text-[#6F737B] text-base font-normal">
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
        <tbody className="text-white text-lg font-normal divide-y-[3px] divide-[#182235]">
          {INFORMATION_ADD_TABLE_LIST.map(
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
          )}
        </tbody>
      </table>
    </div>
  );
}
