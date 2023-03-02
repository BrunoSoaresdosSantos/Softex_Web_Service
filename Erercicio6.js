const express = require('express');
const app = express();
app.use(express.json());

let alunos = [
  { id: 1, nome: 'João', idade: 18 },
  { id: 2, nome: 'Maria', idade: 20 },
  { id: 3, nome: 'Pedro', idade: 19 }
];

// Listar todos os alunos
app.get('/alunos', (req, res) => {
  res.status(200).json(alunos);
});

// Listar um aluno específico
app.get('/alunos/:id', (req, res) => {
  const aluno = alunos.find(a => a.id === parseInt(req.params.id));
  if (!aluno) return res.status(404).send('Aluno não encontrado.');
  res.status(200).json(aluno);
});

// Criar um novo aluno
app.post('/alunos', (req, res) => {
  const aluno = {
    id: alunos.length + 1,
    nome: req.body.nome,
    idade: req.body.idade
  };
  alunos.push(aluno);
  res.status(201).json(aluno);
});

// Atualizar um aluno existente
app.put('/alunos/:id', (req, res) => {
  const aluno = alunos.find(a => a.id === parseInt(req.params.id));
  if (!aluno) return res.status(404).send('Aluno não encontrado.');
  aluno.nome = req.body.nome;
  aluno.idade = req.body.idade;
  res.status(200).json(aluno);
});

// Remover um aluno existente
app.delete('/alunos/:id', (req, res) => {
  const aluno = alunos.find(a => a.id === parseInt(req.params.id));
  if (!aluno) return res.status(404).send('Aluno não encontrado.');
  const index = alunos.indexOf(aluno);
  alunos.splice(index, 1);
  res.status(200).send('Aluno removido com sucesso.');
});

app.listen(3000, () => console.log('Servidor iniciado na porta 3000.'));
