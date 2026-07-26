/*
  Warnings:

  - Added the required column `Price` to the `Destination` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Destination` ADD COLUMN `Price` TEXT NOT NULL;
