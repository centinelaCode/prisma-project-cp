/*
  Warnings:

  - Added the required column `estadoId` to the `Codigo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Codigo" ADD COLUMN     "estadoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Codigo" ADD CONSTRAINT "Codigo_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "Estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
