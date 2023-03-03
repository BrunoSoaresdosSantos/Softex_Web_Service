const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'exemplo'
});

connection.connect();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// CREATE
app.post('/usuarios', (req, res) => {
  const { nome, email, senha } = req.body;
  connection.query('INSERT INTO usuarios SET ?', { nome, email, senha }, (error, results) => {
    if (error) throw error;
    res.send('Usuário adicionado com sucesso!');
  });
});

// READ
app.get('/usuarios', (req, res) => {
  connection.query('SELECT * FROM usuarios', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// UPDATE
app.put('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const { nome, email, senha } = req.body;
  connection.query('UPDATE usuarios SET nome=?,email=?, senha=? WHERE id=?', [nome, email, senha, id], (error, results) => {
    if (error) throw error;
    res.send('Usuário atualizado com sucesso!');
    });
    });
    
    // DELETE
    app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM usuarios WHERE id=?', id, (error, results) => {
    if (error) throw error;
    res.send('Usuário removido com sucesso!');
    });
    });
    
    app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
    });
