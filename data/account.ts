import prisma from "@/lib/database";

export const getAccountByUserID = async (userId: string) => {
  try {
    return await prisma.account.findFirst({
      where: { userId },
    });
  } catch {
    return null;
  }
};