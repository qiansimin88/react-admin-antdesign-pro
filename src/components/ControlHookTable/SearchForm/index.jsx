// import { Form as FromAt } from '@ant-design/compatible';
// import { connect } from 'dva';
// import { useState, useEffect, useCallback } from 'react';
// import { Row, Col, Button, Form, Input, Result, Select, TreeSelect, InputNumber, DatePicker } from 'antd';
// import { mapStateToProps, dispatchToProps } from '@/utils/mapToProps'
// import { memo } from 'react';

// const SearchForm = props => {

//     const {
//         GetRoleList,
//         GetBranch,
//         roleList,
//         SubDept,     // 部门列表
//         form: { getFieldDecorator },
//         form: GetInfoForm,
//         updateState,
//         GetStaffList,
//         resetState
//     } = props
    
//     const searchFormSubmit = useCallback((e) => {
//         e.preventDefault();
//         GetInfoForm.validateFields((err, values) => {
//             if (!err) {
//             const {
//                 deptId,
//                 roleId,
//                 staffStatus
//             } = values

            

//             let ids = [];
//             if (deptId) {
//                 ids = ('' + deptId).split('-');
//             } 
//                 updateState({
//                     formSubmitInfo: {
//                                 deptId: ids[0],
//                                 companyId: ids[1],
//                                 name: '',
//                                 roleId,
//                                 staffStatus
//                             }
//                         }
//                 )
//                 GetStaffList()
//             }
//         });
//     },[])

//     const resetForm = useCallback(() => {
//         GetInfoForm.resetFields();
//         // 重置
//         resetState()
//         GetStaffList();
//     }, [])

//     const onChange = useCallback((value) => {
//         // setValue(value)
//     })

//     const onLoadData = useCallback((treeNode) => {
        
//         const { id, value } = treeNode.props
//         const ids = ('' + value).split('-');
        
//         return GetBranch({
//             deptId: ids[0],
//             companyId: ids[1],
//             type: 'add'
//         })
//     }, [])

//     useEffect(() => {
//         GetBranch({
//             deptId: "0"
//         })
//     }, [])


//     useEffect(() => {
//         GetRoleList()
//     }, [])

//     return (
//         <Form className="ant-advanced-search-form" onSubmit={searchFormSubmit}>
//             <Row gutter={24}>
//                 <Col span={12}>
//                     <Form.Item label="所在公司部门">
//                     {
//                         getFieldDecorator('deptId', {
//                             initialValue: undefined
//                         })(
//                             <TreeSelect
                                
//                                 treeDataSimpleMode
//                                 style={{ width: '100%' }}
//                                 dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
//                                 placeholder="请选择部门"
//                                 onChange={onChange}
//                                 loadData={onLoadData}
//                                 treeData={SubDept}
//                             />
//                         )
//                     }
//                     </Form.Item>
//                 </Col>
//             </Row>
//             <Row gutter={24}>
//                 <Col span={8}>
//                     <Form.Item label="在职状态">
//                     {
//                         getFieldDecorator('staffStatus', {
//                             initialValue: ""
//                         })(
//                         <Select
//                             placeholder="请选择在职状态"
//                         >
//                             <Select.Option value="">全部</Select.Option>
//                             <Select.Option value="1">在职</Select.Option>
//                             <Select.Option value="2">离职</Select.Option>
//                         </Select>
//                         )
//                     }
//                     </Form.Item>
//                 </Col>
//                 <Col span={8}>
//                     <Form.Item label="角色">
//                     {
//                         getFieldDecorator('roleId', {
//                             initialValue: ""
//                         })(
//                         <Select
//                             placeholder="请选择员工角色"
//                         >
//                             <Select.Option value="">全部</Select.Option>
//                             {
//                                 roleList.map(_ => <Select.Option value={_.id} key={_.id}>{_.name}</Select.Option>)
//                             }
//                         </Select>
//                         )
//                     }
//                     </Form.Item>
//                 </Col>
//                 {/* <Col span={8}>
//                     <Form.Item label="员工名称">
//                     {
//                         getFieldDecorator('name', {
//                         })(
//                             <Input placeholder="请填写员工名称" />
//                         )
//                     }
//                     </Form.Item>
//                 </Col> */}
//             </Row>
//             <Row gutter={24}>
//                 <Col span={16}>
//                 </Col>
//                 <Col span={8}>
//                     <Form.Item style={{ textAlign: 'right' }}>
//                     <Button htmlType="submit" type="primary" style={{ marginRight: '10px' }}>查询</Button>
//                     <Button onClick={resetForm}>重置</Button>
//                     </Form.Item>
//                 </Col>
//             </Row>
//       </Form >
//     )
// }


// export default memo(FromAt.create()(
//     connect(mapStateToProps('staffTable'), dispatchToProps('staffTable', ['GetBranch', 'GetRoleList', 'GetStaffList', 'updateState', 'resetState']))(SearchForm)
// ))