const { INTEGER, STRING, DATEONLY } = require('sequelize')
const postgres = require('../utils/postgres')

const model = postgres.define('contato', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: STRING(60),
    allowNull: false
  },
  renda: INTEGER,
  dataNascimento: DATEONLY,
  idade: INTEGER
})

const fieldsReadwrite = [
  'nome', 'renda', 'dataNascimento', 'idade'
]

const fieldsReadonly = [
  'id', 'createdAt', 'updatedAt', ...fieldsReadwrite
]

module.exports = {
  model,
  fieldsReadonly,
  fieldsReadwrite
}