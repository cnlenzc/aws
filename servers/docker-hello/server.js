const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const app = express()

const port = Number(process.env.PORT)
if (!port) {
  throw new Error('variável de ambiente PORT sem valor')
}

app.use(helmet())
app.use(cors())
app.use(express.json())

let count = 0

app.get('/', (req, res) => {
  count++
  res.json({ hello: 'world', date: new Date(), count, port })
  console.log({ count, port })
})

app.listen(port, () => {
  console.log(`Servidor 'hello' iniciado em ${new Date()} na porta ${port}`)
})
