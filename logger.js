const config = require('./config');

module.exports = function(message) {
  console.log(`[${config.appName}] ${message}`);
};