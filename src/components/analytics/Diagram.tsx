"use client";

import React, { useEffect, useState } from "react";
import { PieChartComponent } from "@/components/analytics/PieChartComponent";

type PieChartData = {
  name: string;
  value: number;
};

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
  colorClass: string;
}

export const Diagram = () => {
  const [chartData, setChartData] = useState<PieChartData[]>([]);
  const [totalBillboards, setTotalBillboards] = useState(0);

  useEffect(() => {
    const fetchPurchasedItems = async () => {
      try {
        const response = await fetch("/api/billboards?status=PURCHASED");
        const items: Billboard[] = await response.json();

        const countByRegion = items.reduce(
          (acc: { [key: string]: number }, item) => {
            acc[item.region] = (acc[item.region] || 0) + 1;
            return acc;
          },
          {}
        );

        const total = items.length;
        setTotalBillboards(total);

        const chartData = Object.entries(countByRegion).map(
          ([name, value]) => ({
            name,
            value,
          })
        );

        setChartData(chartData);
      } catch (error) {
        console.error("Error fetching purchased items:", error);
      }
    };

    fetchPurchasedItems();

    const intervalId = setInterval(fetchPurchasedItems, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const BILLBOARD_TABLE_LIST = chartData.map((item) => {
    const percentage = ((item.value / totalBillboards) * 100).toFixed(2);
    return {
      region: item.name,
      colorClass: `${item.name.toLowerCase()}-billboard`,
      percentage: percentage,
      count: item.value,
    };
  });

  return (
    <div
      className="bg-white dark:bg-[#0F1623] h-[340px] rounded-lg flex flex-row justify-center pt-[20px] 
    w-[663px] laptop:w-[930px] QHD:w-[1280px]
    pl-[20px] laptop:pl-[0px]
    "
    >
      {/* Diagram for each Region */}
      <div
        className="flex flex-col h-[300px]
      w-[320px] laptop:w-[400px] QHD:w-[400px]"
      >
        <h1 className="text-black dark:text-white text-2xl font-medium">
          Diagram for each region
        </h1>
        <div className="w-[350px]">
          <PieChartComponent data={chartData} />
        </div>
      </div>
      <div className="flex flex-col mt-[5px]">
        <h2 className="text-[#464B56] dark:text-[#6F737B] text-xl font-normal ">
          All of your billboards {totalBillboards}
        </h2>
        {BILLBOARD_TABLE_LIST.length === 0 ? (
          <a className="hover:text-[#FF9800] text-[20px] mt-[20px]">
            No purchased billboards. <br /> but you can buy billboards <br /> by
            clicking here.
          </a>
        ) : (
          BILLBOARD_TABLE_LIST.map(
            ({ region, colorClass, percentage, count }, index) => {
              return (
                <React.Fragment key={index}>
                  <div
                    className={`flex flex-row space-x-[7px] h-[40px] w-[320px] items-center rounded-lg pl-[10px]
                 `}
                  >
                    <div
                      className={`rounded-full w-[10px] h-[10px] bg-color-${colorClass}`}
                    ></div>
                    <h2 className="text-black dark:text-white text-xl font-normal cursor-pointer whitespace-nowrap">
                      {region}, <span>{percentage}%, </span>{" "}
                      <span className="text-[#464B56] dark:text-[#6F737B]">
                        {count} billboard
                      </span>
                    </h2>
                  </div>
                </React.Fragment>
              );
            }
          )
        )}
      </div>
    </div>
  );
};
