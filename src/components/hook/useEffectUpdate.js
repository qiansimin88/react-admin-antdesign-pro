import { useEffect, useRef, useState } from 'react'
// 跟 effect 相同 区别是 首次渲染不执行 仅仅 deps 更新才重新渲染

export default (fn, deps) => {
    const initRef = useRef(false)
    useEffect(() => {
        if(!initRef.current) {
            initRef.current = true
        }else {
            return fn();
        }
    }, deps)
}