"use client";

import { RedTrashIcon } from "@/components/Icons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BILLBOARD_TABLE_LIST } from "@/constants/billboardTableList";

export const SummaryOrder = () => {
  return (
    <Card className="w-[505px] h-[395px] bg-[#0F1623] border-transparent flex flex-col -space-y-[16px]">
      <CardHeader className="text-white text-[26px] font-medium -mt-[16px]">
        Summary order
      </CardHeader>
      <CardContent className="flex flex-col space-y-[18px] overflow-y-auto h-[320px] scroll-hidden overflow-x-hidden">
        {BILLBOARD_TABLE_LIST.map(
          (
            { address, colorClass, category, region, time, grp, price },
            index
          ) => (
            <div key={index} className="flex flex-row space-x-[16px]">
              <div
                className={`w-[90px] h-[90px] bg-color-${colorClass} rounded-[10px]`}
              >
                {/* <img src={order.image} alt="order" /> */}
              </div>
              <div className="flex flex-col">
                <h1 className="text-white text-2xl font-normal truncate max-w-[50px]">
                  {address}
                </h1>
                <div className="flex flex-row text-white text-opacity-40 text-xs font-normal space-x-[16px]">
                  <div className="flex flex-col">
                    <h1>Category:</h1>
                    <h1>Region:</h1>
                    <h1>Time:</h1>
                    <h1>GRP:</h1>
                  </div>
                  <div className="flex flex-col">
                    <h1>{category}</h1>
                    <h1>{region}</h1>
                    <h1>{time}</h1>
                    <h1>{grp}</h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-[19px] items-end w-[150px] ">
                <RedTrashIcon />
                <h1 className="text-white text-4xl font-normal">{price}</h1>
              </div>
            </div>
          )
        )}
      </CardContent>
    </Card>
  );
};
