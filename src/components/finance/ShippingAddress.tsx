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
import { useTransition, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShippingAddressSchema } from "@/schemas";
import { z } from "zod";

export const ShippingAddress = () => {
  const [isPending, startTransition] = useTransition();
  const [showCard, setShowCard] = useState(true);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof ShippingAddressSchema>>({
    resolver: zodResolver(ShippingAddressSchema),
    mode: "onTouched",
  });

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("/api/visaCards");
        if (!response.ok) throw new Error("Failed to fetch card data");
        const cards = await response.json();
        setShowCard(cards.length === 0); // Show card form if no cards exist
      } catch (error) {
        console.error(error);
        setShowCard(true); // Optionally show card form on error
      }
    };
    fetchCards();
  }, []);

  const onSubmit = (values: any) => {
    startTransition(async () => {
      const valid = await form.trigger();
      if (!valid || Object.keys(form.formState.errors).length > 0) {
        setError("Please fill in all required fields correctly.");
        return;
      }

      setError("");
      try {
        const response = await fetch("/api/visaCards", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Failed to add the card");
        }

        const result = await response.json();
        setSuccess("Card added successfully!");

        form.reset({
          cardNumber: "",
          cardHolderName: "",
          cvv: "",
          expirationDate: "",
          cardType: "",
        });

        setTimeout(() => {
          setSuccess("");
          setShowCard(false);
        }, 3000);
      } catch (error) {
        setError("Failed to add the card.");
      }
    });
  };

  const handleCancelClick = () => {
    setShowCard(false);

    form.reset({
      cardNumber: "",
      cardHolderName: "",
      cvv: "",
      expirationDate: "",
      cardType: "",
    });
  };

  return (
    <div>
      {!showCard && (
        <h1
          className={`text-center text-black dark:text-white text-xl font-bold mr-[250px] cursor-pointer`}
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
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-black dark:text-white text-base font-normal">
                        Card number
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="4400 4400 4400 4400"
                          disabled={isPending}
                          {...form.register("cardNumber", {
                            required: "Card number is required",
                          })}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cardHolderName"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-black dark:text-white text-base font-normal">
                        Cardholder name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Martin Karlson"
                          disabled={isPending}
                          {...form.register("cardHolderName", {
                            required: "Card number is required",
                          })}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cvv"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-black dark:text-white text-base font-normal">
                        CVV
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="000"
                          disabled={isPending}
                          {...form.register("cvv", {
                            required: "Card number is required",
                          })}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="expirationDate"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-black dark:text-white text-base font-normal">
                        Expiration Date
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="22/01/2023"
                          disabled={isPending}
                          {...form.register("expirationDate", {
                            required: "Card number is required",
                          })}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cardType"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-black dark:text-white text-base font-normal">
                        Card type
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your Card Type"
                          disabled={isPending}
                          {...form.register("cardType", {
                            required: "Card number is required",
                          })}
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
                {Object.keys(form.formState.errors).length > 0 && (
                  <FormError message="Please fill in all required fields correctly." />
                )}
                <FormSuccess message={success} />
              </form>
            </Form>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
