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

// import { useSession } from "next-auth/react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useTransition, useState, useEffect } from "react";
import { payment } from "@/actions/payment";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  NotSuccessfulPaymentIcon,
  SuccessfulPaymentIcon,
} from "@/components/Icons";

interface Item {
  id: number;
  price: string;
  status: "IN_CART" | "PURCHASED" | "IDLING";
}

export const BillingSummary = ({ onClose }: { onClose: () => void }) => {
  const [isPending, startTransition] = useTransition();
  const user = useCurrentUser();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [processingItems, setProcessingItems] = useState<Item[]>([]);
  const methods = useForm();
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [hasVisaCards, setHasVisaCards] = useState<boolean>(true);
  const router = useRouter();

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

  const handleClickToChecks = () => {
    router.push("/checks");
  };

  const onSubmit = async () => {
    startTransition(async () => {
      try {
        const visaCardResponse = await fetch("/api/visaCards");
        const visaCards: { id: number }[] = await visaCardResponse.json();

        if (visaCards.length === 0) {
          setHasVisaCards(false);
          setError("No Visa cards available in the database.");
          setSuccess(undefined);
          return;
        }

        if (user && user.balance !== null && totalPrice > 0) {
          const newBalance = Number(user.balance) - totalPrice;
          await payment({ balance: newBalance.toString() });
          await updateItemsToPurchased();
          setSuccess("Payment successful!");
          setPaymentComplete(true);
          setError(undefined);
        } else {
          setError("Insufficient details for payment processing.");
        }
      } catch (error) {
        console.error("Failed during payment processing:", error);
        setError("An error occurred during payment.");
        setSuccess(undefined);
      }
    });
  };

  const updateItemsToPurchased = async () => {
    try {
      const response = await Promise.all(
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

      if (response.every((res) => res.ok)) {
        const orderResponse = await fetch("/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            billboards: processingItems.map((item) => item.id),
          }),
        });

        if (!orderResponse.ok) throw new Error("Failed to create order");

        setProcessingItems([]);
      }
    } catch (error) {
      console.error("Failed to update item status and create order:", error);
    }
  };

  if (paymentComplete) {
    return (
      <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center">
        <Card className="w-[592px] h-[180px] bg-white dark:bg-[#0F1623] border-transparent p-[20px] flex flex-col space-y-[8px]">
          <div className="flex flex-row space-x-[16px]">
            <SuccessfulPaymentIcon />
            <h1 className="text-black dark:text-white text-[26px]">
              Payment was successful!
            </h1>
          </div>
          <h1 className="text-neutral-600 dark:text-neutral-500 w-[543px] text-base">
            The payment was successful, you now own the billboards. <br />
            You can close this window
          </h1>
          <div className="flex flex-row space-x-[20px]">
            <Button
              onClick={handleClickToChecks}
              className="w-20 h-9 rounded-md hover:bg-amber-500"
            >
              Okay
            </Button>
            <Button
              onClick={handleClickToChecks}
              className="w-20 h-9 rounded-md hover:bg-amber-500"
            >
              Cancel
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (!hasVisaCards) {
    return (
      <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center">
        <Card className="w-[592px] h-[200px] bg-white dark:bg-[#0F1623] border-transparent p-[20px] flex flex-col space-y-[8px]">
          <div className="flex flex-row space-x-[16px]">
            <NotSuccessfulPaymentIcon />
            <h1 className="text-black dark:text-white text-[26px]">
              Payment was not successful
            </h1>
          </div>
          <h1 className="text-neutral-600 dark:text-neutral-500 w-[543px] text-base">
            Please check if you have entered your card details correctly or{" "}
            <br />
            if there is money in your card. After that, please <br />
            repeat the purchase
          </h1>
          <div className="flex flex-row space-x-[20px]">
            <Button
              onClick={onClose}
              className="w-20 h-9 rounded-md hover:bg-red-700 bg-red-500"
            >
              Okay
            </Button>
            <Button
              onClick={onClose}
              className="w-20 h-9 rounded-md hover:bg-red-700 bg-black border-red-500 border-[2px]"
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
      <Card className="w-[592px] h-[200px] bg-white dark:bg-[#0F1623] border-transparent p-[20px]">
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
