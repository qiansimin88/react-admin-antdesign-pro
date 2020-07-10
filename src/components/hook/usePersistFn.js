import { useCallback, useRef } from 'react'

// 持久化函数引用  好处是不需要填写 deps 即可得到最新的引用 
// 返回一个最新的引用环境的函数
export default (fn) => {
    const ref = useRef(() => {
        throw new Error('cannot call function while rendering.')
    })

    // ref 在整个生命周期内不会发生变化 current 存储的值也不会导致子组件重新渲染 fn 是包含最新 作用于的 fn
    ref.current = fn

    return useCallback((...arg) => {
        return ref.current(...arg)
        // deps ref 但是 ref 引用的地址却无法发生变化
    }, [ref])
}