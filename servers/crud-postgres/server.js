require('express-async-errors')
const express = require('express')
const yaml = require('yamljs');
const swaggerUi = require('swagger-ui-express')

const app = express()

const port = Number(process.env.PORT)
if (!port) {
  throw new Error('variável de ambiente PORT não foi configurada')
}

const swaggerSpec = {
  ...yaml.load('./modules/swagger.yaml'),
  ...yaml.load('./modules/contato/swagger/paths.yaml'),
  ...yaml.load('./modules/contato/swagger/schemas.yaml'),
  ...yaml.load('./modules/produto/swagger.yaml')
}

app
  .use(require('helmet')())
  .use(require('cors')())
  .use(express.json())
  .use('/api', require('./modules/router'))
  .use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  .all('*', require('./middlewares/handleError404'))
  .use(require('./middlewares/handleErrors'))
  .listen(port, () => {
    console.log(`Servidor 'crud-postgres' iniciado em ${new Date()} na porta ${port}`)
  })
