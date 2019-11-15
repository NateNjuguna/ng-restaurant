var process = require('process');

module.exports = require(
    './config/webpack.' +
    (process.env.NODE_ENV === 'production' ? 'production' : 'development') +
    '.js'
);
