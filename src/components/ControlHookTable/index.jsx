
import React, { useState, useEffect, useCallback, memo, useImperativeHandle, forwardRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import CSSModules from 'react-css-modules';
import { Form as FromAt } from '@ant-design/compatible';
import moment from 'moment';
import { Row, Col, Button, Form, Input, Table, Select, Spin, Tabs, message, TreeSelect, DatePicker, AutoComplete } from 'antd';
import { FormatTime } from '@/utils/utils'
import useEffectUpdate from '@/components/hook/useEffectUpdate'
import styles from './index.less';
import classnames from 'classnames';
import ToggleShow from './ToggleShow'

const { Option } = AutoComplete;
const { RangePicker } = DatePicker;

// import SearchForm from './components/SearchForm';
// import List from './components/list';
const { TabPane } = Tabs;

// hook 列表
const ControlHookTable = (props) => {
    const {
        cRef,
        form: GetInfoForm,
        form: { getFieldDecorator },
        extraBtnList,
        // extraBtnList = [{
        //     title: '额外的',
        //     cb(v) {
        //         console.log(1111)
        //     }
        // }, {
        //     title: '额外的22',
        //     cb(v) {
        //         console.log(1111)
        //     }
        // }],
        toggle = false, // 展开开关
        // 头部表单信息
        searchInfo = [{
            key: 'ss',   // 唯一键值
            type: 'input', // 表单类型 input select possword
            typeValue: {
                hasAll: true, // 是否有 全部
                value: [{ value: '1', title: "测试" }] // options 数据
            },  // 例如 select 的 options 数据
            label: "测试",  // label 文字描述头
            config: {},     // 配置 比如 initialValue, rule 等
            attrubite: {}   // html 的属性
        }],
        // 列表
        tableInfo = {
            tab: {
                onChange() { console.log('change') },
                defaultActiveKey: null,
                requestKey: 'dd',
                TabPane: [
                    {
                        tab: '全部',
                        key: null
                    },
                    {
                        tab: '全部2',
                        key: 'status'
                    }
                ]
            },
            columns: [],
            rowSelection: {},
            api: null,
            extraParams: {},  // 额外的请求参数
            way: 'GET',
            sync: null,  // 第一次进入页面的异步队列回调函数
            pageSize: 20
        },
        autoComplateInfo,
        modal
    } = props;


    // const [requestMethod, setRequestMethod] = useState( tableInfo.api )
    const [loading, setLoaidng] = useState(true);
    const [dataSource, setDataSource] = useState([])
    const [pageSize, setPageSize] = useState(tableInfo.pageSize || 10) // 一页多少条
    const [totalRecordSize, setTotalRecordSize] = useState(0) // 总条数
    const [page, setPage] = useState(1) // 当前页
    const [listState, setListate] = useState({}) // 储存当前页面的所有 state
    const [rangeTimeFormat, setRangeTimeFormat] = useState(1)  // 存储 Key
    const [firstInit, setFirstInit] = useState(false)
    const [tab, setTab] = useState(tableInfo.tab && tableInfo.tab.defaultActiveKey) // tab 切换

    const CN = classnames(
        {
            [styles.modalBox]: !!modal
        }
    )

    // 最终请求
    const getList = useCallback(() => {
        let param = {
            "method": tableInfo.way || 'GET',
            "pageNum": page,
            "pageSize": pageSize,
            ...listState,
        }

        if (tableInfo.extraParams && Object.keys(tableInfo.extraParams).length) {
            param = { ...param, ...tableInfo.extraParams }
        }

        if (tableInfo.tab) {
            const { requestKey } = tableInfo.tab
            param = { ...param, ...{ [requestKey]: tab } }
        }

        tableInfo.Api(param).then(res => {
            const {
                message: msg,
                totalRecordSize: tta,
                status,
                entry
            } = res
            if (status && res.entry) {
                // tableInfo.rowIdKey
                const uniqItem = {}
                const keyItem = tableInfo.rowIdKey

                setTotalRecordSize(tta)
                setDataSource(entry.filter(o =>  !uniqItem[ o[keyItem] || o.id] &&  (uniqItem[ o[keyItem] || o.id ] = 1  )))
            } else {
                setDataSource(0)
                setDataSource([])
                // message.error(msg)
            }
        })
    }, [tableInfo, page, pageSize, listState, tab])

    useEffect(() => {
        setTimeout(() => setLoaidng(false), 1000)
    }, [])


    // // 方法合集
    const paginationChange = useCallback((value) => {
        const newPage = value;
        setPage(newPage);
    }, [setPage])

    const handleSizeChange = useCallback((current, size) => {
        setPage(1);
        setPageSize(size)
    }, [setPageSize, setPage])

    // const isEmpty  = (object) => {
    //     for (var name in object) {
    //         return false;
    //     }
    //     return true;
    // }
    // const deleteEmptyProperty = (object) => {
    //     for (let i in object) {
    //         var value = object[i];
    //         if (typeof value === 'object') {
    //             if (Array.isArray(value)) {
    //                 if (value.length == 0) {
    //                     delete object[i];
    //                     continue;
    //                 }
    //             }
    //             deleteEmptyProperty(value);
    //             if (isEmpty(value)) {
    //                 delete object[i];
    //             }
    //         } else {
    //             if (value === '' || value === null || value === undefined) {
    //                 delete object[i];
    //             } else {
    //             }
    //         }
    //     }
    // }

    // 表单提交
    const searchFormSubmit = useCallback((e) => {
        e && e.preventDefault();
        GetInfoForm.validateFields((err, values) => {
            console.log(values)
            if (!err) {
                searchInfo.map((_) => {
                    const { type, key } = _;
                    if (type === 'dateRange') {
                        const [key1, key2] = key.split("|")
                        if(values[key]) {
                            values[key1] = FormatTime(values[key][0]) === '-' ? null : FormatTime(values[key][0])
                            values[key2] = FormatTime(values[key][1]) === '-' ? null : FormatTime(values[key][1])
                            delete values[key]
                        }
                    }
                    return 1;
                })

                Object.keys(values).forEach((o, i) => {
                    const item = values[o]
                    if (item === null || item === '' || item === undefined) {
                        delete values[o]
                    }
                })
                setPage(1)
                setFirstInit(true)
                setListate(() => {
                    const parm = { ...values }
                    return parm
                })
            }
        })
    }, [setListate, GetInfoForm, searchInfo])

    const resetForm = useCallback(() => {
        GetInfoForm.resetFields();
        setPage(1);
        // setListate(() => {
        //     const parm = {}
        //     return parm
        // })
    }, [GetInfoForm])


    useEffectUpdate(() => {
        getList()
    }, [page, listState, pageSize, tableInfo.extraParams, tab])

    // useEffect(() => {
    //     if(!firstInit) {
    //     }else {
    //         getList()
    //     }
    // }, [page, listState, pageSize, tableInfo.extraParams, firstInit])

    const initData = useCallback(() => {
        // 如果有 sync
        if (tableInfo.sync) {
            tableInfo.sync()
                .then(() => {
                    searchFormSubmit()
                })
        } else {
            searchFormSubmit()
        }
    }, [tableInfo, searchFormSubmit])


    useEffect(() => {
        initData()
    }, [])

    const RenderSearchBox = useCallback(() => {
        const noShowJsx = []
        const showJsx = []
        let searchJsx = []

        searchInfo.forEach(_ => {
            const {
                key,
                type,
                typeValue,
                show = true,
                label,
                keyValue,
                config,
                attrubite,
            } = _
            let typeJsx = null;
            let va = keyValue && keyValue.value
            let tt = keyValue && keyValue.title
            let itemJsx = null

            switch (type) {
                case 'dateRange':
                    typeJsx = <RangePicker
                        format="YYYY-MM-DD"
                        size="small"
                        ranges={{
                            Today: [moment(), moment()],
                            'This Month': [moment().startOf('month'), moment().endOf('month')]
                        }}
                        {...attrubite}
                    />
                    break;
                case 'input':
                    typeJsx = <Input style={{ width: 150 }} size="small" autoComplete="off" {...attrubite} />
                    break;
                case 'select':

                    typeJsx = <Select size="small" style={{ width: 150 }} {...attrubite}>
                        {typeValue.hasAll && <Select.Option value="">全部</Select.Option>}
                        {
                            typeValue.value.map((v) => {
                                // return <Select.Option value={v.value} key={v.value}>{v.title}</Select.Option>
                                const vkey = [va || "value"];
                                const tkey = [tt || "title"]
                                return <Select.Option value={v[vkey]} key={v[vkey]}>{v[tkey]}</Select.Option>
                            })
                        }
                    </Select>
                    break;
                case 'selectTree':
                    typeJsx = <TreeSelect
                        treeDataSimpleMode
                        size="small"
                        style={{ width: '170px' }}
                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                        {...attrubite}
                    />
                    break;
                default:
                    typeJsx = null
                    break;
            }

            if (toggle) {
                itemJsx = (<Form.Item key={key} label={label}>
                    {
                        getFieldDecorator(key, config)
                            (
                                typeJsx
                            )
                    }
                </Form.Item>)

                if (show) {
                    showJsx.push(itemJsx)
                } else {
                    noShowJsx.push(itemJsx)
                }
            } else {
                searchJsx.push(
                    <Form.Item key={key} label={label}>
                        {
                            getFieldDecorator(key, config)
                                (
                                    typeJsx
                                )
                        }
                    </Form.Item>
                )
            }
        })

        if(!toggle && autoComplateInfo) {
            searchJsx.unshift(
                (
                    <div style={{'width': '230px', 'display': 'inline-block', 'marginTop': '10px', 'visibility': 'hidden'}}>2</div>
                )
            )
        }
        
        return toggle ? <ToggleShow showJsx={showJsx} noShowJsx={noShowJsx} /> : searchJsx
    }, [searchInfo, getFieldDecorator, toggle, autoComplateInfo])

    // 额外的按钮
    const ExtraBtnListJsx = useCallback(() => {
        let jsx = null
        if (extraBtnList) {
            jsx = extraBtnList.map((value, index) => {
                const newKey = index + Date.now();
                return (
                    <Button style={{ 'marginRight': '20px' }} onClick={value.cb} key={newKey} type="primary">{value.title}</Button>
                )
            })
        } else {
            jsx = null
        }
        return jsx
    }, [extraBtnList])

    const tabChangeHandler = useCallback((v) => {
        const { onChange } = tableInfo.tab
        setTab(v)
        onChange(v)
        setPage(1)
    }, [tableInfo.tab])

    // tab切换
    const TabAreaJsx = useCallback(() => {
        const { tab } = tableInfo
        let jsxItem = null
        if (tab) {
            jsxItem = <Tabs type="card" onChange={tabChangeHandler} defaultActiveKey={tab.defaultActiveKey}>
                {
                    tab.TabPane && tab.TabPane.map(_ => {
                        return (
                            <TabPane tab={_.tab} key={_.key} />
                        )
                    })
                }
            </Tabs>
        } else {
            jsxItem = null
        }
        return jsxItem
    }, [tableInfo, tabChangeHandler])

    useImperativeHandle(cRef, () => ({
        getList,
        resetForm
    }))

    return (
        <PageHeaderWrapper>
            <Spin spinning={loading}>
                <div styleName="container" className={CN} style={{ padding: '20px 20px 0 20px', marginBottom: '20px' }}>
                    <Form layout="inline" labelAlign="right" onSubmit={searchFormSubmit}>
                        {/* <ToggleShow /> */}
                        <RenderSearchBox />
                        {
                            autoComplateInfo &&
                            (
                                <div style={{ 'marginLeft': '20px', 'marginBottom': '-20px', ...autoComplateInfo.style }}>
                                    <Form.Item key={9999} label={autoComplateInfo.label}>
                                        {
                                            getFieldDecorator(autoComplateInfo.key, autoComplateInfo.config)
                                                (
                                                    <AutoComplete
                                                        size="small"
                                                        style={{ width: 150 }}
                                                        placeholder="支持联想搜索"
                                                        {...autoComplateInfo.attrubite}
                                                    >
                                                        {autoComplateInfo.dataSource}
                                                    </AutoComplete>
                                                )
                                        }
                                    </Form.Item>
                                </div>
                            )
                        }
                        <div styleName="boxFlex">
                            <div>
                                <ExtraBtnListJsx />
                            </div>
                            <Form.Item style={{ textAlign: 'right' }}>
                                <Button htmlType="submit" type="primary" style={{ marginRight: '10px' }}>查询</Button>
                                <Button onClick={resetForm}>重置</Button>
                            </Form.Item>
                        </div>
                    </Form >
                </div>
                <div styleName="container" style={{ padding: '20px' }}>
                    <div styleName="boxFlex">
                        <TabAreaJsx />
                    </div>
                    <Table
                        scroll={{ x: 1000, y: 1000 }}
                        rowSelection={tableInfo.rowSelection}
                        rowKey={(record, index) => tableInfo.rowIdKey ? record[tableInfo.rowIdKey] : record.id}
                        columns={tableInfo.columns || []}
                        dataSource={dataSource}
                        size="middle"
                        pagination={{
                            size: 'small',
                            current: page,
                            pageSize,
                            total: totalRecordSize,
                            showSizeChanger: true,
                            showQuickJumper: true,
                            onChange: paginationChange,
                            onShowSizeChange: handleSizeChange,
                            pageSizeOptions: ['10', '20', '30'],
                            showTotal: (total) => { return `共${total}条` }
                        }}
                    />
                </div>
            </Spin>
        </PageHeaderWrapper>
    )
}


export default memo(FromAt.create()(
    CSSModules(ControlHookTable, styles)
))