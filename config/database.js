const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('online_exam', 'root', 'root',{
  host: '127.0.01',
  dialect: 'mysql'
})

module.exports = sequelize;
global.sequelize = sequelize;
