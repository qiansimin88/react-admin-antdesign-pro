import mockjs from 'mockjs';

const addCustomerField = (req, res) => {
  res.json(mockjs.mock(
    {
      "requestId": 1584346587376,
      "status": true,
      "message": null,
      "exception": null,
      "responseCode": null,
      "totalRecordSize": 0,
      "timestamp": 1584346587376,
      "entry": true,
      "hasNext": false
    }
  ));
};

const anchorSettleDetailByDate = (req, res) => {
  res.json(mockjs.mock(
    {
      "entry": {
        "anchorId": "122121",
        "defendRefund": 123,
        "defendRefundRevise": 123,
        "distributorCommission": 123123,
        "distributorCommissionRevise": 123,
        "freezeAmount": 123,
        "freezeAmountRevise": 123,
        "level": 1,
        "monthlyAmount": 123456,
        "monthlyAmountRevise": 123,
        "nickName": "飞过队长",
        "replenishAmount": 123,
        "replenishAmountRevise": 123,
        "returnBusinessAmount": 123,
        "returnBusinessAmountRevise": 123,
        "settleDate": "yyyy-MM-dd 至 yyyy-MM-dd",
        "settleStatus": 2,
        "settlementId": 111,
        "specialServiceAmount": 123,
        "specialServiceAmountRevise": 123,
        "tbServiceAmount": 123,
        "tbServiceAmountRevise": 123,
        "xxbServiceAmount": 123,
        "xxbServiceAmountRevise": 123,
        "customerFieldList|1-10": [
          {
            "anchorSettleDetailId": 1111,
            "customerFieldId": 2222,
            "customerFieldName": "自定义项名称",
            "customerFieldValue": "333"
          }
        ]
      },
      "hasNext": false,
      "requestId": 1585107822580,
      "status": true,
      "timestamp": 1585107822580,
      "totalRecordSize": 0
    }
  ));
};

const anchorSettleDetailById = (req, res) => {
  res.json(mockjs.mock(
    {
      "requestId": 1584346587376,
      "status": true,
      "message": null,
      "exception": null,
      "responseCode": null,
      "totalRecordSize": 0,
      "timestamp": 1584346587376,
      "entry": true,
      "hasNext": false
    }
  ));
};

const anchorSettleList = (req, res) => {
  res.json(mockjs.mock(
    {
      "entry": [
        {
          "anchorId": "a1111",
          "headImage": "headurl",
          "level": 111,
          "monthSettleStatusList": [
            {
              "settleMonth": "2019-11",
              "status": 0
            },
            {
              "settleMonth": "2019-12",
              "status": 0
            },
            {
              "settleMonth": "2020-01",
              "status": 1
            },
            {
              "settleMonth": "2020-02",
              "status": 1
            }
          ],
          "nickName": "abc",
          "popularizePlatform": "快手",
          "settlementId": 111
        }
      ],
      "hasNext": true,
      "requestId": 1585105022849,
      "status": true,
      "timestamp": 1585105022849,
      "totalRecordSize": 10
    }
  ));
};

const anchorSettleOrderList = (req, res) => {
  res.json(mockjs.mock(
    {
      "entry|1-20": [
        {
          "commission": 8888,
          "itemImg": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          "itemName": "衣服",
          "itemAmount": 12345,
          "itemQuantity": 1,
          "orderCreateTime": "2019-11-22",
          "orderNo": "201212112198912",
          "payTime": "2019-11-21",
          "refundSuccTime": "2019-11-11",
          "returnBusinessAmount": 1111,
          "settlementMoney": 2222,
          "settlementTime": "2019-11-11",
          "itemCategoryName": "哈",
          "specialServiceAmount": 3333,
          "subOrderCode": "2012121212121",
          "tbServiceAmount": 4444,
          "userPayMoney": 5555,
          "xxbServiceAmount": 6666
        }
      ],
      "hasNext": true,
      "requestId": 1585132152548,
      "status": true,
      "timestamp": 1585132152548,
      "totalRecordSize": 100
    }
  ));
};

const confirmPay = (req, res) => {
  res.json(mockjs.mock(
    {
      "requestId": 1584346587376,
      "status": true,
      "message": null,
      "exception": null,
      "responseCode": null,
      "totalRecordSize": 0,
      "timestamp": 1584346587376,
      "entry": true,
      "hasNext": false
    }
  ));
};

const deleteCustomerField = (req, res) => {
  res.json(mockjs.mock(
    {
      "requestId": 1584346587376,
      "status": true,
      "message": null,
      "exception": null,
      "responseCode": null,
      "totalRecordSize": 0,
      "timestamp": 1584346587376,
      "entry": true,
      "hasNext": false
    }
  ));
};

const updateMoney = (req, res) => {
  res.json(mockjs.mock(
    {
      "requestId": 1584346587376,
      "status": true,
      "message": null,
      "exception": null,
      "responseCode": null,
      "totalRecordSize": 0,
      "timestamp": 1584346587376,
      "entry": true,
      "hasNext": false
    }
  ));
};

const getCustomerFieldItems = (req, res) => {
  res.json(mockjs.mock(
    {
      "entry": [
        {
          "customerFieldName": "自定义项1",
          "customerFieldType": 1
        },
        {
          "customerFieldName": "自定义项2",
          "customerFieldType": 2
        },
        {
          "customerFieldName": "自定义项3",
          "customerFieldType": 3
        }
      ],
      "hasNext": false,
      "requestId": 1585127458867,
      "status": true,
      "timestamp": 1585127458867,
      "totalRecordSize": 0
    }
  ));
};


export default {
  'GET /settlement/back/addCustomerField': addCustomerField,
  'GET /settlement/back/anchorSettleDetailByDate': anchorSettleDetailByDate,
  'GET /settlement/back/anchorSettleDetailById': anchorSettleDetailById,
  'POST /settlement/back/anchorSettleList': anchorSettleList,
  'GET /settlement/back/anchorSettleOrderList': anchorSettleOrderList,
  'GET /settlement/back/confirmPay': confirmPay,
  'GET /settlement/back/deleteCustomerField': deleteCustomerField,
  'GET /settlement/back/updateMoney': updateMoney,
  'GET /settlement/back/getCustomerFieldItems': getCustomerFieldItems,
};