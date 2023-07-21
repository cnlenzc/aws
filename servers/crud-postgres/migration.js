const postgres = require('./utils/postgres')

const main = async() => {
  console.log('migrating the database...')
  await postgres.sync()
  console.log('migration finished ok!')
}

main()
