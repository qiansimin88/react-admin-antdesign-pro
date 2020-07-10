import mockjs from 'mockjs';

const login = (req, res) => {
  res.json(mockjs.mock(
    {
      "entry": {
        "token": "f1855199-28a8-437e-92e1-431213b107c5"
      },
      "hasNext": false,
      "requestId": 1585107080830,
      "status": true,
      "timestamp": 1585107080830,
      "totalRecordSize": 0
    }
  ));
};

const getInfo = (req, res) => {
  res.json(mockjs.mock(
    {
      "entry": {
        "name": "test"
      },
      "hasNext": false,
      "requestId": 1585107538876,
      "status": true,
      "timestamp": 1585107538876,
      "totalRecordSize": 0,
      // "responseCode": 1000010001
    }
  ));
};

const logout = (req, res) => {
  res.json(mockjs.mock(
    {
      "entry": true,
      "hasNext": false,
      "requestId": 1585106520088,
      "status": true,
      "timestamp": 1585106520088,
      "totalRecordSize": 0
    }
  ));
};

export default {
  'POST /usercenter/operate/login': login,
  'GET /usercenter/operate/get': getInfo,
  'GET /usercenter/operate/logout': logout,
};
