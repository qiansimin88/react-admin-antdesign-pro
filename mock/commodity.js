import mockjs from 'mockjs';

const categoryList = (req, res) => {
  res.json(mockjs.mock(
    {
      "entry": [
        {
          "categoryName": "全部",
          "id": 0
        },
        {
          "categoryName": "日用百货",
          "id": 1
        },
        {
          "categoryName": "家居建材",
          "id": 2
        },
        {
          "categoryName": "母婴用品",
          "id": 3
        },
        {
          "categoryName": "个护美妆",
          "id": 4
        },
        {
          "categoryName": "家用电器",
          "id": 5
        },
        {
          "categoryName": "手机数码",
          "id": 6
        },
        {
          "categoryName": "服装鞋包",
          "id": 7
        },
        {
          "categoryName": "食品饮料",
          "id": 8
        },
        {
          "categoryName": "珠宝饰品",
          "id": 9
        }
      ],
      "hasNext": false,
      "requestId": 1585795116127,
      "status": true,
      "timestamp": 1585795116127,
      "totalRecordSize": 0,
      "traceId": "cps-itemcenter_c20995d963a24c6c85a97015e7bc87a4"
    }
  ));
}

const itemList = (req, res) => {
  res.json(mockjs.mock({
    "entry|10-60": [
      {
        "appraisalCnt": 10,
        "auditStatus": 0,
        "couponName": "满1000减200",
        "firstCategory": "女装服饰",
        "gmtPromotionEnd": 1587380400000,
        "gmtPromotionStart": 1584493200000,
        "id": 605715399153,
        "inventory": 100020,
        "itemDetailImgUrls": [
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg"
        ],
        "itemImgUrls": [
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg"
        ],
        "itemPool": 0,
        "itemSource": 10,
        "itemTitle": "NANASTORE格子双面呢大衣女中长款双排扣复古休闲西装领毛呢外套",
        "itemSpecification": '商品规格1',
        "itemBrand": '品牌1',
        "inventoryAddNum": 999,
        "onSaleFlag": 1,
        "urlExistFlag": 0,
        "webPriceVO": {
          "commission": 9,
          "commissionRate": "20",
          "discountedPrice": 14999,
          "price": 50000,
          "dailyPrice": 121234,
          "planPrice": 11111
        },
        "shopName": "精品小屋",
        "spotInventory": 99,
        "volume": 1002
      },
    ],
    "hasNext": true,
    "requestId": 1584673398076,
    "status": true,
    "timestamp": 1584673398076,
    "totalRecordSize": 21
  }));
}

const itemDetail = (req, res) => {
  res.json(mockjs.mock(
    {
      "entry": {
        "shopId": "shopId111",
        "itemBrand":"itemBrand111",
        "itemUrl":"https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
        "itemSpecification":"itemSpecification111",
        "dailyPrice":111111,
        "historyLowPrice":22222,
        "planPrice":3333,
        "linkFee":20000,
        "shippingFlag":0,
        "planCommissionRate":20.15,
        "spotInventory":2000,
        "inventoryAddNum":3000,
        "productionDate":"2020-10-10",
        "shelfLife":"2020-09-09",
        "productSellPoint":"productSellPoint123",
        "itemRemark":"itemRemark1111",
        "dockingPeopleMobile":"12312341234",
        "promotionChannelName": "天猫",

        "urlExistFlag": 1,    //是否有链接：1.没有连接；2.有链接
        "auditStatus": 2,     //0-待审核,2-审核通过,3-审核拒绝
        "onSaleFlag": 1,      //是否上架：0-未上架,1-上架,2-下架
        "itemPool": 2,

        "appraisalCnt": 10,
        "couponName": "满1000减200",
        "firstCategory": "女装服饰",
        "gmtPromotionEnd": 1587380400000,
        "gmtPromotionStart": 1584493200000,
        "id": 605715399153,
        "inventory": 100020,
        "itemDetailImgUrls": [
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg"
        ],
        "itemImgUrls": [
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg"
        ],
        "vipItemImgUrls": [
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
          "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg",
        ],
        
        "itemId": 123,
        "itemSource": 1,
        "itemTitle": "NANASTORE格子双面呢大衣女中长款双排扣复古休闲西装领毛呢外套",
        "webPriceVO": {
          "commission": 9,
          "commissionRate": "20",
          "discountedPrice": 14999,
          "price": 50000,
          "planCommissionRate": "20.0000"
        },
        "shopName": "精品小屋",
        "volume": 1002
      },
      "hasNext": false,
      "requestId": 1585808648564,
      "status": true,
      "timestamp": 1585808648564,
      "totalRecordSize": 0
    }
  ));
}

