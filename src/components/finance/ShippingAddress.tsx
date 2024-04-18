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

  return (
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
                    <Input placeholder="000" disabled={isPending} {...field} />
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

            <Button
              type="submit"
              disabled={isPending}
              className="hover:bg-amber-500 w-[79px] h-[31px] px-[9px] py-1.5 text-white dark:text-black col-start-1 col-end-3"
            >
              Add card
            </Button>
            <FormError message={error} />
            <FormSuccess message={success} />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
