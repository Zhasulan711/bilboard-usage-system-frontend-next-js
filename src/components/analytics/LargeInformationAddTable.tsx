"use client";

import { useState, useEffect } from "react";

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

const headerTable = [
  "Address",
  "Price",
  "GRP",
  "Time",
  "Place number",
  "Size",
  "Category",
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
  const [purchasedItems, setPurchasedItems] = useState<Billboard[]>([]);

  useEffect(() => {
    const fetchPurchasedItems = async () => {
      try {
        const response = await fetch("/api/billboards?status=PURCHASED");
        const data: Billboard[] = await response.json();
        setPurchasedItems(data);
      } catch (error) {
        console.error("Error fetching purchased items:", error);
      }
    };

    fetchPurchasedItems();
  }, []);

  return (
    <div
      className="bg-white dark:bg-[#0F1623] px-6 py-6 border-b-2 dark:border-[#182235] rounded-lg overflow-y-auto scroll-hidden 
    max-h-[600px] laptop:max-h-[780px] QHD:max-h-[970px]
    w-[1346px] laptop:w-[1600px] QHD:w-[1962px]"
    >
      <div className="flex flex-row space-x-[600px]">
        <h1 className="text-black dark:text-white text-[28px] font-medium ml-[10px]">
          Information about your add
        </h1>
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
            </div>
            <table className="w-full table-auto divide-y-[3px] divide-[#D9D9D9] dark:divide-[#182235] mt-[10px] border-b-2 dark:border-[#182235]">
              <thead className="text-[#464B56] dark:text-[#6F737B] text-base font-normal">
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
                      <a href="/post-add" className="hover:text-[#FF9800]">
                        There are no billboards for {districtName}, but you can
                        buy those billboards by clicking here
                      </a>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};
