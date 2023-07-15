/*
  Warnings:

  - You are about to drop the column `sleep_quality` on the `Questionnaire` table. All the data in the column will be lost.
  - You are about to drop the column `date_of_sobriety` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `substance_of_abuse` on the `User` table. All the data in the column will be lost.
  - Added the required column `dateOfSobriety` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `substanceOfAbuse` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Questionnaire" DROP COLUMN "sleep_quality",
ADD COLUMN     "sleepQuality" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "date_of_sobriety",
DROP COLUMN "substance_of_abuse",
ADD COLUMN     "dateOfSobriety" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "substanceOfAbuse" TEXT NOT NULL;
