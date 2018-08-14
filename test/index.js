const mocha = require('mocha');
const instance = require('./api');
const { expect } = require('chai');

let order;

describe('Order flow', () => {
  describe('Order CRUD', () => {
    it('should create order', async () => {
      const client = {
        name: 'Max P.',
        email: 'shpax1@gmail.com',
        phone: '+380934555103',
        address: 'Peremogy Pr., 21',
        city: 'Kiev',
        country: 'Ukraine',
      };

      const items = [
        {
          name: 'Item 1', params: 'grey 180mm', quantity: 3, price: 20, currency: 'USD',
        },
        {
          name: 'Item 2', params: 'blue 120mm', quantity: 1, price: 10, currency: 'USD',
        },
      ];
      const { data } = await instance.post('/api/orders', { client, items });
      order = data;

      expect(order.status).to.be.equal('new');
    });

    it('should update order status', async () => {
      const { data } = await instance.put(`/api/orders/${order.id}`, { status: 'finished' });

      expect(data.status).to.be.equal('finished');

      order.status = data.status;
    });

    it('should get order by id', async () => {
      const { data } = await instance.get(`/api/orders/${order.id}`);

      expect(data).to.be.ok;
    });
  });

  describe('Order search', async () => {
    it('should list orders by user mail', async () => {
      const { data } = await instance.get('/api/orders?email=shpax1@gmail.com');

      expect(data).to.be.not.empty;
    });
  });

  describe('User data', async () => {
    it('should list client orders', async () => {
      const { data } = await instance.get(`/api/users/${order.clientId}`);

      expect(data).to.be.not.empty;
    });
  });
});
