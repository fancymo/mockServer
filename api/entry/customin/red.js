// 采购入库、定做入库列表
// ------------------------
const Mock = require('mockjs');

const Random = Mock.Random;

module.exports = function (req, res) {
  const body = req.body;
  const { id, redmemo } = body;
  console.log('redmemo:', redmemo, 'id:', id);
  const data = {};
  const ret = { status: '000', data };
  res.json(ret);
};
