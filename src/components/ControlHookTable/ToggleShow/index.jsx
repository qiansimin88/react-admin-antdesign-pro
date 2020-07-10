import { Form as FromAt } from '@ant-design/compatible';
import React, { useState, useEffect, useCallback, memo } from 'react';
import { Icon, Row, Col, Button, Form, Input, Result, Select, TreeSelect, InputNumber, DatePicker } from 'antd';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import Styles from './index.less';
/**
 * 展开
 * @param {*} props 
 */
const ToggleShow = props => {
    const {
        showJsx,
        noShowJsx
    } = props

    const [ toggleStatus, setToggleStatus ] = useState(true)
    const CN = classnames(
        Styles.toggle,
        {
            [Styles.toggleB]: !toggleStatus
        }
    )
    const iconCN = classnames(
        Styles.tr,
        {
            [Styles.roteShow]: !toggleStatus
        }
    )
    return (
        <div styleName="box">
            <div>
                {
                    showJsx
                }
            </div>
            <div className={ CN }>
                {
                    noShowJsx
                }
            </div>
            <div styleName="flexblock" onClick={() => setToggleStatus(!toggleStatus)}>
                <Icon type="caret-down" className={ iconCN }/>
                <div>
                    { toggleStatus ? '展开' : '收起' }
                </div>
            </div>
        </div>
    )
}


export default memo(FromAt.create()(
    CSSModules(ToggleShow, Styles)
))