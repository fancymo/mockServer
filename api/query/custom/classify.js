// 定做查询列表
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
      total: '合计',
      supplierid: '@integer(1, 10)',
      suppliername: Random.string(5),
    })],
  });
  const ret = { status: '000', data };
  res.json(ret);
};