const itemTakeOff = (req, res) => {
  res.json(mockjs.mock({
    "entry": true,
    "hasNext": false,
    "requestId": 1584929556642,
    "status": true,
    "timestamp": 1584929556642,
    "totalRecordSize": 0
  }));
}

const itemPoolChange = (req, res) => {
  res.json(mockjs.mock({
    "entry": true,
    "hasNext": false,
    "requestId": 1584929556642,
    "status": true,
    "timestamp": 1584929556642,
    "totalRecordSize": 0
  }));
}

const itemPassed = (req, res) => {
  res.json(mockjs.mock({
    "entry": true,
    "hasNext": false,
    "requestId": 1584929556642,
    "status": true,
    "timestamp": 1584929556642,
    "totalRecordSize": 0
  }));
}

const itemRejected = (req, res) => {
  res.json(mockjs.mock({
    "entry": true,
    "hasNext": false,
    "requestId": 1584929556642,
    "status": true,
    "timestamp": 1584929556642,
    "totalRecordSize": 0
  }));
}

const appraisalList = (req, res) => {
  res.json(mockjs.mock({
    "entry": [
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 0,
        "userId": 0
      },
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 1,
        "userId": 1
      },
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 2,
        "userId": 2
      },
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 3,
        "userId": 3
      },
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 4,
        "userId": 4
      },
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 5,
        "userId": 5
      },
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 6,
        "userId": 6
      },
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 7,
        "userId": 7
      },
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 8,
        "userId": 8
      },
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 9,
        "userId": 9
      },
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 10,
        "userId": 10
      },
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 11,
        "userId": 11
      },
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 12,
        "userId": 12
      },
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 13,
        "userId": 13
      },
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 14,
        "userId": 14
      },
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 15,
        "userId": 15
      },
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 16,
        "userId": 16
      },
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 17,
        "userId": 17
      },
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 18,
        "userId": 18
      },
      {
        "content": "赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞",
        "gmtCreate": 1584951017419,
        "targetId": 19,
        "userId": 19
      }
    ],
    "hasNext": false,
    "requestId": 1584951017420,
    "status": true,
    "timestamp": 1584951017420,
    "totalRecordSize": 0
  }));
}

const itemSyncLastTime = (req, res) => {
  res.json(mockjs.mock({
    "entry": "2020-03-20 19:30",
    "hasNext": false,
    "requestId": 1584955386636,
    "status": true,
    "timestamp": 1584955386636,
    "totalRecordSize": 0
  }));
}

const itemExcel = (req, res) => {
  res.json(mockjs.mock({
    "entry": true,
    "hasNext": false,
    "requestId": 1584955386636,
    "status": true,
    "timestamp": 1584955386636,
    "totalRecordSize": 0
  }));
}

const uploadPicture = (req, res) => {
  res.json(mockjs.mock({
    "entry": {
      "ossUrl": "https://img.alicdn.com/imgextra/i3/11140421/O1CN01IW5Dvf1EyrJDM6KtG_!!11140421.jpg"
    },
    "hasNext": false,
    "requestId": 1584955386636,
    "status": true,
    "timestamp": 1584955386636,
    "totalRecordSize": 0
  }));
}

const manageItemEdit = (req, res) => {
  res.json(mockjs.mock({
    "entry": true,
    "hasNext": false,
    "requestId": 1584955386636,
    "status": true,
    "timestamp": 1584955386636,
    "totalRecordSize": 0
  }));
}

const itemEdit = (req, res) => {
  res.json(mockjs.mock({
    "entry": true,
    "hasNext": false,
    "requestId": 1584955386636,
    "status": true,
    "timestamp": 1584955386636,
    "totalRecordSize": 0
  }));
}


export default {
  'GET /cps-itemcenter/manage/category/list': categoryList,
  'POST /cps-itemcenter/manage/item/list': itemList,
  'GET /cps-itemcenter/manage/item/get': itemDetail,
  'GET /cps-itemcenter/manage/item/itemTakeOff': itemTakeOff,
  'GET /cps-itemcenter/manage/item/pool/change': itemPoolChange,
  'GET /cps-itemcenter/manage/audit/item/passed': itemPassed,
  'GET /cps-itemcenter/manage/audit/item/rejected': itemRejected,
  'POST /cps-itemcenter/manage/appraisal/list': appraisalList,
  'GET /cps-itemcenter/manage/item/sync': itemRejected,
  'GET /cps-itemcenter/manage/item/sync/last_time': itemSyncLastTime,
  'POST /cps-itemcenter/manage/item/excel': itemExcel,
  'POST /cps-itemcenter/oss/uploadPicture': uploadPicture,
  'POST /cps-itemcenter/manage/item/import/detail': manageItemEdit,
  'POST /cps-itemcenter/manage/item/import/link': manageItemEdit,
  'POST /cps-itemcenter/manage/item/edit': itemEdit
};