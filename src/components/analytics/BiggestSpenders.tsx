"use client";

import { TengeSmallCurrencyIcon } from "@/components/Icons";
import React, { useEffect, useState } from "react";

enum STATUS {
  IDLING = "IDLING",
  IN_CART = "IN_CART",
  PURCHASED = "PURCHASED",
}

type RegionMaxPrice = {
  region: string;
  maxPrice: number;
};

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
  colorClass: string;
}

const SpenderItem = ({ region, maxPrice }: RegionMaxPrice) => (
  <div className="flex flex-row space-x-[155px]">
    <div className="w-[50px]">
      <h3 className="text-xl font-normal text-[#D9D9D9] dark:text-[#575C65]">
        {region}
      </h3>
    </div>
    <h3 className="text-black dark:text-white text-base font-normal">
      {maxPrice.toLocaleString()}
    </h3>
  </div>
);

export const BiggestSpenders = () => {
  const [maxPrices, setMaxPrices] = useState<RegionMaxPrice[]>([]);

  useEffect(() => {
    const fetchPurchasedItems = async () => {
      try {
        const response = await fetch("/api/billboards?status=PURCHASED");
        const billboardData: Billboard[] = await response.json();

        // Find the highest price in each region
        const regionMaxPrices: RegionMaxPrice[] = billboardData.reduce(
          (acc, item) => {
            const price = parseFloat(item.price.replace(/,/g, ""));
            const existing = acc.find((x) => x.region === item.region);
            if (!existing || price > existing.maxPrice) {
              return [
                ...acc.filter((x) => x.region !== item.region),
                { region: item.region, maxPrice: price },
              ];
            }
            return acc;
          },
          [] as RegionMaxPrice[]
        );

        // Sort by maxPrice and pick top 3
        const topRegions = regionMaxPrices
          .sort((a, b) => b.maxPrice - a.maxPrice)
          .slice(0, 3);

        setMaxPrices(topRegions);
      } catch (error) {
        console.error("Error fetching purchased items:", error);
      }
    };

    fetchPurchasedItems();
  }, []);

  return (
    <div className="bg-white dark:bg-[#0F1623] w-[321px] h-[160px] rounded-lg flex flex-col pl-[26px] pt-[16px]">
      <div className="flex flex-row items-center">
        <h1 className="text-black dark:text-white text-2xl font-normal">
          Biggest spenders,
        </h1>
        <TengeSmallCurrencyIcon />
      </div>
      {maxPrices.map((spender, index) => (
        <SpenderItem key={index} {...spender} />
      ))}
    </div>
  );
};