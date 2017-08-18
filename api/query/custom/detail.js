// 采购入库、定做入库列表
// ------------------------
const Mock = require('mockjs');

const Random = Mock.Random;

module.exports = function (req, res) {
  const query = req.query;
  const data = Mock.mock({
    supplierid: query.id || 1,
    suppliername: 'suppliername',
    allnum: 111,
    'glasslist|1-5': [Mock.mock({
      billcode: 'billcode',
      name: 'name',
      'goodslist|1-5': [Mock.mock({
        goodsname: 'goodsname',
        odos: 'odos',
        optometry: 'optometry',
        num: 1,
        unit: 'unit',
        glassdate: Random.date(),
        'custommade|1': [2, 3],
        otherprop: 'othepotherpropotherpropotherprop',
      })],
    })],
  });
  const ret = { status: '000', data };
  res.json(ret);
};
