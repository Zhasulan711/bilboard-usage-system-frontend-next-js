"use client";

import React, { useEffect, useState, useTransition } from "react";

import { RedTrashIcon } from "@/components/Icons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CompassIcon } from "@/components/Icons";

enum STATUS {
  PURCHASED = "PURCHASED",
  IN_CART = "IN_CART",
  IDLING = "IDLING",
}

interface Billboard {
  id: number;
  address: string;
  region: string;
  price: string;
  grp: string;
  date: string;
  category: string;
  status: STATUS;
  colorClass: string;
  time: string;
}

export const SummaryOrder = () => {
  const [processingItems, setProcessingItems] = useState<Billboard[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    fetchProcessingItems();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchProcessingItems();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchProcessingItems = async () => {
    try {
      const response = await fetch("/api/billboards?status=IN_CART");
      const data: Billboard[] = await response.json();
      setProcessingItems(data.filter((item) => item.status === STATUS.IN_CART));
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleRemove = (item: Billboard) => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/billboards", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: item.id,
            status: STATUS.IDLING,
            changed: true,
          }),
        });

        if (response.ok) {
          const updatedItems = processingItems.filter(
            (it) => it.id !== item.id
          );
          setProcessingItems(updatedItems);
        } else {
          throw new Error("Failed to update the billboard status.");
        }
      } catch (error) {
        console.error("Error removing item:", error);
      }
    });
  };

  return (
    <Card className="w-[505px] h-[395px] bg-white dark:bg-[#0F1623] border-transparent flex flex-col -space-y-[16px]">
      <CardHeader className="text-black dark:text-white text-[26px] font-medium -mt-[16px]">
        Summary order
      </CardHeader>
      <CardContent className="flex flex-col space-y-[18px] overflow-y-auto h-[320px] scroll-hidden overflow-x-hidden">
        {processingItems.length > 0 ? (
          processingItems.map((item: any, index) => (
            <div
              key={index}
              className="flex flex-row -space-x-[16px] items-center"
            >
              <div className="w-[500px] flex flex-row space-x-[16px] items-center">
                <div
                  className={`w-[90px] h-[90px] bg-color-${item.colorClass} rounded-[10px] justify-center flex items-center`}
                >
                  <CompassIcon />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-black dark:text-white text-2xl font-normal truncate w-[230px]">
                    {item.address}
                  </h1>
                  <div className="flex flex-row text-black dark:text-white text-opacity-40 text-xs font-normal space-x-[16px]">
                    <div className="flex flex-col text-[#D9D9D9] dark:text-[#575C65]">
                      <h1>Category:</h1>
                      <h1>Region:</h1>
                      <h1>Time:</h1>
                      <h1>GRP:</h1>
                    </div>
                    <div className="flex flex-col text-[#D9D9D9] dark:text-[#575C65]">
                      <h1>{item.category}</h1>
                      <h1>{item.region}</h1>
                      <h1>{item.time}</h1>
                      <h1>{item.grp}</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-[19px] items-end w-[150px]">
                <RedTrashIcon onClick={() => handleRemove(item)} />
                {/* <button
                  className="text-red-500"
                  onClick={() => handleRemove(item)}
                  disabled={isPending}
                >
                  Remove
                </button> */}
                <h1 className="text-black dark:text-white text-4xl font-normal">
                  {item.price}
                </h1>
              </div>
            </div>
          ))
        ) : (
          <a
            href="/post-add"
            className="text-center text-black dark:text-white text-xl font-medium mt-[40px] hover:text-[#FF9800]"
          >
            You have nothing in orders, <br /> but you can buy choose billboards
            by clicking here.
          </a>
        )}
      </CardContent>
    </Card>
  );
};
