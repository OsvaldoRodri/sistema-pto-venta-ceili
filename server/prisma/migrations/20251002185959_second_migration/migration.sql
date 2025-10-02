/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `role` VARCHAR(191) NOT NULL DEFAULT 'user';

-- CreateIndex
CREATE UNIQUE INDEX `Users_id_key` ON `Users`(`id`);
