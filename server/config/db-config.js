module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Zero0300",
    DB: "local_mysql_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };