const express = require('express');
const router = express.Router();

// Banco de dados temporário (simulando um banco de dados)
let users = [
  { id: 1, name: 'João', age: 25 },
  { id: 2, name: 'Maria', age: 30 },
  { id: 3, name: 'Pedro', age: 28 },
];

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lista todos os usuários
 *     responses:
 *       200:
 *         description: Retorna uma lista de todos os usuários.
 */
router.get('/users', (req, res) => {
  res.json(users);
});

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtém um usuário por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser obtido
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Retorna os detalhes do usuário.
 *       404:
 *         description: Usuário não encontrado.
 */
router.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }
});

// Rota para criar um novo usuário
router.post('/users', (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ message: 'Nome e idade são obrigatórios' });
  }

  const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  const newUser = { id, name, age };
  users.push(newUser);

  res.status(201).json(newUser);
});

// Rota para atualizar um usuário por ID
router.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (user) {
    user.name = name || user.name;
    user.age = age || user.age;
    res.json(user);
  } else {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }
});

// Rota para excluir um usuário por ID
router.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((user) => user.id !== id);
  res.json({ message: 'Usuário excluído com sucesso' });
});

module.exports = router;
