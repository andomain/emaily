// const prod = require('./prod');
// const dev = require('./dev');

// keys.js - figure which credes to return
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');;
}
