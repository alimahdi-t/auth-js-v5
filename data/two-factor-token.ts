import prisma from "@/lib/database";

export const getTwoFactorTokenByToken = async (token: string) => {
  try {
    return await prisma.twoFactorToken.findUnique({ where: { token } });
  } catch {
    return null;
  }
};

export const getTwoFactorTokenByEmail = async (email: string) => {
  try {
    return await prisma.twoFactorToken.findFirst({ where: { email } });
  } catch {
    return null;
  }
};