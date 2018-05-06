const prod = require('./prod');
const dev = require('./dev');

// keys.js - figure which credes to return
if (process.env.NODE_ENV === 'production') {
    module.exports = prod;
} else {
    module.exports = dev;
}
