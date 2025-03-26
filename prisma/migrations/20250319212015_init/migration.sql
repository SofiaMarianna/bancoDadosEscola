-- CreateTable
CREATE TABLE "Aluno" (
    "id_aluno" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id_aluno")
);

-- CreateTable
CREATE TABLE "Professor" (
    "id_professor" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id_professor")
);

-- CreateTable
CREATE TABLE "Boletim" (
    "id_boletim" SERIAL NOT NULL,
    "id_aluno" INTEGER NOT NULL,
    "id_professor" INTEGER NOT NULL,
    "disciplina" TEXT NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,
    "semestre" TEXT,
    "ano" INTEGER NOT NULL,

    CONSTRAINT "Boletim_pkey" PRIMARY KEY ("id_boletim")
);

-- AddForeignKey
ALTER TABLE "Boletim" ADD CONSTRAINT "Boletim_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "Aluno"("id_aluno") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boletim" ADD CONSTRAINT "Boletim_id_professor_fkey" FOREIGN KEY ("id_professor") REFERENCES "Professor"("id_professor") ON DELETE RESTRICT ON UPDATE CASCADE;
