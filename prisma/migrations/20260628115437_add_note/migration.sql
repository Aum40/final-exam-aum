/*
  Warnings:

  - Made the column `transaction_date` on table `expenses` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "expenses" ADD COLUMN     "note" TEXT,
ALTER COLUMN "transaction_date" SET NOT NULL;
