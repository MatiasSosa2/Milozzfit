/*
  Warnings:

  - The `rol` column on the `Usuario` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('ADMIN', 'CLIENTE');

-- CreateEnum
CREATE TYPE "Zona" AS ENUM ('CALENTAMIENTO', 'TREN_SUPERIOR', 'TREN_INFERIOR', 'ZONA_MEDIA');

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "fechaFin" TIMESTAMP(3),
DROP COLUMN "rol",
ADD COLUMN     "rol" "Rol" NOT NULL DEFAULT 'CLIENTE';

-- CreateTable
CREATE TABLE "Progreso" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "completado" BOOLEAN NOT NULL,

    CONSTRAINT "Progreso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ejercicio" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "zona" "Zona" NOT NULL,
    "descripcion" TEXT NOT NULL,
    "videoLink" TEXT NOT NULL,

    CONSTRAINT "Ejercicio_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Progreso" ADD CONSTRAINT "Progreso_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
