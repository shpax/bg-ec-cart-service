const sequelize = require('./connection');
const Sequelize = require('sequelize');

const Client = sequelize.define('client', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING,
  password: Sequelize.STRING,
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  country: Sequelize.STRING,
});

module.exports = Client;
