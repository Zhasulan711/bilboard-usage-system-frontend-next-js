"use client";

import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useCurrentUser } from "@/hooks/use-current-user";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentSchema } from "@/schemas";
import { z } from "zod";
import { useTransition, useState, useEffect } from "react";
import { payment } from "@/actions/payment";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const PaymentMethod = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPending, startTransition] = useTransition();
  const user = useCurrentUser();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const { update } = useSession();
  const form = useForm<z.infer<typeof PaymentSchema>>({
    resolver: zodResolver(PaymentSchema),
    defaultValues: {
      balance: "0",
    },
  });

  useEffect(() => {
    const cardData = localStorage.getItem("cardVisa");
    if (cardData) {
      const cards = JSON.parse(cardData);
      setIsVisible(Array.isArray(cards) && cards.length > 0);
    }
  }, []);

  const onSubmit = async (values: z.infer<typeof PaymentSchema>) => {
    startTransition(async () => {
      const amountToAdd = Number(values.balance);
      if (isNaN(amountToAdd) || amountToAdd <= 0) {
        setError("Please enter a valid numeric amount to add.");
        return;
      }

      if (user && user.balance !== null) {
        const newBalance = Number(user.balance) + amountToAdd;
        try {
          await payment({ balance: newBalance.toString() });
          update();
          setSuccess("Balance updated successfully!");

          const transactionHistory: number[] = JSON.parse(
            localStorage.getItem("transactionHistory") || "[]"
          );
          transactionHistory.push(amountToAdd);
          localStorage.setItem(
            "transactionHistory",
            JSON.stringify(transactionHistory)
          );
        } catch (error) {
          setError("Something went wrong with the payment!");
        }
      } else {
        setError("Insufficient details for payment processing.");
      }
    });
  };

  return isVisible ? (
    <Card className="w-[821px] bg-white dark:bg-[#0F1623] border-transparent -space-y-[16px]">
      <CardHeader className="text-black dark:text-white text-[26px] font-medium -mt-[16px]">
        Add balance
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-[30px] pt-[10px]">
              <FormField
                control={form.control}
                name="balance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black dark:text-white text-base font-normal">
                      Adding Balance
                    </FormLabel>

                    <FormControl>
                      <Input
                        {...field}
                        placeholder="1111"
                        type="text"
                        className="text-black dark:text-white w-[200px]"
                        disabled={isPending}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isPending}
                className="hover:bg-amber-500 w-[100px] dark:text-black text-white col-start-1 col-end-3"
              >
                Deposit
              </Button>
              <FormError message={error} />
              <FormSuccess message={success} />
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  ) : null;
};
