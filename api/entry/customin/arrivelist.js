// 定做商品列表
// ------------------------
const Mock = require('mockjs');

const Random = Mock.Random;

module.exports = function (req, res) {
  const query = req.query;
  const data = {
    supplierid: '1',
    suppliername: '供应商名称',
    pageinfo: Mock.mock({
      pageSize: query.pagesize || 10,
      pageNum: Number(query.pagenum) || 1,
      'pages|1-10': 1,
      'list|10': [Mock.mock({
        id: 1,
        goodsname: '商品名称',
        odos: 'osd',
        optometry: '定做属性',
        num: 10,
        glassdate: '2017-05-11',
        'custommade|1': [2, 3],
        salecode: 'a22e22',
        unit: 'unit',
        factoryname: '生产厂商',
      })],
    }),
  };
  const ret = { status: '000', data };
  res.json(ret);
};
