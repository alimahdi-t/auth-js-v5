"use server";

import { signOut } from "@/auth";

export const logOut = async () => {
  // Some server actions
  await signOut();
};