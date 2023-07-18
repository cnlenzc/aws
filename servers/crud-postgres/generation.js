
const database = require('./util/db');
const Contato = require('./models/contato');
const { uniqueNamesGenerator, names, starWars } = require('unique-names-generator')

const config = {
  dictionaries: [starWars, names],
  separator: ' '
}

const main = async function () {
  console.log('starting...')
  await database.sync();

  console.log('inserting...')

  for (let i = 0; i < 10; i++) {
    const idade = Math.floor(Math.random() * 80 + 2)
    const dataNascimento = new Date(new Date() - 1000 * 60 * 60 * 24 * 365.25 * (idade + Math.random()))

    const resultadoCreate = await Contato.create({
      nome: uniqueNamesGenerator(config),
      idade,
      dataNascimento,
      renda: Math.floor(Math.random() * 10000)
    })

    if (i % 1000 === 0)
      console.table([resultadoCreate.dataValues])
  }
  console.log('end...')
}

const mainTry = async function () {
  try {
    await main()
    console.log('end ok');
  } catch (error) {
    console.error(error);
  }
}

mainTry()
