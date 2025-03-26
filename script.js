document.getElementById("adicionarAlunoForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const nome = document.getElementById("nomeAluno").value;
        const nascimento = parseInt(document.getElementById("nascimentoAluno").value);
        await adicionarAluno(nome, nascimento);
        fetchAlunos();
        document.getElementById("nomeAluno").value = "";
        document.getElementById("nascimentoAluno").value = "";
});
async function adicionarAluno(nome, nascimento) {
        const response = await fetch("http://localhost:3000/alunos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, idade }), 
        });
    
        if (!response.ok) {
        console.error("Erro ao adicionar aluno:", response.statusText);
        }
    
        return response.json();
}
    
    document.getElementById("adicionarProfessorForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const nome = document.getElementById("nomeProfessor").value;
        const nascimento = document.getElementById("nascimentoProfessor").value;
        await adicionarProfessor(nome, nascimento);
        fetchProfessores();
        document.getElementById("nomeProfessor").value = "";
        document.getElementById("nascimentoProfessor").value = "";
    });
    async function adicionarProfessor(nome, materia) {
        const response = await fetch("http://localhost:3000/professores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, nascimento }),
        });
        return response.json();
    }

    document.getElementById("adicionarDisciplinaForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const nome = document.getElementById("nomeDisciplina").value;
        const professorId = parseInt(document.getElementById("idProfessorDisciplina").value);
        await adicionarDisciplina(nome, professorId);
        fetchDisciplinas();
        document.getElementById("nomeDisciplina").value = "";
        document.getElementById("idProfessorDisciplina").value = "";
    });
    async function adicionarDisciplina(nome, professorId) {
        const response = await fetch("http://localhost:3000/disciplinas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, professorId }),
        });
    
        if (!response.ok) {
        console.error("Erro ao adicionar disciplina:", response.statusText);
        }
    
        return response.json();
    }
    
    document.getElementById("adicionarBoletimForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const alunoId = parseInt(document.getElementById("idAlunoBoletim").value);
        const disciplinaId = parseInt(document.getElementById("idDisciplinaBoletim").value);
        const nota = parseFloat(document.getElementById("notaBoletim").value);
        const semestre = parseFloat(document.getElementById("semestreBoletim").value);
        const ano = parseFloat(document.getElementById("anoBoletim").value);
        await adicionarBoletim(alunoId, disciplinaId, nota, semestre, ano);
        fetchBoletins();
        document.getElementById("idAlunoBoletim").value = "";
        document.getElementById("idDisciplinaBoletim").value = "";
        document.getElementById("notaBoletim").value = "";
    });
    async function adicionarBoletim(alunoId, disciplinaId, nota, semestre, ano) {
        const response = await fetch("http://localhost:3000/boletins", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ alunoId, disciplinaId, nota, semestre, ano }),
        });
        return response.json();
    }

    document.getElementById("atualizarAlunoForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const id = parseInt(document.getElementById("idAlunoAtualizar").value);
        const nome = document.getElementById("nomeAlunoAtualizar").value;
        const nascimento = document.getElementById("nascimentoAlunoAtualizar").value
        ? parseInt(document.getElementById("nascimentoAlunoAtualizar").value)
        : undefined;
        await atualizarAluno(id, nome, nascimento);
        fetchAlunos();
        document.getElementById("nomeAluno").value = "";
        document.getElementById("nascimentoAluno").value = "";
    });
    async function atualizarAluno(id, nome, nascimento) {
        const response = await fetch(`http://localhost:3000/alunos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, nascimento }),
        });
        return response.json();
    }

    document.getElementById("atualizarProfessorForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const id = parseInt(document.getElementById("idProfessorAtualizar").value);
        const nome = document.getElementById("nomeAlunoAtualizar").value;
        const nascimento = document.getElementById("nascimentoProfessorAtualizar").value;
        await atualizarProfessor(id, nome, nascimento);
        fetchProfessores();
        document.getElementById("nomeProfessor").value = "";
        document.getElementById("nascimentoProfessor").value = "";
    });
    async function atualizarProfessor(id, nome, nascimento) {
        const response = await fetch(`http://localhost:3000/professores/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, nascimento }),
        });
        return response.json();
    }
    
    document.getElementById("atualizarDisciplinaForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const id = parseInt(document.getElementById("idDisciplinaAtualizar").value);
        const nome = document.getElementById("nomeDisciplinaAtualizar").value;
        const professorId = document.getElementById("idProfessorDisciplinaAtualizar").value
        ? parseInt(document.getElementById("idProfessorDisciplinaAtualizar").value)
        : undefined;
        await atualizarDisciplina(id, nome, professorId);
        fetchDisciplinas();
        document.getElementById("nomeDisciplina").value = "";
        document.getElementById("idProfessorDisciplina").value = "";
    });
    async function atualizarDisciplina(id, nome, professorId) {
        const response = await fetch(`http://localhost:3000/disciplinas/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, professorId }),
        });
        return response.json();
    }

    document.getElementById("atualizarBoletimForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const id = parseInt(document.getElementById("idBoletimAtualizar").value);
        const alunoId = document.getElementById("idAlunoBoletimAtualizar").value
        ? parseInt(document.getElementById("idAlunoBoletimAtualizar").value)
        : undefined;
        const disciplinaId = document.getElementById("idDisciplinaBoletimAtualizar").value
        ? parseInt(document.getElementById("idDisciplinaBoletimAtualizar").value)
        : undefined;
        const nota = document.getElementById("notaBoletimAtualizar").value
        ? parseFloat(document.getElementById("notaBoletimAtualizar").value)
        : undefined;
        const semestre = document.getElementById("semestreBoletimAtualizar").value
        ? parseFloat(document.getElementById("semestreBoletimAtualizar").value)
        : undefined;
        const ano = document.getElementById("anoBoletimAtualizar").value
        ? parseFloat(document.getElementById("anoBoletimAtualizar").value)
        : undefined;
        await atualizarBoletim(id, alunoId, disciplinaId, nota, semestre, ano);
        fetchBoletins();
        document.getElementById("idAlunoBoletim").value = "";
        document.getElementById("idDisciplinaBoletim").value = "";
        document.getElementById("notaBoletim").value = "";
        document.getElementById("semestreBoletim").value = "";
        document.getElementById("anoBoletim").value = "";
    });
    async function atualizarBoletim(id, alunoId, disciplinaId, nota, semestre, ano) {
        const response = await fetch(`http://localhost:3000/boletins/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ alunoId, disciplinaId, nota, semestre, ano }),
        });
        return response.json();
    }
    
    document.getElementById("removerAlunoForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const id = parseInt(document.getElementById("idAlunoRemover").value);
        await deletarAluno(id);
        fetchAlunos();
        document.getElementById("idAlunoRemover").value = "";
    });
    async function deletarAluno(id) {
        const response = await fetch(`http://localhost:3000/alunos/${id}`, {
        method: "DELETE",
        });
        return response.json();
    }

    document.getElementById("removerProfessorForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const id = parseInt(document.getElementById("idProfessorRemover").value);
        await deletarProfessor(id);
        fetchProfessores();
        document.getElementById("idProfessorRemover").value = "";
    });
    async function deletarProfessor(id) {
        const response = await fetch(`http://localhost:3000/professores/${id}`, {
        method: "DELETE",
        });
        return response.json();
    }
    
    document.getElementById("removerDisciplinaForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const id = parseInt(document.getElementById("idDisciplinaRemover").value);
        await deletarDisciplina(id);
        fetchDisciplinas();
        document.getElementById("idDisciplinaRemover").value = "";
    });
    async function deletarDisciplina(id) {
        const response = await fetch(`http://localhost:3000/disciplinas/${id}`, {
        method: "DELETE",
        });
        return response.json();
    }

    document.getElementById("removerBoletimForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const id = parseInt(document.getElementById("idBoletimRemover").value);
        await deletarBoletim(id);
        fetchBoletins();
        document.getElementById("idBoletimRemover").value = "";
    });
    async function deletarBoletim(id) {
        const response = await fetch(`http://localhost:3000/boletins/${id}`, {
        method: "DELETE",
        });
        return response.json();
    }
    
    async function fetchAlunos() {
        const response = await fetch("http://localhost:3000/alunos");
        const alunos = await response.json();
        const list = document.getElementById("alunos");
        list.innerHTML = alunos
        .map((aluno) => `<li>${aluno.id} - ${aluno.nome} - ${aluno.nascimento} anos</li>`)
        .join("");
    }

    async function fetchProfessores() {
        const response = await fetch("http://localhost:3000/professores");
        const professores = await response.json();
        const list = document.getElementById("professores");
        list.innerHTML = professores
        .map((professor) => `<li>${professor.id} - ${professor.nome} - Matéria: ${professor.nascimento}</li>`)
        .join("");
    }
    
    async function fetchDisciplinas() {
        const response = await fetch("http://localhost:3000/disciplinas");
        const disciplinas = await response.json();
        const list = document.getElementById("disciplinas");
        list.innerHTML = disciplinas
        .map((disciplina) => `<li>${disciplina.id} - ${disciplina.nome} - Professor: ${disciplina.professor.nome}</li>`)
        .join("");
    }

    async function fetchBoletins() {
        const response = await fetch("http://localhost:3000/boletins");
        const boletins = await response.json();
        const list = document.getElementById("boletins");
        list.innerHTML = boletins
        .map(
            (boletim) =>
            `<li>ID: ${boletim.id} - Aluno: ${boletim.aluno.nome} - Disciplina: ${boletim.disciplina.nome} - Nota: ${boletim.nota} - Semestre: ${boletim.semestre} - Ano: ${boletim.ano}</li>`
        )
        .join("");
    }
    