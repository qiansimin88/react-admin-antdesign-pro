import { useCallback, useRef, useState, useEffect } from 'react'
// 应用动态表单   避免 使用了getFieldDecorator 有删除功能 导致 form 接收的 值的紊乱, 保证getFieldDecorator当前的 index 保存的值永远是对的
// 一个带有自增 ID 和 增删的 state 状态 Hook

// import useStateList from '@/components/hook/useStateList'
// const { list, getKey, getIndex, push, remove } = useStateList(['a','b','c'])

export default ( initState ) => {
    // index 自增
    const counterRef = useRef(-1)
    // key 存储
    const keyList = useRef([])

    // 所有数据的 唯一key 和 自增 index 
    const setKey = useCallback((index) => {
        counterRef.current += 1
        keyList.current.splice(index, 0, counterRef.current)
    }, [])

    const [list, setList] = useState(() => {
        (initState || []).forEach((_, index) => {
            setKey(index)
        })
        return initState
    })

    // 获取 某个下标的 唯一 ID
    const getKey = (index) => keyList.current[index]
    // 获取某个下标元素的下标值
    const getIndex = (index) => keyList.current.findIndex(o => o === index)

    // 末尾添加一个元素
    const push = (obj) => {
        setList(state => {
            // 因为要增加一个  所以 key 和 index 都要增加
            setKey(state.length)
            return state.concat([obj])
        })
    }

    // 删除一个 Index
    const remove = (index) => {
        // 删除不需要增加 index 和 自增 key 了
        // 直接动 list
        setList(state => {
            // 浅拷贝
            const itemState = [...state]
            itemState.splice(index, 1)

            // 删除 自增的 Key
            try {
                keyList.current.splice(index, 1)
            } catch(e) {
                console.warn(e)
            }
            return itemState
        })
    }
    // useEffect(() => {
    //     console.log( counterRef )
    //     console.log( keyList )
    //     console.log( list )
    // }, [list])

    // console.log(counterRef.current)
    // console.log(keyList.current)
    return {
        list,
        getKey,
        getIndex,
        push,
        remove
    }
}