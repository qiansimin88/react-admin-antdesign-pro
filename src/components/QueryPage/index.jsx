import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Form as FromAt } from '@ant-design/compatible';
import { connect } from 'dva';
import router from 'umi/router';
import React, { Component } from 'react';
import { Table, Card, Popover, Button, Popconfirm, Form, Input, Select, Row, Col, Tabs, Result} from 'antd';
import { formatDate } from '@/utils/utils'

const { Option } = Select;
const { TabPane } = Tabs;
const { Meta } = Card;
const exportStatus = {
  0: '正在导出',
  1: '导出成功',
  2: '导出失败',
}
/*
queryInfo: {},
total: 0,
result: [],
form:
*/
@Form.create()
export default class Module extends Component {
  constructor() {
    super();
    this.state = {
      result: [],
      total: 0,
      queryInfo: {},
      expand: false,
    }
  }
  
  // componentWillReceiveProps() {
  //   // console.log(this.props.formOpt, 'will');
  // }
  
  componentDidMount() {

    
    
    this.props.onRef(this)
    // // console.log(this.props.formOpt, 'componentDidMount');
    const {
      initQuery,
      api,
      queryInfo,
      total,
      result,
      extraBtns,
      forms,
      columns } = this.props;
    this.setState({
      initQuery,
      api,
      queryInfo,
      total,
      result,
      extraBtns,
      forms,
      columns
    }, () => {
      setTimeout(() => {
        this.handleSubmit();
      }, 20);
      // this.queryList();
    });
  }

  getQueryInfo() {
    return this.state.queryInfo;
  }

  async queryList() {
    // console.log(this.props.api)
    const queryInfo = this.state.queryInfo;
    const res = await this.props.api(queryInfo);
    if (res === false) {
      return;
    }
    const result = res.entry;
    const total = res.totalRecordSize;
    this.setState({
      result,
      total,
    });
  }

  //分页
  paginationChange = (pageNum) => {
    let queryInfo = this.state.queryInfo;
    queryInfo = {
      ...queryInfo,
      pageNum
    }
    this.updateQueryInfo(queryInfo);
  }

  //分页Size
  handleSizeChange = (index, value) => {
    let queryInfo = this.state.queryInfo;
    queryInfo = {
      ...queryInfo,
      pageNum: 1,
      pageSize: value
    }
    this.updateQueryInfo(queryInfo);
  }

  handleFormReset() {
    this.props.form.resetFields();
  }

  handleSubmit() {
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      let queryInfo = this.state.queryInfo;
      queryInfo = {
        ...queryInfo,
        ...values,
        pageNum: 1,
      }
      this.updateQueryInfo(queryInfo);
    });
  }

  updateQueryInfo(queryInfo) {
    this.setState({
      queryInfo
    }, () => {
      this.queryList();
    });
  }

  handleTabChange(value) {
    let queryInfo = this.state.queryInfo;
    queryInfo = {
      ...queryInfo,
      [this.props.tabKey || 'tabKey']: value,
    };
    this.updateQueryInfo(queryInfo);
  }

  renderFormItem(item) {
    const { getFieldDecorator } = this.props.form;
    if (item.realEl) {
      return item.realEl;
    }
    let el;
    if (item.el) {
      el = item.el;
    } else if (item.select) {
      el = <Select size="small" filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      } showSearch={true} style={{width: item.width || 150}} placeholder={item.placeholder || '请选择'}>
        {
          item.select.map((it, index) => {
            return <Select.Option key={index}  aria-label={it.value} value={it.value}>{it.name}</Select.Option>
          })
        }
      </Select>
    } else {
      el = <Input placeholder="请输入" size="small" />
    }
    return <Form.Item label={item.label} style={{ marginBottom: 10 }} >
    {getFieldDecorator(item.key, item.config)(el)}
  </Form.Item>
  
  }

  renderForm(queryForm) {
    const { getFieldDecorator } = this.props.form;
    const { forms, expand } = this.state;

    return <div>
      <Form layout="inline" onSubmit={this.handleSubmit.bind(this)}>
          {/* {queryForm.map((item, index) => <Col md={6} sm={24} key={index}>
            <Form.Item label={item.label} style={{ marginBottom: 10 }}>
              {getFieldDecorator(item.key, item.config)(
                this.renderFormItem(item)
              )}
            </Form.Item>
          </Col>)} */}

          {queryForm.map((item, index) => {
            if (item.initHide && !this.state.expand) {
              return null;
            }
            return <span className="form-item" key={index}>
            {this.renderFormItem(item)}
          </span>
          }
          )}


        {queryForm.length > 0 && <span className="form-item" key={'abc'}>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="small">
              查询
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset.bind(this)} size="small">
              重置
            </Button>
            
            
          </Form.Item>
        </span>}
      </Form>
      
      <div style={{textAlign: 'right'}}>
          {this.props.extraBtns && this.props.extraBtns.map((item, key) => {
            return <Button {...item} size="small" key={key} style={{marginLeft: 10}}>
              {item.value}
            </Button>
          })}
      </div>
      
      {this.props.extraEl && this.props.extraEl}
      
    </div>

  }
  

  render() {
    const { getFieldDecorator } = this.props.form;
    const { forms, noPage } = this.props;
    const { pageNum, pageSize } = this.state.queryInfo;
    const { result, total } = this.state;

    return (
      
        <div>
          {this.renderForm(forms)}
          {this.props.tabs && this.props.tabs[0] && <Tabs style={{marginTop: 20}} onChange={this.handleTabChange.bind(this)}>
            {
              this.props.tabs.map((item, index) => {
                return <TabPane tab={item.name} key={item.value}></TabPane>
              })
            }
          </Tabs>}
          <div style={{marginTop: 20}}>
            <Table
              onRow={this.props.onRow}
              rowKey={(record, index) => index}
              columns={this.props.columns}
              dataSource={result}
              size="middle"
              scroll={{ x: 1300 }}
              // loading={tableLoading}
              pagination={noPage ? false : {
                current: pageNum,
                pageSize: pageSize,
                // size: 'small',
                total: total,
                showSizeChanger: true,
                showQuickJumper: true,
                onChange: this.paginationChange,
                onShowSizeChange: this.handleSizeChange,
                pageSizeOptions: ['10', '20', '30'],
                showTotal: (total, range) => { return `共${total}条` }
              }}
            />
          </div>
        </div>
    );
  }
}
