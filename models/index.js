const db = require('./connection');

const Order = require('./Order');
const Client = require('./Client');
const Item = require('./Item');
const WebHook = require('./WebHook');

Order.hasMany(Item);
Order.belongsTo(Client);

Client.hasMany(Order);

module.exports = {
  Order,
  Client,
  Item,
  WebHook,
  db,
};
