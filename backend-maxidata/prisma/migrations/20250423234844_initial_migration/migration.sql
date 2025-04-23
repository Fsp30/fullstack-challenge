-- CreateTable
CREATE TABLE "TypeProfessional" (
    "id" SERIAL NOT NULL,
    "describe" TEXT NOT NULL,
    "situation" BOOLEAN NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TypeProfessional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Professional" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telephone" TEXT,
    "email" TEXT,
    "situation" BOOLEAN NOT NULL,
    "typeProfessionalId" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Professional_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Professional" ADD CONSTRAINT "Professional_typeProfessionalId_fkey" FOREIGN KEY ("typeProfessionalId") REFERENCES "TypeProfessional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
