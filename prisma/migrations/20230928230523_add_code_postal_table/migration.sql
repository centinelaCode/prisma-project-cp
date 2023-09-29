-- CreateTable
CREATE TABLE "Codigo" (
    "id" SERIAL NOT NULL,
    "cp" TEXT NOT NULL,
    "asentamiento" TEXT NOT NULL,
    "tipo_asentamiento" TEXT NOT NULL,
    "tipo_localidad" TEXT NOT NULL,
    "municipioId" INTEGER NOT NULL,

    CONSTRAINT "Codigo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Codigo" ADD CONSTRAINT "Codigo_municipioId_fkey" FOREIGN KEY ("municipioId") REFERENCES "Municipio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
