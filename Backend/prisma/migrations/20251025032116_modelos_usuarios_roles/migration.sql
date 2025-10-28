/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Estado" AS ENUM ('Activo', 'Inactivo');

-- DropTable
DROP TABLE "Auditoria"."user";

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nombreUsuario" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "estado" "Estado" NOT NULL DEFAULT 'Activo',
    "idRol" INTEGER NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rol" (
    "id" SERIAL NOT NULL,
    "nombreRol" TEXT NOT NULL,

    CONSTRAINT "rol_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_nombreUsuario_key" ON "usuario"("nombreUsuario");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "rol_nombreRol_key" ON "rol"("nombreRol");

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_idRol_fkey" FOREIGN KEY ("idRol") REFERENCES "rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
