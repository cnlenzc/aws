const { INTEGER, STRING, DATEONLY } = require('sequelize')
const postgres = require('../utils/postgres')

module.exports = postgres.define('contato', {
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
