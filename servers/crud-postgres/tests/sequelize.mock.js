class sequelizeMock {
  constructor() { console.log('mock sequelize.constructor') }
  static INTEGER() { return 'INTEGER' }
  static DOUBLE() { return 'DOUBLE' }
  static STRING() { return 'STRING' }
  static DATEONLY() { return 'DATEONLY' }
  sync() { console.log('mock sequelize.sync') }
  define() {
    return () => ({
      async findAll() { return []},
      async findByPk() { },
      async create() { },
      async update() { },
      async destroy() { },
      async count() { }
    })
  }
  static @runtimeGlobal: true
}

module.exports = {
  sequelize: sequelizeMock
}