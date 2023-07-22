module.exports = require('express').Router()
  .use('/contato', require('./contato/router'))
  .use('/produto', require('./produto/router'))
