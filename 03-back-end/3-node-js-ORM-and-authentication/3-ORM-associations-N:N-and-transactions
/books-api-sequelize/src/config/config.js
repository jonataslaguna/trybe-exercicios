module.exports = {
  development: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE || 'orm_trybe_dev',
    host: process.env.MYSQL_HOST || 'localhost',
    port: 3306,
    dialect: process.env.DB_DIALECT || 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE || 'orm_trybe_test',
    host: process.env.MYSQL_HOST || 'mysql',
    port: 3306,
    dialect: process.env.DB_DIALECT || 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE || 'orm_trybe',
    host: process.env.MYSQL_HOST,
    port: 3306,
    dialect: process.env.DB_DIALECT || 'mysql',
  },
};