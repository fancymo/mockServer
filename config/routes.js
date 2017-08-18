const Index = require('../api');
const Login = require('../api/login');
const EntryInList = require('../api/entry/in/inlist');
const EntryCustomInGoods = require('../api/entry/customin/arrivelist');
const EntryCustomInDetail = require('../api/entry/customin/detail');
const EntryCustomInRed = require('../api/entry/customin/red');
const EntryCustomInInput = require('../api/entry/customin/input');

const ManageCustomDrugList = require('../api/manage/customdrug/list');
const ManageCustomDrugDetail = require('../api/manage/customdrug/detail');

const QueryCustomlist = require('../api/query/custom/list');
const QueryCustomclassify = require('../api/query/custom/classify');
const QueryCustomdetail = require('../api/query/custom/detail');

const CommonUser = require('../api/common/user');

const CaseGroup = require('../api/case/group');

module.exports = (app) => {
  app.get('/', Index);

  app.post('/login', Login);

  /* 采购入库 */
  app.get('/depot/depot_in_lists', EntryInList); // 入库单列表
  app.get('/depot/customin/to_arrive_lists', EntryCustomInGoods); // 入库单列表
  app.get('/depot/customin/in_detail', EntryCustomInDetail); // 入库单列表
  app.get('/depot/customin/add_in_input', EntryCustomInInput); // 入库单列表
  app.post('/depot/customin/in_red', EntryCustomInRed);  // 已入库冲红

  app.get('/common/depot_users', CommonUser); // 用户列表

  app.get('/depot/custom/to_receive_lists', ManageCustomDrugList);  // 定做领用
  app.get('/depot/custom/receive_detail', ManageCustomDrugDetail); // 定做领用详情

  app.get('/depot/query/custom_query', QueryCustomlist); // 定做查询
  app.get('/depot/query/custom_statistics', QueryCustomclassify); // 定做查询统计
  app.get('/depot/query/custom_view', QueryCustomdetail); // 定做查询详情

  app.get('/data-group/list', CaseGroup); // 电子病历
};
