import prisma from "@/lib/database";

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
  try {
    return await prisma.twoFactorConfirmation.findUnique({ where: { userId } });
  } catch {
    return null;
  }
};