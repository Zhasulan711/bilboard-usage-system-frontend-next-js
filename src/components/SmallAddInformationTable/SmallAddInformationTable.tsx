"use client";

import { useState } from "react";
import { INFORMATION_ADD_TABLE_LIST } from "@/constants";

export default function SmallAddInformationTable() {
  //   const [isShow, setIsShow] = useState(true);

  return (
    <table className="w-full table-auto border-separate border-spacing-[15px]">
      <thead className="text-[#6F737B] text-base font-normal">
        <tr>
          <th>Address</th>
          <th>Price, tg</th>
          <th>GRP</th>
          <th>Time</th>
          <th>Place number</th>
          <th>Size, m</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody className="text-white text-lg font-normal">
        {INFORMATION_ADD_TABLE_LIST.map(
          (
            { address, price, grp, time, placeNumber, size, category },
            index
          ) => {
            return (
              <tr key={index}>
                <td>{address}</td>
                <td>{price}</td>
                <td>{grp}</td>
                <td>{time}</td>
                <td>{placeNumber}</td>
                <td>{size}</td>
                <td>{category}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
}
