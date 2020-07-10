import { useCallback, useState } from 'react'

// 一个简单绑定 input change 的工具函数  支持 transformer 自定义过滤
export default (params) => {
    const { initValue, transformer } = params || {}
    const [value, setValue] = useState(initValue)

    const onChange = useCallback((e) => {
        if(!e) {
            // console.warn('must be has some error, need a true evevt')
            throw new Error('must be has some error, need a true evevt')
        }
        const v = e.target.value

        if(typeof transformer === 'function') {
            setValue(transformer(v))
        }
        setValue(v)
    })

    const reset = useCallback(() => setValue(initValue), [setValue])

    return [
        value,
        {
            onChange,
            reset
        }
    ]
}