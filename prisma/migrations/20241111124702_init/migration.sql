/*
  Warnings:

  - Added the required column `coverImage` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `images` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `coverImage` VARCHAR(255) NOT NULL,
    ADD COLUMN `images` JSON NOT NULL;
