const express = require('express')
const contato = require('../../models/contato')
const { BadRequest, NotFound } = require('../../utils/errors')

const router = express.Router()

router.post('/', async (req, res, next) => {
  if (!req.body.nome) {
    throw new BadRequest('nome não fornecido')
  }
  const record = await contato.create(req.body)
  res.status(201).json(record)
})

router.get('/', async (req, res, next) => {
  const list = await contato.findAll()
  res.json(list)
})

router.get('/:id', async (req, res, next) => {
  const record = await contato.findByPk(req.params.id)
  if (!record) {
    throw new NotFound('id not found')
  }
  res.json(record.dataValues)
})

router.put('/:id', async (req, res, next) => {
  if (req.body.id) {
    throw new BadRequest('id field is not allowed in body')
  }
  const record = await contato.update(req.body, { where: { id: req.params.id } })
  const count = record?.[0]
  if (!count) {
    throw new NotFound('id not found')
  }
  res.json({ count })
})

router.delete('/:id', async (req, res, next) => {
  const count = await contato.destroy({ where: { id: req.params.id } })
  if (!count) {
    throw new NotFound('id not found')
  }
  res.json({ count })
})

module.exports = router
