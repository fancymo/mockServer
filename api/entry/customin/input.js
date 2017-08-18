// 采购入库、定做入库列表
// ------------------------
const Mock = require('mockjs');

const Random = Mock.Random;

module.exports = function (req, res) {
  const query = req.query;
  const data = Mock.mock({
    supplierid: 'supplierid',
    suppliername: 'suppliername',
    audituser: 'audituser',
    auditdate: Random.date(),
    billcode: 'billcode',
    medidevicecert: '医疗器械证',
    businesslicence: '营业执照证',
    authcert: 'asdasd',
    taxrate: 10,
  });
  const ret = { status: '000', data };
  res.json(ret);
};
