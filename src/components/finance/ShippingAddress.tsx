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
    defaultValues: {
      userName: undefined,
      address1: undefined,
      address2: undefined,
      phoneNumber: undefined,
      city: undefined,
      state: undefined,
      zip: undefined,
      region: undefined,
    },
  });

  const onSubmit = (values: any) => {
    startTransition(() => {
      if (!form.formState.isValid) {
        setError("Please fill in all required fields correctly.");
        return;
      }
      setSuccess("Shipping address updated!");
      setError("");
    });
  };

  return (
    <Card className="w-[821px] h-[459px] bg-white dark:bg-[#0F1623] border-transparent -space-y-[16px]">
      <CardHeader className="text-black dark:text-white text-[26px] font-medium -mt-[16px]">
        Shipping address
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="space-x-[0px] grid grid-cols-2 gap-[20px] text-black dark:text-white"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black dark:text-white text-base font-normal">
                    User Name
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
              name="address1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black dark:text-white text-base font-normal">
                    Address 1
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="10 - 25 - 100"
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
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black dark:text-white text-base font-normal">
                    Phone number
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+7 777 77 77"
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
              name="address2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black dark:text-white text-base font-normal">
                    Address 2
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="10 - 25 - 100"
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
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black dark:text-white text-base font-normal">
                    City
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your city"
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
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black dark:text-white text-base font-normal">
                    State
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="California State"
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
              name="region"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black dark:text-white text-base font-normal">
                    Region
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your region"
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
              name="zip"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black dark:text-white text-base font-normal">
                    Zip Code
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="00000000"
                      disabled={isPending}
                      {...field}
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
              Save
            </Button>
             
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
