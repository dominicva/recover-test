/*
  Warnings:

  - You are about to drop the column `wakefulness` on the `Questionnaire` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Questionnaire" DROP COLUMN "wakefulness",
ADD COLUMN     "energy" INTEGER NOT NULL DEFAULT 0;
