
import React, { useState, useEffect, useCallback, memo, forwardRef } from 'react';
import { Form as FromAt } from '@ant-design/compatible';
import { Input } from 'antd';

/**
 * 数字输入框
 * @param {*} props 
 * @param {string} rule : init: 整数  float: 浮点数 
 */
const ControlNumberInput = props => {
    const { onChange, rule = 'init', value, onBlur } = props
    // 过滤
    const onChangeHandler = useCallback(e => {
        const { value } = e.target
        let reg = rule === 'float' ? /^-?[0-9]*(\.[0-9]*)?$/ : /^-?[0-9]*?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            onChange(value);
        }
    }, [onChange, rule])
    // 去除末尾 - 和 .
    const onBlurHandler = useCallback(() => {
        if(!value) return false
        let valueTemp = value.toString()
        if (valueTemp.charAt(valueTemp.length - 1) === '.' || valueTemp === '-') {
            valueTemp = valueTemp.slice(0, -1);
        }
        // 去除 00000 这种的
        onChange(valueTemp.replace(/0*(\d+)/, '$1'))
        if (onBlur) onBlur()
    }, [onBlur, value, onChange])

    return (
        <Input
            style={{ width: 100 }}
            {...props}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            maxLength={25}
        />
    )
}

export default memo(FromAt.create()(
    ControlNumberInput
))