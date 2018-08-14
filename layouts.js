const Router = require('koa-router');
const controller = require('./controller');

const bodyParser = require('koa-bodyparser');

const router = new Router();

router.use(bodyParser());

router.get('/api/orders', controller.listOrders);

router.get('/api/orders/:id', controller.getOrder);

router.put('/api/orders/:id', controller.updateOrder);

router.post('/api/orders', controller.placeOrder);

router.get('/api/users/:id', controller.getClient);

module.exports = router;
