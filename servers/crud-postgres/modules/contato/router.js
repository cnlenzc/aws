const controller = require('../controller')
const service = require('./service')

module.exports = require('express').Router()
  .post('/', controller.create(service.create))
  .get('/', controller.list(service.list))
  .get('/:id', controller.get(service.get))
  .put('/:id', controller.update(service.update))
  .delete('/:id', controller.delete(service.delete))
