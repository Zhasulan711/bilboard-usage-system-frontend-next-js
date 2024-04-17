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

  return (
    <Card className="w-[821px] h-[480px] bg-white dark:bg-[#0F1623] border-transparent -space-y-[16px]">
      <CardHeader className="text-white text-[26px] font-medium -mt-[16px]">
        Payment method
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-row space-x-[37.5px] items-center w-[769px] h-[72px] bg-[#D9D9D9] dark:bg-[#141D2F] rounded-md pl-[34.5px]">
              <div className="h-3.5 w-3.5 rounded-full bg-black dark:bg-white bg-opacity-30" />
              <h1 className="text-black dark:text-white text-xl font-normal">
                Paypal
              </h1>
              <p className="text-black dark:text-white text-opacity-30 text-base">
                You will be redirected to thr PayPal website after submitting
                your order
              </p>
            </div>

            <div className="w-[769px] h-[310px] px-[24px] bg-[#D9D9D9] dark:bg-[#141D2F] pt-[10px] rounded-md">
              <div className="flex flex-row space-x-[150px] ml-[80px]">
                <div className="flex flex-row space-x-[20px] items-center">
                  <div className="h-3.5 w-3.5 rounded-full bg-black dark:bg-white bg-opacity-30" />
                  <h1 className="text-black dark:text-white text-xl font-normal">
                    Pay with Credit Card
                  </h1>
                </div>
                <div className="flex flex-row space-x-[10px]">
                  <div className="w-16 h-11 rounded-md border border-white" />
                  <div className="w-16 h-11 rounded-md border border-white" />
                  <div className="w-16 h-11 rounded-md border border-white" />
                  <div className="w-16 h-11 rounded-md border border-white" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-[30px] pt-[10px]">
                <FormItem>
                  <FormLabel className="text-black dark:text-white text-base font-normal">
                    Card number
                  </FormLabel>

                  <FormControl>
                    <Input
                      placeholder="435353563"
                      type="text"
                      className="text-black dark:text-white"
                      disabled={isPending}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>

                <FormItem>
                  <FormLabel className="text-black dark:text-white text-base font-normal">
                    Expiration Date
                  </FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Enter your Date"
                      type="text"
                      className="text-black dark:text-white"
                      disabled={isPending}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>

                <FormItem>
                  <FormLabel className="text-black dark:text-white text-base font-normal">
                    Card Security Code
                  </FormLabel>

                  <FormControl>
                    <Input
                      placeholder="000"
                      type="text"
                      className="text-black dark:text-white"
                      disabled={isPending}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>

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
                          className="text-black dark:text-white"
                          disabled={isPending}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormError message={error} />
                <FormSuccess message={success} />
                <Button
                  type="submit"
                  disabled={isPending}
                  className="hover:bg-amber-500"
                >
                  Deposit
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
