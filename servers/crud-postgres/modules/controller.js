const { BadRequest, NotFound } = require('../utils/errors')

module.exports = {
  list(service) {
    return async (req, res, next) => {
      const input = Object.keys(req.body).length ? req.body : req.query
      const result = await service({
        page: Number(input.page) || 1,
        pageSize: Math.min(Number(input.pageSize || 10), 1000)
      })
      res.json(result)
    }
  },

  get(service) {
    return async (req, res, next) => {
      const record = await service(req.params.id)
      if (!record) {
        throw new NotFound('informação não encontrada')
      }
      res.json(record)
    }
  },

  create(service) {
    return async (req, res, next) => {
      if (!req.body.nome) {
        throw new BadRequest('nome não fornecido')
      }
      const record = await service(req.body)
      res.status(201).json(record)
    }
  },

  update(service) {
    return async (req, res, next) => {
      if (req.body.id) {
        throw new BadRequest('id field is not allowed in body')
      }
      const count = await service(req.params.id, req.body)
      if (!count) {
        throw new NotFound('informação não encontrada')
      }
      res.json({ count })
    }
  },

  delete(service) {
    return async (req, res, next) => {
      const count = await service(req.params.id)
      if (!count) {
        throw new NotFound('informação não encontrada')
      }
      res.json({ count })
    }
  }
}

