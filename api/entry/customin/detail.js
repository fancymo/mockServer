// 采购入库、定做入库列表
// ------------------------
const Mock = require('mockjs');

const Random = Mock.Random;

module.exports = function (req, res) {
  const query = req.query;
  const data = Mock.mock({
    id: query.id || 1,
    billcode: 'ja28882',
    audituser: '操作人',
    auditdate: Random.date(),
    depotname: '入库仓库',
    type: 3,
    'state|1': [1],
    suppliername: '供应商',
    medidevicecert: '医疗器械证',
    businesslicence: '营业执照证',
    authcert: 'asdasd',
    taxrate: 10,
    relatebillcode: 'sasd',
    reduser: '王缪缪',
    reddate: Random.date(),
    redmemo: 'asdasd',
    depotinmemo: '入库备注',
    taxamount: '10',
    amount: 'sad',
    pageinfo: Mock.mock({
      pageSize: query.pagesize || 10,
      pageNum: Number(query.pagenum) || 1,
      'pages|1-10': 1,
      'list|10': [Mock.mock({
        goodsname: '商品名称',
        odos: 'osod',
        unit: '单位',
        num: '122',
        bidprice: '199',
        taxamount: '税额',
        amount: '合计',
        salecode: '配镜单号',
        factoryname: '生产厂家',
        batchid: 'batchid',
        memo: '备注',
      })],
    }),
  });
  const ret = { status: '000', data };
  res.json(ret);
};
