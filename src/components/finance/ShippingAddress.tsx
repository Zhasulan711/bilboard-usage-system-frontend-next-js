"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useTransition, useState } from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShippingAddressSchema } from "@/schemas";
import { z } from "zod";

export const ShippingAddress = () => {
  const [isPending, startTransition] = useTransition();
  const [showCard, setShowCard] = useState(() => {
    const cardData = localStorage.getItem("cardVisa");
    return !(cardData && JSON.parse(cardData).length); // Show "Add Card" only if there is no card data
  });
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof ShippingAddressSchema>>({
    resolver: zodResolver(ShippingAddressSchema),
  });

  const onSubmit = (values: any) => {
    startTransition(() => {
      if (!form.formState.isValid) {
        setError("Please fill in all required fields correctly.");
        return;
      }
      const existingCards = localStorage.getItem("cardVisa");
      const cards = existingCards ? JSON.parse(existingCards) : [];

      cards.push(values);

      localStorage.setItem("cardVisa", JSON.stringify(cards));
      setSuccess("Shipping address updated!");
      setError("");
    });
  };

  const handleCancelClick = () => {
    setShowCard(false);
  };

  return (
    <div>
      {!showCard && (
        <h1
          className={`text-center text-black dark:text-white text-xl font-medium`}
          onClick={() => setShowCard(true)}
        >
          Add Card
        </h1>
      )}
      {showCard && (
        <Card className="w-[821px] bg-white dark:bg-[#0F1623] border-transparent -space-y-[16px]">
          <CardHeader className="text-black dark:text-white text-[26px] font-medium -mt-[16px]">
            New card
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                className="grid grid-cols-2 gap-x-[100px] gap-y-[20px] text-black dark:text-white"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black dark:text-white text-base font-normal">
                        Card number
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="4400 4400 4400 4400"
                          disabled={isPending}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cardHolderName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black dark:text-white text-base font-normal">
                        Cardholder name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Martin Karlson"
                          disabled={isPending}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cvv"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black dark:text-white text-base font-normal">
                        CVV
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="000"
                          disabled={isPending}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="expirationDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black dark:text-white text-base font-normal">
                        Expiration Date
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="22/01/2023"
                          disabled={isPending}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cardType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black dark:text-white text-base font-normal">
                        Card type
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your Card Type"
                          disabled={isPending}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-row col-start-1 col-end-3 space-x-[20px]">
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="hover:bg-amber-500 dark:hover:bg-[#F9B13C] dark:hover:text-black w-[79px] h-[31px] flex justify-center items-center 
                    text-white dark:text-[#F9B13C] bg-[#F9B13C] dark:bg-black dark:border-[#F9B13C] dark:border-[1px]"
                  >
                    Add card
                  </Button>
                  <button
                    className="hover:bg-amber-500 dark:hover:bg-[#F9B13C] dark:hover:text-black w-[79px] h-[31px] flex justify-center items-center rounded-[5px] 
                    text-white dark:text-[#F9B13C] bg-[#F9B13C] dark:bg-black dark:border-[#F9B13C] dark:border-[1px]"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                </div>
                <FormError message={error} />
                <FormSuccess message={success} />
              </form>
            </Form>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
