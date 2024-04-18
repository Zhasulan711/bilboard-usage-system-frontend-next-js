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

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useTransition, useState } from "react";
import { payment } from "@/actions/payment";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useForm, FormProvider } from "react-hook-form";

export const BillingSummary = () => {
  const [isPending, startTransition] = useTransition();
  const user = useCurrentUser();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [totalPrice, setTotalPrice] = useState(0);
  const { update } = useSession();

  const methods = useForm();

  useEffect(() => {
    calculateTotal();
  }, []);

  const calculateTotal = () => {
    const processingItems = JSON.parse(
      localStorage.getItem("processingItems") || "[]"
    );

    const totalItemPrice = processingItems.reduce((total: any, item: any) => {
      const price = item.price ? Number(item.price.replace(/,/g, "")) : 0;
      return total + price;
    }, 0);

    setTotalPrice(totalItemPrice);
  };

  const onSubmit = async (values: any) => {
    startTransition(async () => {
      if (user && user.balance !== null && totalPrice > 0) {
        const newBalance = Number(user.balance) - totalPrice;
        try {
          await payment({ balance: newBalance.toString() });
          update();
          setSuccess("Payment successful!");
          setError(undefined);

          const processingItems = JSON.parse(
            localStorage.getItem("processingItems") || "[]"
          );
          const purchasedItems = JSON.parse(
            localStorage.getItem("purchasedItems") || "[]"
          );
          const newPurchasedItems = purchasedItems.concat(processingItems);
          localStorage.setItem(
            "purchasedItems",
            JSON.stringify(newPurchasedItems)
          );
          localStorage.removeItem("processingItems");
        } catch (error) {
          setError("Something went wrong with the payment!");
          setSuccess(undefined);
        }
      } else {
        setError("Insufficient details for payment processing.");
      }
    });
  };

  return (
    <Card className="w-[505px] bg-white dark:bg-[#0F1623] border-transparent p-[20px]">
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
