"use server";

import { z } from "zod";
import { SettingsSchema } from "@/schemas";
import { currentUser } from "@/lib/auth";
import prisma from "@/lib/database";
import { getUserById } from "@/data/user";

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  if (user.id) {
    const dbUser = await getUserById(user.id);
    if (!dbUser) {
      return { error: "Unauthorized" };
    }

    await prisma.user.update({
      where: { id: dbUser.id },
      data: { ...values },
    });
  }

  return { success: "Settings Updated!" };
};