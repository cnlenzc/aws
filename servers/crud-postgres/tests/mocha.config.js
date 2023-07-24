const { expect } = require('chai')
global.expect = expect

const SequelizeMock = require('sequelize-mock')
SequelizeMock['@runtimeGlobal'] = true

global.globalMocks = {
  sequelize: SequelizeMock
}
