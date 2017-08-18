// 采购入库、定做入库列表
// ------------------------
const Mock = require('mockjs');

const Random = Mock.Random;

module.exports = function (req, res) {
  const query = req.query;
  const data = Mock.mock({
    id: query.id || 1,
    cardno: '就诊卡号',
    billcode: '726627s',
    name: '姓名',
    age: '年龄',
    'gender|1': [0, 1],
    phone: '联系方式',
    address: '地址',
    pdd: 'pdd',
    pdn: 'pdn',
    ph: 'ph',
    pmemo: 'pmemo',
    lidh: 'lidh',
    dispnsod: 'nsd',
    dispnhod: 'nhd',
    dispnaod: 'nad',
    dispnvod: '1',
    dispnpod: '2',
    dispnsos: '3',
    dispnhos: '4',
    dispnaos: '5',
    dispnvos: '6',
    dispnpos: '4',
    dispdsod: '3',
    dispdhod: '2',
    dispdaod: '3',
    dispdvod: '4',
    dispdpod: '3',
    dispdsos: '2',
    dispdhos: '3',
    dispdaos: '4',
    dispdvos: '5',
    dispdpos: '3',
    'state|1': [27],
    memo: 'memo',
    'allarrive|1': [1],  // 1: 完全到货
    outuser: '出库人',  // temp
    'sameuser|1': [1],  // 1: 相同操作人
    'goodslist|1-10': [Mock.mock({
      itemid: 123,
      goodsname: '物品名称',
      batchno: '批号',
      batchid: '批次',
      spec: '规格',
      color: '颜色',
      sphere: '球面',
      cylinder: '柱面',
      num: '数量',
      unit: '单位',
      memo: '备注',
    })],
    'badlist|1-10': [Mock.mock({
      itemid: 123,
      goodsname: '物品名称',
      batchno: '批号',
      batchid: '批次',
      spec: '规格',
      color: '颜色',
      sphere: '球面',
      cylinder: '柱面',
      num: '数量',
      unit: '单位',
      memo: '备注',
    })],
  });
  const ret = { status: '000', data };
  res.json(ret);
};
