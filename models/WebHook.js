const sequelize = require('./connection');
const Sequelize = require('sequelize');

const WebHook = sequelize.define('webhook', {
  url: { type: Sequelize.STRING(512), unique: true },
  enabled: Sequelize.BOOLEAN,
});

module.exports = WebHook;
