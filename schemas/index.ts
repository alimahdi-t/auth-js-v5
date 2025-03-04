import { z } from "zod";
import { UserRole } from "@prisma/client";

// C1: 7:15

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      return !(data.password && !data.newPassword);
    },
    {
      message:
        "If you provide your current password, you must also provide a new password.",
      path: ["newPassword"],
    },
  )
  .refine(
    (data) => {
      return !(!data.password && data.newPassword);
    },
    {
      message:
        "You must provide your current password if you want to set a new password.",
      path: ["password"],
    },
  );

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, "Password is required"),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, "Minimum 6 characters required"),
  name: z.string().min(1, "Name is required"),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, "Minimum 6 characters required"),
});