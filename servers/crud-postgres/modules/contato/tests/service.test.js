const proxyquire = require('proxyquire').noCallThru()

const service = proxyquire('../service', globalMocks)

describe('service contato', () => {
  describe('list', () => {
    it('should return a list', async () => {
      const result = await service.list({ page: 1, pageSize: 10 })
      expect(result.total).to.be.equal(1)
      expect(result.page).to.be.equal(1)
      expect(result.pageSize).to.be.equal(10)
      expect(result.pages).to.be.equal(1)
      expect(result.data).to.be.an('array')
    })
  })
})
