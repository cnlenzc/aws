const Sequelize = require('sequelize');
const database = require('../util/db');

module.exports = database.define('contato', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING(60),
    allowNull: false
  },
  renda: Sequelize.INTEGER,
  dataNascimento: Sequelize.DATEONLY,
  idade: Sequelize.INTEGER
})
