"use client";

import { Card } from "../ui/card";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { useSession } from "next-auth/react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useTransition, useState, useEffect } from "react";
import { payment } from "@/actions/payment";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useForm, FormProvider } from "react-hook-form";

interface Item {
  id: number;
  price: string;
  status: 'IN_CART' | 'PURCHASED' | 'IDLING'; 
}

export const BillingSummary = () => {
  const [isPending, startTransition] = useTransition();
  const user = useCurrentUser();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [processingItems, setProcessingItems] = useState<Item[]>([]);
  const methods = useForm();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/api/billboards?status=IN_CART');
        const data: Item[] = await response.json();
        const filteredData = data.filter(item => item.status === 'IN_CART'); // Additional client-side filtering
        setProcessingItems(filteredData);
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
    const total = items.reduce((acc, item) => acc + Number(item.price.replace(/,/g, "")), 0);
    setTotalPrice(total);
  };


  const onSubmit = async (values: any) => {
    startTransition(async () => {
      if (user && user.balance !== null && totalPrice > 0) {
        const newBalance = Number(user.balance) - totalPrice;
        try {
          await payment({ balance: newBalance.toString() });
          await updateItemsToPurchased();
          setSuccess("Payment successful!");
          setError(undefined);
        } catch (error) {
          setError("Something went wrong with the payment!");
          setSuccess(undefined);
        }
      } else {
        setError("Insufficient details for payment processing.");
      }
    });
  };

  const updateItemsToPurchased = async () => {
    try {
      await Promise.all(
        processingItems.map((item) =>
          fetch("/api/billboards", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: item.id, status: "PURCHASED", changed: false }),
          })
        )
      );
      setProcessingItems([]);
    } catch (error) {
      console.error("Failed to update item status:", error);
    }
  };

  return (
    <Card className="w-[821px] bg-white dark:bg-[#0F1623] border-transparent p-[20px]">
      <FormProvider {...methods}>
        <form className="space-y-6" onSubmit={methods.handleSubmit(onSubmit)}>
          <FormField
            name="billboard"
            render={() => (
              <FormItem>
                <FormLabel className="text-black dark:text-white text-[26px]">
                  Billing Summary
                </FormLabel>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row space-x-[100px]">
            <h1 className="text-black dark:text-white text-xl">Grand total:</h1>
            <h1 className="text-black dark:text-white text-xl">
              {totalPrice.toLocaleString()}
            </h1>
          </div>

          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            type="submit"
            disabled={isPending || totalPrice === 0}
            className="w-[469px] h-11 px-[18px] py-2.5 rounded-md hover:bg-amber-500"
          >
            Pay order
          </Button>
        </form>
      </FormProvider>
    </Card>
  );
};
