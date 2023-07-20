const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.PG_URL,
  {
    dialect: 'postgres',
    logging: false,
    native: false,
    dialectOptions: {
     ssl: false
    }
  })

module.exports = sequelize;