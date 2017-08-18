const express = require('express');
const bodyParser = require('body-parser');
// const schema = require('./schema');

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'sumu',
});

connection.connect();

const app = express();
app.use(bodyParser.text({ type: 'application/graphql' }));

const PORT = 3000;

connection.query('SELECT name from mmtest where id="1" ', (error, results, fields) => {
  if (error) throw error;
  console.log(results[0].name);
});
app.post('/graphql', (req, res) => {
  res.send('Hello!');
});

const server = app.listen(PORT, () => {
  console.log('GraphQL listening at http://localhost:%s', PORT);
});
