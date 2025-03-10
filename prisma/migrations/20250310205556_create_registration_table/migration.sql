-- CreateTable
CREATE TABLE "Registration" (
    "id" SERIAL NOT NULL,
    "candidate_name" TEXT NOT NULL,
    "candidate_email" TEXT NOT NULL,
    "candidate_phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Registration_candidate_email_key" ON "Registration"("candidate_email");

-- CreateIndex
CREATE UNIQUE INDEX "Registration_candidate_phone_key" ON "Registration"("candidate_phone");
