"use server";

import * as z from "zod";

import { unstable_update } from "@/auth";
import { db } from "@/lib/db";
import { PaymentSchema } from "@/schemas";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";

export const payment = async (values: z.infer<typeof PaymentSchema>) => {
  const user = await currentUser();

  if (!user) {
    return {
      error: "Unauthorized",
    };
  }

  const dbUser = await getUserById(user.id as string);

  if (!dbUser) {
    return {
      error: "Unauthorized",
    };
  }

  const updatedUser = await db.user.update({
    where: { id: dbUser.id },
    data: {
      ...values,
    },
  });

  await unstable_update({
    user: {
      balance: updatedUser.balance,
    },
  });

  return {
    success: "Settings updated",
  };
};
