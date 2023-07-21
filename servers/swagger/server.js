const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const usersRoutes = require('./routes/users'); // Importe as rotas dos usuários

const app = express();
const port = 3000;

// Middleware para permitir o uso do bodyParser
app.use(bodyParser.json());

// Configuração do Swagger
const swaggerDocument = yaml.load('./docs/swagger.yaml');
const usersDocument = yaml.load('./docs/users.yaml');
const swaggerSpec = { ...swaggerDocument, ...usersDocument };

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Banco de dados temporário (simulando um banco de dados)
let users = [
  { id: 1, name: 'João', age: 25 },
  { id: 2, name: 'Maria', age: 30 },
  { id: 3, name: 'Pedro', age: 28 },
];

// Rotas de usuários
app.use('/api', usersRoutes);

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
