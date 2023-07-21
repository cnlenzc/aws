const { INTEGER, DOUBLE, STRING, DATEONLY } = require('sequelize')
const postgres = require('../utils/postgres')

const Produto = postgres.define('produto', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: STRING(50),
        allowNull: false
    },
    preco: {
        type: DOUBLE
    },
    descricao: STRING
})

module.exports = Produto;