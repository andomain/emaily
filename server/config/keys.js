// keys.js - figure which credes to return
if (process.env.NODE_ENV === 'production') {
    console.log('Prod');
    module.exports = require('./prod');
} else {
    console.log('Dev');
    module.exports = require('./dev');
}