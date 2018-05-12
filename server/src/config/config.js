module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PASS || 'tabtracker',
    options: {
      // dialect: process.env.DIALECT || 'sqlite',
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'localhost',
      // storage: './tabtracker.sqlite'
      storage: './tabtracker.postgres'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
