const Sequelize = require('sequelize')

module.exports = new Sequelize(
  process.env.PG_URL,
  {
    dialect: 'postgres',
    logging: false,
    native: false,
    dialectOptions: {
      ssl: false
    }
  }
)
