const sequelize = require('./connection');
const Sequelize = require('sequelize');

const Item = sequelize.define('item', {
  name: Sequelize.STRING,
  params: Sequelize.STRING(1024),
  quantity: Sequelize.INTEGER,
  price: Sequelize.FLOAT,
  currency: Sequelize.ENUM('UAH', 'USD', 'EUR'),
});

module.exports = Item;
