const { Client, Item, Order } = require('../models');
const _ = require('lodash');

async function listOrders(ctx) {
  const client = await Client.findOne({
    where: ctx.request.query,
  });

  if (!client) throw 'client not found';

  ctx.body = await client.getOrders({
    include: [Item],
  });
}

async function getOrder(ctx) {
  ctx.body = await Order.findOne({
    where: ctx.params,
    include: [
      Item,
      {
        model: Client,
        attributes: { exclude: ['password'] },
      }],
  });
}

async function getClient(ctx) {
  ctx.body = await Client.findOne({
    where: ctx.params,
    attributes: {
      exclude: ['password'],
    },
  });
}

async function placeOrder(ctx) {
  const { client, items, comment } = ctx.request.body;
  const [dbClient] = await Client.findOrCreate({
    where: _.pick(client, ['email']),
    defaults: client,
  });

  ctx.body = await Order.create({
    status: 'new',
    comment,
    clientId: dbClient.id,
    items,
  }, {
    include: [Item, Client],
  });
}

async function updateOrder(ctx) {
  const order = await Order.findOne({
    where: ctx.params,
  });

  ctx.body = await order.update(_.omit(ctx.request.body, ['id']));
}

module.exports = {
  listOrders,
  getClient,
  getOrder,
  placeOrder,
  updateOrder,
};
