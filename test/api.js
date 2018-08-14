const axios = require('axios');
const { host, port } = require('config');

module.exports = axios.create({
  baseURL: `http://${host}:${port}`,
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});
