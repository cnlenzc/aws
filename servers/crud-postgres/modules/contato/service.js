const {
  model: dbContato,
  fieldsReadonly,
  fieldsReadwrite
} = require('../../models/contato')

module.exports = {
  async list({ page, pageSize }) {
    const data = await dbContato.findAll({
      attributes: fieldsReadonly,
      offset: (page - 1) * pageSize,
      limit: pageSize
    })
    const total = page == 1 && data.length !== pageSize
      ? data.length
      : await dbContato.count()
    const pages = Math.ceil(total / pageSize)
    return { total, page, pageSize, pages, data }
  },

  async get(id) {
    const record = await dbContato.findByPk(id, {
      attributes: fieldsReadonly
    })
    return record?.dataValues
  },

  async create(data) {
    const record = await dbContato.create(data, { 
      fields: fieldsReadwrite
     })
    return record
  },

  async update(id, data) {
    const result = await dbContato.update(data, { 
      fields: fieldsReadwrite,
      where: { id } 
    })
    const count = result?.[0]
    return count
  },

  async delete(id) {
    const count = await dbContato.destroy({ 
      where: { id } 
    })
    return count
  }
}
