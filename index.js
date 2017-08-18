const express = require('./config/express');

const Sever = express();
Sever.listen(5555);

module.exports = Sever;

console.log('Server running at http://localhost:5555/');
