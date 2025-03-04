-- CreateTable
CREATE TABLE "VarificationToken" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "VarificationToken_token_key" ON "VarificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VarificationToken_email_token_key" ON "VarificationToken"("email", "token");
