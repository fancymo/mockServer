
module.exports = (req, res) => {
  const ret = {
    code: 200,
    message: 'success',
    name: '接口列表',
    apis: [{
      name: '登录',
      route: '/loginn',
    }],
  };
  res.status(200).send('<pre>' + JSON.stringify(ret, null, '  ') + '</pre>');
};
