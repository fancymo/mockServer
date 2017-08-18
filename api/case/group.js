// 用户列表
// ------------------------
const Mock = require('mockjs');

const Random = Mock.Random;

module.exports = function (req, res) {
  const query = req.query;
  console.log(req.cookies);
  const ret = Mock.mock({
    status: '000',
    data: [
        {
            "_id": "595354915718aebff80c8743",
            "code": "datagroup_code1",
            "title": "基础检查(test)",
            "key": "base_check",
            "metadata_code": "metadata_1",
            "items": [
                {
                    "id": "001",
                    "title": "裸眼视力",
                    "key": "dgi1 key",
                    "description": "dgi1 desc",
                    "unit": "unit1",
                    "format": "裸眼视力：OD&[右眼视力]，OS&[左眼视力]",
                    "items": [
                        {
                            "id": "0011",
                            "title": "OD",
                            "key": "dgi0011 key",
                            "description": "dgi1 desc",
                            "unit": "unit1",
                            "format": "OD",
                            "required": true,
                            "defaultValue": "default value",
                            "reference": {
                                "type": null,
                                "group_id": "002",
                                "group_code": "code_ref",
                                "group_key": "564",
                                "group_title": null,
                                "collection": null,
                                "item_id": null,
                                "item_key": null,
                                "item_title": null,
                                "item_path": null
                            },
                            "tips": "视力"
                        },
                        {
                            "id": "0012",
                            "title": "OS",
                            "key": "dgi0012 key",
                            "description": "dgi1 desc",
                            "unit": "unit1",
                            "format": "原镜视力：&[原镜视力]",
                            "required": true,
                            "defaultValue": "default value",
                            "reference": {
                                "type": null,
                                "group_id": "002",
                                "group_code": "code_ref",
                                "group_key": "564",
                                "group_title": null,
                                "collection": null,
                                "item_id": null,
                                "item_key": null,
                                "item_title": null,
                                "item_path": null
                            },
                            "tips": "视力"
                        },
                        {
                            "id": "0013",
                            "title": "OU",
                            "key": "dgi0013 key",
                            "description": "dgi1 desc",
                            "unit": "unit1",
                            "format": "原镜视力：&[原镜视力]",
                            "required": true,
                            "defaultValue": "default value",
                            "reference": {
                                "type": null,
                                "group_id": "002",
                                "group_code": "code_ref",
                                "group_key": "564",
                                "group_title": null,
                                "collection": null,
                                "item_id": null,
                                "item_key": null,
                                "item_title": null,
                                "item_path": null
                            },
                            "tips": "视力"
                        }
                    ],
                    "required": true,
                    "defaultValue": "default value",
                    "reference": {
                        "type": null,
                        "group_id": "002",
                        "group_code": "code_ref",
                        "group_key": "564",
                        "group_title": null,
                        "collection": null,
                        "item_id": null,
                        "item_key": null,
                        "item_title": null,
                        "item_path": null
                    },
                    "tips": "tip1"
                },
                {
                    "id": "002",
                    "title": "原镜视力",
                    "key": "dgi2 key",
                    "description": "dgi1 desc",
                    "unit": "unit1",
                    "format": "原镜视力：&[原镜视力]",
                    "required": true,
                    "defaultValue": "default value",
                    "reference": {
                        "type": null,
                        "group_id": "002",
                        "group_code": "code_ref",
                        "group_key": "564",
                        "group_title": null,
                        "collection": null,
                        "item_id": null,
                        "item_key": null,
                        "item_title": null,
                        "item_path": null
                    },
                    "tips": "tip1"
                },
                {
                    "id": "003",
                    "title": "原镜近视力",
                    "key": "dgi1 key",
                    "description": "dgi1 desc",
                    "unit": "unit1",
                    "format": "原镜近视力：&[原镜近视力]",
                    "required": true,
                    "defaultValue": "default value",
                    "reference": {
                        "type": null,
                        "group_id": "002",
                        "group_code": "code_ref",
                        "group_key": "564",
                        "group_title": null,
                        "collection": null,
                        "item_id": null,
                        "item_key": null,
                        "item_title": null,
                        "item_path": null
                    },
                    "tips": "tip1"
                },
                {
                    "id": "004",
                    "title": "瞳孔对光反射",
                    "key": "dgi1 key",
                    "description": "dgi1 desc",
                    "unit": "unit1",
                    "format": "瞳孔对光反射：&[瞳孔对光反射]",
                    "required": true,
                    "defaultValue": "default value",
                    "reference": {
                        "type": null,
                        "group_id": "002",
                        "group_code": "code_ref",
                        "group_key": "564",
                        "group_title": null,
                        "collection": null,
                        "item_id": null,
                        "item_key": null,
                        "item_title": null,
                        "item_path": null
                    },
                    "tips": "tip1"
                },
                {
                    "id": "005",
                    "title": "瞳孔对光反射",
                    "key": "dgi1 key",
                    "description": "dgi1 desc",
                    "unit": "unit1",
                    "format": "瞳孔对光反射：&[瞳孔对光反射]",
                    "items": [
                        {
                            "id": "0051",
                            "title": "正常(MG阴性)",
                            "key": "dgi0011 key",
                            "description": "dgi1 desc",
                            "unit": "unit1",
                            "format": "OD",
                            "required": true,
                            "defaultValue": "default value",
                            "reference": {
                                "type": null,
                                "group_id": "002",
                                "group_code": "code_ref",
                                "group_key": "564",
                                "group_title": null,
                                "collection": null,
                                "item_id": null,
                                "item_key": null,
                                "item_title": null,
                                "item_path": null
                            },
                            "tips": "视力"
                        },
                        {
                            "id": "0052",
                            "title": "异常",
                            "key": "dgi0012 key",
                            "description": "dgi1 desc",
                            "unit": "unit1",
                            "format": "原镜视力：&[原镜视力]",
                            "required": true,
                            "defaultValue": "default value",
                            "reference": {
                                "type": null,
                                "group_id": "002",
                                "group_code": "code_ref",
                                "group_key": "564",
                                "group_title": null,
                                "collection": null,
                                "item_id": null,
                                "item_key": null,
                                "item_title": null,
                                "item_path": null
                            },
                            "tips": "视力"
                        }
                    ],
                    "required": true,
                    "defaultValue": "default value",
                    "reference": {
                        "type": null,
                        "group_id": "002",
                        "group_code": "code_ref",
                        "group_key": "564",
                        "group_title": null,
                        "collection": null,
                        "item_id": null,
                        "item_key": null,
                        "item_title": null,
                        "item_path": null
                    },
                    "tips": "tip1"
                }
            ],
            "format": "hello_format",
            "desctiption": "给马姐测试用的基础检查！！！！！！！！！！！！！",
            "create_time": "2017-06-28 07:02:41",
            "enable": true
        }
    ],
  });
  res.cookie('name', 'value', {
    expires: new Date(Date.now() + 10000)
  });
  res.json(ret);
};
