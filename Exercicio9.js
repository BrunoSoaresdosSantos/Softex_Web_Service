const express = require('express');
const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.post('/world', (req, res) => {
  const data = {
    id:1,
    nome:'Bruno',
    sobrenome: 'Soares'
  }
  res.json(data);
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
