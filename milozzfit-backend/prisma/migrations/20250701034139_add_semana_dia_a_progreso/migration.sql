/*
  Warnings:

  - Added the required column `dia` to the `Progreso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `semana` to the `Progreso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Progreso" ADD COLUMN     "dia" TEXT NOT NULL,
ADD COLUMN     "semana" INTEGER NOT NULL,
ALTER COLUMN "fecha" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "completado" SET DEFAULT false;
