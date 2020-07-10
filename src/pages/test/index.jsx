import React, { memo, useEffect, useState, useCallback, useRef } from 'react';
import { Input } from 'antd';
import useEffectUpdate from '@/components/hook/useEffectUpdate'

// 供应商订单
const Test = () => {

  // const [state, setState]  = useState(1)

  const demoRef = useRef(0)

  const dd = useCallback(() => {
    demoRef.current  =  demoRef.current + 1
  }, [])
// 
  // useEffect(() => {
    // console.log(  demoRef.current )
  // })

  const haha = useCallback(() => {
    console.log(  demoRef.current )
  })

  // useEffectUpdate(() => {
    // console.log(33333)
  // }, [state])


    return (
      <>
          {/* <Input value={ value } placeholder="Basic usage" onChange={ onChange }/> */}
          <div>now: { demoRef.current }</div>
          <div onClick={() => dd()}>112223</div>
          <div onClick={ () => haha() }>22222</div>
      </>
    )
}

export default memo(Test)
