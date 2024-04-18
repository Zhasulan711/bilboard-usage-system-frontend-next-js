"use client";

import React, { useEffect, useState } from "react";
import { PieChartComponent } from "@/components/analytics/PieChartComponent";
import { BILLBOARD_TABLE_LIST } from "@/constants/billboardTableList";
import { BillboardTableList } from "@/constants/billboardTableList";

type PieChartData = {
  name: string;
  value: number;
};

export const Diagram = () => {
  const [chartData, setChartData] = useState<PieChartData[]>([]);
  const [totalBillboards, setTotalBillboards] = useState(0);

  useEffect(() => {
    const getChartData = (): PieChartData[] => {
      const itemsStr = localStorage.getItem("purchasedItems");
      const items: BillboardTableList[] = itemsStr ? JSON.parse(itemsStr) : [];

      const countByRegion = items.reduce(
        (acc: { [key: string]: number }, item) => {
          acc[item.region] = (acc[item.region] || 0) + 1;
          return acc;
        },
        {}
      );

      const total = items.length;
      setTotalBillboards(total);

      return Object.entries(countByRegion).map(([name, value]) => ({
        name,
        value,
      }));
    };

    setChartData(getChartData());
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
    <div className="bg-white dark:bg-[#0F1623] w-[663px] h-[340px] rounded-lg pl-[26px] pt-[13px] flex flex-row -space-x-[60px]">
      {/* Diagram for each Region */}
      <div className="flex flex-col">
        <h1 className="text-black dark:text-white text-2xl font-medium">
          Diagram for each region
        </h1>
        <PieChartComponent data={chartData} />
      </div>
      <div className="flex flex-col">
        <h2 className="text-[#D9D9D9] dark:text-[#6F737B] text-xl font-normal pl-[80px]">
          All of your billboards 28
        </h2>
        {BILLBOARD_TABLE_LIST.map(
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
                    <span className="text-[#D9D9D9] dark:text-[#6F737B]">{count} billboard</span>
                  </h2>
                </div>
              </React.Fragment>
            );
          }
        )}
      </div>
    </div>
  );
};
