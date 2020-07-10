import { useCallback, useRef, useState, useEffect, useMemo } from 'react'


// 虚拟滚动
export default (list, option) => {
    const containerRef = useRef()
    const {
        itemHeight, overscan = 1
    } = option
    const [state, setState] = useState({ start: 0, end: 10 });

    if(!itemHeight) {
        console.warn('必须传入数字类型 itemHeight')
        return false
    }

    const getOffset = (scrollTop) => {
        if(typeof itemHeight === 'number') {
            return Math.floor(scrollTop / itemHeight)
        }
    }

    const getViewCapacity = (containerHeight) => {
        if (typeof itemHeight === 'number') {
          return Math.ceil(containerHeight / itemHeight);
        }
        // const { start = 0 } = state;
        // let sum = 0;
        // let capacity = 0;
        // for (let i = start; i < list.length; i++) {
        //   const height = (itemHeight as (index: number) => number)(i);
        //   sum += height;
        //   if (sum >= containerHeight) {
        //     capacity = i;
        //     break;
        //   }
        // }
        // return capacity - start;
      };
    


    const calculateRange = () => {
        const element = containerRef.current
        if(element) {
            const offset = getOffset(element.scrollTop)
            const viewCapacity = getViewCapacity(element.clientHeight);
            const from = offset - overscan;
            const to = offset + viewCapacity + overscan;
            setState({ start: from < 0 ? 0 : from, end: to > list.length ? list.length : to });
        }
    }

    const totalHeight = useMemo(() => {
        if (typeof itemHeight === 'number') {
          return list.length * itemHeight;
        }
        return list.reduce((sum, _, index) => sum + itemHeight(index), 0);
    }, [list.length]);

    const getDistanceTop = (index) => {
        // 如果有缓存，优先返回缓存值
        // if (enableCache && distanceCache.current[index]) {
        //   return distanceCache.current[index];
        // }
        if (typeof itemHeight === 'number') {
          const height = index * itemHeight;
          // if (enableCache) {
          //   distanceCache.current[index] = height;
          // }
          return height;
        }
        const height = list.slice(0, index).reduce((sum, _, i) => sum + itemHeight(i), 0);
        // if (enableCache) {
        //   distanceCache.current[index] = height;
        // }
        return height;
      };
    
    useEffect(() => {
        console.log(state)
    }, [state])

    useEffect(() => {
        calculateRange()
    }, [])

    return {
        list: list.slice(state.start, state.end).map((ele, index) => ({
            data: ele,
            index: index + state.start,
        })),
        containerProps: {
            // 把 滚动容器赋值给 ref
            ref(ele) {
                containerRef.current = ele
            },
            onScroll(ev) {
                ev.preventDefault()
                calculateRange()
            }
        },
        wrapperProps: {
            style: { width: '100%', height: totalHeight, paddingTop: getDistanceTop(state.start) },
        }
    }
}