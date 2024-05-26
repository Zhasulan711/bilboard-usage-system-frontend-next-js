"use client";

import { Card } from "../ui/card";
import { Button } from "@/components/ui/button";

import { useTransition, useState, useEffect } from "react";

interface Item {
  id: number;
  price: string;
  status: "IN_CART" | "PURCHASED" | "IDLING";
}

export const ContinueOrder = ({ onContinue }: any) => {
  const [isPending, startTransition] = useTransition();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/billboards?status=IN_CART");
        const data: Item[] = await response.json();
        const filteredData = data.filter((item) => item.status === "IN_CART"); // Additional client-side filtering
        calculateTotal(filteredData);
      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    };

    fetchItems();
    const intervalId = setInterval(fetchItems, 1000); // Poll every 10 seconds
    return () => clearInterval(intervalId);
  }, []);

  const calculateTotal = (items: Item[]) => {
    const total = items.reduce(
      (acc, item) => acc + Number(item.price.replace(/,/g, "")),
      0
    );
    setTotalPrice(total);
  };

  return (
    <Card className="w-[505px] bg-white dark:bg-[#0F1623] border-transparent p-[20px]">
      <h1 className="text-black dark:text-white text-[26px]">
        Billing Summary
      </h1>
      <div className="flex flex-row space-x-[100px] mt-[16px]">
        <h1 className="text-black dark:text-white text-xl">Grand total:</h1>
        <h1 className="text-black dark:text-white text-xl">
          {totalPrice.toLocaleString()}
        </h1>
      </div>
      <Button
        onClick={onContinue}
        disabled={isPending || totalPrice === 0}
        className="w-full h-11 px-[18px] py-2.5 rounded-md hover:bg-amber-500 mt-[16px]"
      >
        Continue order
      </Button>
    </Card>
  );
};
