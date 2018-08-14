const sequelize = require('./connection');
const Sequelize = require('sequelize');

const Order = sequelize.define('order', {
  comment: Sequelize.STRING(2048),
  status: Sequelize.ENUM('new', 'in progress', 'sent', 'finished', 'canceled'),
});

module.exports = Order;
