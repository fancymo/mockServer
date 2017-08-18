const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const routes = require('./routes');

module.exports = () => {
  const app = express();

  app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Credentials', true); // 允许发送cookie
    res.header('Access-Control-Allow-Headers', '*, tenant, workstation, token');
    // res.header('set-cookie', 'name=mxl;');
    next();
  });
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(methodOverride());
  routes(app);

  return app;
};
