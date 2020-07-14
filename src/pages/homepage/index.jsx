import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Form as FromAt } from '@ant-design/compatible';
import { connect } from 'dva';
import router from 'umi/router';
import React, { Component } from 'react';
import { Spin, Tabs, Row, Col, Input, Button, Form, Radio, message } from 'antd';
import merchantApis from '@/apis/merchant';

// import EditTable from './components/EditTable';
// import LinkDetailTable from './components/LinkDetailTable';

// import ItemPool from './components/ItemPool';
// import AppraisalList from './components/AppraisalList';

const TabPane = Tabs.TabPane

class CommodityDetailPage extends Component {
  constructor() {
    super();
    this.state = {
      info: null,
      id: '',
    }
  }

  render() {
    
    return (
      <PageHeaderWrapper >
        <div className="global-detail-page" style={{
          textAlign: 'center',
          padding: '300px 0',
          fontSize: 50
        }}>
          demo系统
        </div>
      </PageHeaderWrapper>
    );

    // return (
    //   <PageHeaderWrapper extraContent={<div>111</div>}>
    //     111
    //   </PageHeaderWrapper>
    // );
  }
}

export default FromAt.create()(connect(({ commodityDetail, loading }) => ({
  commodityDetail,
  loadingAll: loading.models.commodityDetail
}))(CommodityDetailPage));

// <Tabs defaultActiveKey="1">
        //   <TabPane tab="Tab 1" key="1">
            
        //   </TabPane>
        //   <TabPane tab="Tab 2" key="2">
           
        //   </TabPane>
        //   <TabPane tab="Tab 3" key="3">
        //   </TabPane>
        // </Tabs>
/*



<Form
              {...formItemLayout}
              name="register"
              onSubmit={this.handleSubmit.bind(this)}
              className={styles['module-info-form']}
            >
              <Form.Item label="登录名" >
                {userInfo.name}
              </Form.Item>

              <Form.Item label="性别（可选）" >
                {getFieldDecorator('sex', {
                  initialValue: userInfo.sex
                })(<Radio.Group>
                  <Radio value="0">男</Radio>
                  <Radio value="1">女</Radio>
                </Radio.Group>)}
              </Form.Item>

              <Form.Item label="部门" >
                {userInfo.department}
              </Form.Item>
              <Form.Item label="职位" >
                产品经理
              </Form.Item>
              <Form.Item label="姓名" >
                宙斯盾
              </Form.Item>
              <Form.Item label="联系手机" >
                18888888888
              </Form.Item>

              

              <Form.Item label="微信账号" >
                {getFieldDecorator('wechat', {
                  initialValue: userInfo.wechat,
                })(<Input />)}
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  保存
                </Button>
              </Form.Item>
            </Form>


*/