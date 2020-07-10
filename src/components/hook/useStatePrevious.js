import { useRef } from 'react'

// 记录state 的上次值 
export default (state) => {
    // useRef 指向的地址永远不会变化
    const prevRef = useRef()
    const currentRef = useRef()

    // 永远指向上次的存储的值  
    prevRef.current = currentRef.current
    currentRef.current = state

    return [
        prevRef.current  // 返回上次的值
    ]
}