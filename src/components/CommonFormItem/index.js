import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Form as FromAt } from '@ant-design/compatible';
import { connect } from 'dva';
import router from 'umi/router';
import React, { Component } from 'react';
import { Table, Card, Popover, Button, Popconfirm, Form, Input, Select, Row, Col, Tabs} from 'antd';
import apis from '@/apis/commodity';
import { formatDate } from '@/utils/utils'

export default class Module extends Component {
  constructor() {
    super();
    this.state = {
    }
  }


  render() {
    const { item, form } = this.props;
    const { getFieldDecorator } = form;
    let el;
    if (item.renderElAsync) {
      el = item.renderElAsync();
    } else if (item.el) {
      el = item.el;
    } else if (item.select) {
      el = <Select filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      } disabled={item.disabled} showSearch={true} onChange={item.onChange ? item.onChange.bind(this) : function () {}}  style={{width: item.width || 150}} placeholder={item.placeholder || '请选择'}>
        {
          item.select.map((it, index) => {
            return <Select.Option key={index} value={it.value}>{it.name}</Select.Option>
          })
        }
      </Select>
    } else {
      el = <Input disabled={item.disabled} style={{width: item.width || 150}} placeholder={item.placeholder || '请输入'} />
    }
    if (!item.config) {
      item.config = {};
    }
    const { isEdit, initData } = this.state;
    // console.log(isEdit , initData , !item.config.initialValue)
    if (isEdit && initData && typeof item.config.initialValue === 'undefined') {
      // 初始值
      if (item.key.indexOf('.') > -1) {
        try {
          // 编辑的时候修改，没有值会报错
          item.config.initialValue = initData[item.key.split('.')[0]][item.key.split('.')[1]];
        } catch (err) {}
      } else {
        item.config.initialValue = initData[item.key];
      }
    }
    if (!item.config.rules) {
      item.config.rules = [{
        required: true,
        message: '不能为空'
      }]
    }
    return <Form.Item label={item.label} style={{ marginBottom: 10 }} >
    { getFieldDecorator(item.key, item.config)(el) }
  </Form.Item>
  }
}
