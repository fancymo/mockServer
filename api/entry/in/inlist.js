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
      billcode: Random.string(5),
      auditdate: Random.date(),
      type: query.type || 1,
      id: '@integer(1, 10)',
      'audituser|1': ['user01', 'user02', 'user03'],
      'state|1': [1, 8],
      'supplierid|1-10': 1,
      'suppliername|1': ['供应商01', '供应商03'],
    })],
  });
  const ret = { status: '000', data };
  res.json(ret);
};
