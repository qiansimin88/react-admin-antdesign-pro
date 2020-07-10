import mockjs from 'mockjs';

const anchorLists = (req, res) => {
  res.json(mockjs.mock({
    "requestId": 1584346587376,
    "status": true,
    "message": null,
    "exception": null,
    "responseCode": null,
    "totalRecordSize|1-29": 11,
    "timestamp": 1584346587376,
    "entry|10": [{
      "anchorId": "123",
      "level": 0,
      "commission": 5.1,
      "headImage": "",
      "nickName": "张三",
      "mobile": "13675980001",
      "popularizePlatform": "抖音，快手",
      "fansNum|100-9999999": 1,
      "mainCategory": [
        { "categoryName": "日用百货", "id": 1 },
        { "categoryName": "家居建材", "id": 2 },
        { "categoryName": "母婴用品", "id": 3 }
      ],
      "historySale|1-9999.2": 1,
      "registerTime": "2020-03-16 16:00:00",
      "taoBaoNickName": "张三"
    }],
    "hasNext": false
  }));
};

const anchorDetail = (req, res) => {
  res.json(mockjs.mock(
    {
      "entry":
      {
        "categoryCommissionRate":
          [
            { "categoryId": 1, "commissionRate": 0.10 },
            { "categoryId": 1, "commissionRate": 0.12 },
            { "categoryId": 2, "commissionRate": 0.20 },
            { "categoryId": 2, "commissionRate": 0.16 },
            { "categoryId": 3, "commissionRate": 0.21 },
            { "categoryId": 4, "commissionRate": 0.19 },
            { "categoryId": 5, "commissionRate": 0.22 },
            { "categoryId": 6, "commissionRate": 0.32 },
            { "categoryId": 7, "commissionRate": 0.51 },
            { "categoryId": 8, "commissionRate": 0.11 },
            { "categoryId": 9, "commissionRate": 0.28 }
          ],
        "anchorInfo": {
          "anchorId": "2088020000000009",
          "fansNum": "100",
          "historySale": "100",
          "level": 0,
          "taoBaoNickName": "张三",
          "mainCategory": [
            { "categoryName": "日用百货", "id": 1 },
            { "categoryName": "家居建材", "id": 2 },
            { "categoryName": "母婴用品", "id": 3 }
          ],
          "mobile": "13820283212",
          "nickName": "Zzz",
          "pidSeted": true,
          "popularizePlatform": "快手,淘宝",
          "registerTime": "2020-03-27 11:17:37",
          "status": "PASS"   //AUDIT PASS REJECT
        },
        "vertifyRecord": [{
          "vertifyStatus": "REJECT",
          "vertifyTime": "2020-10-10",
          "rejectReason": "1234"
        }]
      },
      "hasNext": false,
      "requestId": 1585884470145,
      "status": true,
      "timestamp": 1585884470145,
      "totalRecordSize": 0,
      "traceId": "0"
    }
  ));
}

const anchorLevelList = (req, res) => {
  res.json(mockjs.mock({
    "requestId": 1584346587376,
    "status": true,
    "message": null,
    "exception": null,
    "responseCode": null,
    "totalRecordSize": 1,
    "timestamp": 1584346587376,
    "entry": [{
      "level": 0,
      "commission": "5"
    }, {
      "level": 1,
      "commission": "10"
    }, {
      "level": 2,
      "commission": "15"
    }],
    "hasNext": false
  }));
};

const anchorModifyLevel = (req, res) => {
  res.json(mockjs.mock({
    "requestId": 1584346587376,
    "status": true,
    "message": null,
    "exception": null,
    "responseCode": null,
    "totalRecordSize": 0,
    "timestamp": 1584346587376,
    "entry": true,
    "hasNext": false
  }));
};

const anchorAudit = (req, res) => {
  res.json(mockjs.mock({
    "requestId": 1584346587376,
    "status": true,
    "message": null,
    "exception": null,
    "responseCode": null,
    "totalRecordSize": 0,
    "timestamp": 1584346587376,
    "entry": true,
    "hasNext": false
  }));
};

const anchorInviteCodeList = (req, res) => {
  res.json(mockjs.mock({
    "requestId": 1584346587376,
    "status": true,
    "message": null,
    "exception": null,
    "responseCode": null,
    "totalRecordSize": 1,
    "timestamp": 1584346587376,
    "entry|10": [{
      "inviteCode": "3X5Tyijs",
      "used": '@boolean(3, 7, true)',
    }],
    "hasNext": false
  }));
}

const anchorInviteCodeCreate = (req, res) => {
  res.json(mockjs.mock({
    "requestId": 1584346587376,
    "status": true,
    "message": null,
    "exception": null,
    "responseCode": null,
    "totalRecordSize": 1,
    "timestamp": 1584346587376,
    "entry": true,
    "hasNext": false
  }));
}

const getTaobaoAccountInfo = (req, res) => {
  res.json(mockjs.mock(
    {
      "entry": [
        {
          "groupId": 123,
          "groupName": "张三"
        }
      ],
      "hasNext": false,
      "requestId": 1585107538876,
      "status": true,
      "timestamp": 1585107538876,
      "totalRecordSize": 0
    }
  ));
}

export default {
  'POST /usercenter/backend/anchor/list': anchorLists,
  'GET /usercenter/backend/anchor/get': anchorDetail,
  'POST /usercenter/backend/anchor/level/list': anchorLevelList,
  'POST /usercenter/backend/anchor/modifyLevel': anchorModifyLevel,
  'POST /usercenter/backend/anchor/audit': anchorAudit,
  'POST /usercenter/backend/anchor/inviteCode/list': anchorInviteCodeList,
  'GET /usercenter/backend/anchor/inviteCode/create': anchorInviteCodeCreate,
  'GET /usercenter/backend/anchor/getTaobaoAccountInfo': getTaobaoAccountInfo,
};