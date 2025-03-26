const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Middleware para processar dados de formulários (x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor!');
});


app.get("/alunos", async (req, res) => {
  const alunos = await prisma.aluno.findMany({ include: { boletim: true } });
  res.json(alunos);
});

app.post("/alunos", async (req, res) => {
  const { nome, idade } = req.body;
  const novoAluno = await prisma.aluno.create({ data: { nome, nascimento } });
  res.json(novoAluno);
});

app.put("/alunos/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, idade } = req.body;
  const alunoAtualizado = await prisma.aluno.update({
    where: { id: Number(id) },
    data: { nome, nascimento },
  });
  res.json(alunoAtualizado);
});

app.delete("/alunos/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.aluno.delete({ where: { id: Number(id) } });
  res.json({ message: "Aluno removido com sucesso!" });
});

app.get("/professores", async (req, res) => {
    const professores = await prisma.professor.findMany();
    res.json(professores);
  });
  
  app.post("/professores", async (req, res) => {
    const { nome, nascimento } = req.body;
    const novoProfessor = await prisma.professor.create({ data: { nome, nascimento } });
    res.json(novoProfessor);
  });
  
  app.put("/professores/:id", async (req, res) => {
    const { id } = req.params;
    const { nome, nascimento } = req.body;
    const professorAtualizado = await prisma.professor.update({
      where: { id: Number(id) },
      data: { nome, nascimento },
    });
    res.json(professorAtualizado);
  });
  
  app.delete("/professores/:id", async (req, res) => {
    const { id } = req.params;
    await prisma.professor.delete({ where: { id: Number(id) } });
    res.json({ message: "Professor removido com sucesso!" });
  });

app.get("/disciplinas", async (req, res) => {
    const disciplinas = await prisma.disciplina.findMany({ include: { professor: true } });
    res.json(disciplinas);
  });
  
  app.post("/disciplinas", async (req, res) => {
    const { nome, professorId } = req.body;
    const novaDisciplina = await prisma.disciplina.create({ data: { nome, professorId } });
    res.json(novaDisciplina);
  });
  
  app.put("/disciplinas/:id", async (req, res) => {
    const { id } = req.params;
    const { nome, professorId } = req.body;
    const disciplinaAtualizada = await prisma.disciplina.update({
      where: { id: Number(id) },
      data: { nome, professorId },
    });
    res.json(disciplinaAtualizada);
  });
  
  app.delete("/disciplinas/:id", async (req, res) => {
    const { id } = req.params;
    await prisma.disciplina.delete({ where: { id: Number(id) } });
    res.json({ message: "Disciplina removida com sucesso!" });
  });

app.get("/boletins", async (req, res) => {
    const boletins = await prisma.boletim.findMany({
      include: { aluno: true, disciplina: true },
    });
    res.json(boletins);
  });
  
  app.post("/boletins", async (req, res) => {
    const { alunoId, disciplinaId, nota } = req.body;
    const novoBoletim = await prisma.boletim.create({
      data: { alunoId, disciplinaId, nota, semestre, ano },
    });
    res.json(novoBoletim);
  });
  
  app.put("/boletins/:id", async (req, res) => {
    const { id } = req.params;
    const { alunoId, disciplinaId, nota, semestre, ano } = req.body;
    const boletimAtualizado = await prisma.boletim.update({
      where: { id: Number(id) },
      data: { alunoId, disciplinaId, nota, semestre, ano },
    });
    res.json(boletimAtualizado);
  });
  
  app.delete("/boletins/:id", async (req, res) => {
    const { id } = req.params;
    await prisma.boletim.delete({ where: { id: Number(id) } });
    res.json({ message: "Boletim removido com sucesso!" });
  });  

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});