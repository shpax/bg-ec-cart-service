const { NODE_ENV } = process.env;

module.exports = {
  apps: [{
    name: 'bg-ec-cart-service',
    watch: NODE_ENV !== 'production',
    script: './app.js',
    restart_delay: 200,
    node_args: ['--inspect=9229'],
  }],
};

