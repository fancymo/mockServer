// 采购入库、定做入库列表
// ------------------------
const Mock = require('mockjs');

const Random = Mock.Random;

module.exports = function (req, res) {
  const query = req.query;
  const data = Mock.mock({
    pageSize: query.pagesize || 10,
    pageNum: Number(query.pagenum) || 1,
    'pages|1-10': 1,
    'list|10': [Mock.mock({
      id: '@integer(1, 10)',
      billcode: Random.string(5),
      name: '张张',
      acceptdate: Random.date(),
      'custommade|1': [2, 3],  // 2 来架，3 非来架
      outuser: '三三',
      'state|1': query.state || [21, 22, 27], // 21 未领用，22 已领用， 27 报损未领用
    })],
  });
  const ret = { status: '000', data };
  res.json(ret);
};
