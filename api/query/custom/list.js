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
      goodsname: Random.string(5),
      odos: '@integer(1, 10)',
      optometry: '处方',
      num: 1,
      glassdate: Random.date(),
      'custommade|1': [2, 3],
      salecode: 'jjjsjhhj',
      suppliername: '经销商',
      'isalert|1': [0, 1], // 1 报警
    })],
  });
  const ret = { status: '000', data };
  res.json(ret);
};
