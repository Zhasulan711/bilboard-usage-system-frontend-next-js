import { UserRole } from "@prisma/client";
import * as z from "zod";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      return true;
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    {
      message: "Password is required!",
      path: ["password"],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const PaymentSchema = z.object({
  balance: z.optional(z.string()),
});

export const BillboardSchema = z.object({
  billboard: z.optional(z.string()),
});

export const ShippingAddressSchema = z.object({
  cardNumber: z
    .string()
    .regex(/^\d{16}$/, { message: "Card number must be 16 digits long." }),
  cardHolderName: z
    .string()
    .min(1, { message: "Cardholder name is required." }),
  cvv: z.string().regex(/^\d{3}$/, { message: "CVV must be 3 digits." }),
  expirationDate: z
    .string()
    .regex(
      /^(0[1-9]|[1-9][0-9])\/(0[1-9]|[1-9][0-9])\/\d{4}$/,
      "Expiration date must be in DD/MM/YYYY format."
    ),
  cardType: z.string().min(1, { message: "Card type is required." }),
});
