-- CreateTable
CREATE TABLE "Estado" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "c_estado" VARCHAR(60) NOT NULL,
    "cp_base" VARCHAR(10) NOT NULL,
    "total" INTEGER NOT NULL,

    CONSTRAINT "Estado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Municipio" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "c_municipio" VARCHAR(180) NOT NULL,
    "estadoId" INTEGER NOT NULL,

    CONSTRAINT "Municipio_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Estado_c_estado_key" ON "Estado"("c_estado");

-- AddForeignKey
ALTER TABLE "Municipio" ADD CONSTRAINT "Municipio_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "Estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
