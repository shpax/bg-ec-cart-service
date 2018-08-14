/* eslint-disable no-console */

const Koa = require('koa');
const config = require('config');

const { db } = require('./models');
const layouts = require('./layouts');

const app = new Koa();

app
  .use(layouts.routes())
  .use(layouts.allowedMethods());

db.sync({ force: false }).then(() => {
  app.listen(config.port);

  console.log(`listening on port ${config.port}`);
});

