"use client";

import React, { useEffect, useState, useTransition } from "react";

// import { RedTrashIcon } from "@/components/Icons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BillboardTableList } from "@/constants/billboardTableList";

export const SummaryOrder = () => {
  const [processingItems, setProcessingItems] = useState<BillboardTableList[]>(
    []
  );
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const loadedItems: BillboardTableList[] = JSON.parse(
      localStorage.getItem("processingItems") || "[]"
    );
    setProcessingItems(loadedItems);
  }, []);

  const handleRemove = (index: number) => {
    startTransition(() => {
      const itemToRemove = processingItems[index];
      const updatedItems = processingItems.filter((_, i) => i !== index);
      setProcessingItems(updatedItems);
      localStorage.setItem("processingItems", JSON.stringify(updatedItems));
      const canceledItems = JSON.parse(
        localStorage.getItem("canceledItems") || "[]"
      );

      const newCanceledItems = [...canceledItems, itemToRemove];
      localStorage.setItem("canceledItems", JSON.stringify(newCanceledItems));
    });
  };

  return (
    <Card className="w-[505px] h-[395px] bg-[#0F1623] border-transparent flex flex-col -space-y-[16px]">
      <CardHeader className="text-white text-[26px] font-medium -mt-[16px]">
        Summary order
      </CardHeader>
      <CardContent className="flex flex-col space-y-[18px] overflow-y-auto h-[320px] scroll-hidden overflow-x-hidden">
        {processingItems.map((item, index) => (
          <div key={index} className="flex flex-row -space-x-[16px]">
            <div className="w-[500px] flex flex-row space-x-[16px]">
              <div
                className={`w-[90px] h-[90px] bg-color-${item.colorClass} rounded-[10px]`}
              >
                {/* <img src={order.image} alt="order" /> */}
              </div>
              <div className="flex flex-col">
                <h1 className="text-white text-2xl font-normal truncate w-[230px]">
                  {item.address}
                </h1>
                <div className="flex flex-row text-white text-opacity-40 text-xs font-normal space-x-[16px]">
                  <div className="flex flex-col">
                    <h1>Category:</h1>
                    <h1>Region:</h1>
                    <h1>Time:</h1>
                    <h1>GRP:</h1>
                  </div>
                  <div className="flex flex-col">
                    <h1>{item.category}</h1>
                    <h1>{item.region}</h1>
                    <h1>{item.time}</h1>
                    <h1>{item.grp}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-[19px] items-end w-[150px] ">
              <button
                className="text-red-500"
                onClick={() => handleRemove(index)}
                disabled={isPending}
              >
                Remove
              </button>
              {/* <RedTrashIcon /> */}
              <h1 className="text-white text-4xl font-normal">{item.price}</h1>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
