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
  status: "IN_CART" | "PURCHASED" | "IDLING";
}

export const BillingSummary = ({ onClose }: { onClose: () => void }) => {
  const [isPending, startTransition] = useTransition();
  // const [showModal, setShowModal] = useState(true);
  const user = useCurrentUser();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [processingItems, setProcessingItems] = useState<Item[]>([]);
  const methods = useForm();
  const [paymentComplete, setPaymentComplete] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/billboards?status=IN_CART");
        const data: Item[] = await response.json();
        const filteredData = data.filter((item) => item.status === "IN_CART"); // Additional client-side filtering
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
    const total = items.reduce(
      (acc, item) => acc + Number(item.price.replace(/,/g, "")),
      0
    );
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
          setPaymentComplete(true);
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
            body: JSON.stringify({
              id: item.id,
              status: "PURCHASED",
              changed: false,
            }),
          })
        )
      );
      setProcessingItems([]);
    } catch (error) {
      console.error("Failed to update item status:", error);
    }
  };

  if (paymentComplete) {
    return (
      <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center">
        <Card className="w-[592px] h-[224px] bg-white dark:bg-[#0F1623] border-transparent p-[20px] flex flex-col space-y-[8px]">
          <h1 className="text-black dark:text-white text-[26px]">
            Payment was successful!
          </h1>
          <h1 className="text-neutral-600 dark:text-neutral-500 w-[543px] text-base">
            The payment was successful, you now own the billboards. <br />
            You can close this window
          </h1>
          <div className="flex flex-row space-x-[20px]">
            <Button
              onClick={onClose}
              className="w-20 h-9 rounded-md hover:bg-amber-500"
            >
              Okay
            </Button>
            <Button
              onClick={onClose}
              className="w-20 h-9 rounded-md hover:bg-amber-500"
            >
              Cancel
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center">
      <Card className="w-[592px] h-[224px] bg-white dark:bg-[#0F1623] border-transparent p-[20px]">
        <FormProvider {...methods}>
          <form
            className="space-y-[8px]"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <FormField
              name="billboard"
              render={() => (
                <FormItem>
                  <FormLabel className="text-black dark:text-white text-[26px]">
                    Are you sure you want to buy the billboards?
                  </FormLabel>

                  <FormMessage />
                </FormItem>
              )}
            />

            <h1 className="text-neutral-600 dark:text-neutral-500  w-[543px] text-base">
              If you are sure you want to buy a billboard, click confirm. Your
              card will be charged upon confirmation. If you want to get it
              back,
              <br /> only through support
            </h1>

            <FormError message={error} />
            <FormSuccess message={success} />
            <div className="flex flex-row space-x-[20px]">
              <Button
                type="submit"
                disabled={isPending || totalPrice === 0}
                className="w-20 h-9 rounded-md hover:bg-amber-500"
              >
                Confirm
              </Button>
              <Button
                onClick={onClose}
                className="w-20 h-9 rounded-md hover:bg-amber-500"
              >
                Cancel
              </Button>
            </div>
          </form>
        </FormProvider>
      </Card>
    </div>
  );
};
