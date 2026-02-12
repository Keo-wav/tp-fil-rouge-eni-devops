module.exports = {
  HOST: '10.51.101.20',
  USER: 'root',
  PASSWORD: 'rootpassword',
  DB: 'todolist_db',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
