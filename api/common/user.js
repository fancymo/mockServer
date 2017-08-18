// 用户列表
// ------------------------
const Mock = require('mockjs');

const Random = Mock.Random;

module.exports = function (req, res) {
  const query = req.query;
  const ret = Mock.mock({
    status: '000',
    'data|1-10': [{ userid: 123, name: 'name' }],
  });
  res.json(ret);
};
