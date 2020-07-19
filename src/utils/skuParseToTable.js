// 把 sku信息转化成 table 信息  用来渲染表格

export const toParseSKuToTable = (infoArray) => {
    if (!infoArray) return {}
    
    const itemSkuNameArray = infoArray[0].skuName.split(';').map(_ => _.split(':')[0])
    const skuColumns = itemSkuNameArray.map((o, i) => {
        return {
            title: o,
            dataIndex: `skuValue${(i + 1)}`
        }
    })
    return skuColumns
}

// 给数据增加 skuValueindex 字段

export const toParseSkuToTableForValue = (infoArray) => {
    if (!infoArray) return []

    return infoArray.map((o, i) => {
        const copyItem = {...o}
        const item = o.skuName.split(';')
        item.forEach((k, j) => {
            copyItem[`skuValue${j + 1}`] = k.split(':')[1]
        })
        return copyItem
    })

}


export const returnOssUrl = (key) => {
    const host = window.location.host;
    let hostName = ''
    if (host.indexOf('dev') > -1 || host.indexOf('daily') || host.indexOf('localhost') > -1) {
        hostName = `https://test-static.xinc818.com/${key}`
    } else {
        hostName = `https://static.xinc818.com/${key}`
    }
    return hostName
}