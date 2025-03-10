/*
  Warnings:

  - You are about to drop the `Registration` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Registration";

-- CreateTable
CREATE TABLE "registration" (
    "id" SERIAL NOT NULL,
    "candidate_name" TEXT NOT NULL,
    "candidate_email" TEXT NOT NULL,
    "candidate_phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "registration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "registration_candidate_email_key" ON "registration"("candidate_email");

-- CreateIndex
CREATE UNIQUE INDEX "registration_candidate_phone_key" ON "registration"("candidate_phone");
