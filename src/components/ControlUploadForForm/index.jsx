
import React, { useState, useEffect, useCallback, memo, forwardRef } from 'react';
import { Form as FromAt } from '@ant-design/compatible';
import { Input, Icon, Modal, Upload } from 'antd';
import href from '@/utils/utils'
import commonApis from '@/apis/common';
import { returnOssUrl } from '@/utils/skuParseToTable'

/**
 * 可以被 form 接收的 upload
 * @param {*} props 
 * @param {string} rule : init: 整数  float: 浮点数 
 */
const ControlUploadForForm = ({
    typeCode,
    fileList = [],  // 上传的文件列表
    maxNum = 1,  // 最大上传数
    onChange  // 给 form 接收的 change 事件   因为 upload 组件的值是 fileList 而不思 value 所有 父组件的 from 用valuePropName：filelist设置，
             // 用getValueFromEvent 来接收 当前组件的 upload  onChange 事件
}) => {
    const [prew, setPrew] = useState({
        visible: false,
        image: ''
    })

    const [uploadInfo, setUploadInfo] = useState({}) // 上传 hook 信息

    const handlePreview = useCallback(file => {
        setPrew({
            visible: true,
            image: file.url || file.thumbUrl
        })
    }, [])

    const uploadButton = (
        <>
            <Icon type="plus" />
            <div className="ant-upload-text">上传</div>
        </>
    )

    const beforeUploadHandler = useCallback((file) => {
        return commonApis.getUploadSignature({
            typeCode,
            resourceName: file.name,
            createTask: false,
            operator: localStorage.employeeId || '123456789',
        }).then(res => {
            if (res && res.entry) {
                const r = res.entry
                setUploadInfo({
                    ...r,
                    'OSSAccessKeyId': r.accessId,
                    'success_action_status': '200'
                })
                return Promise.resolve(true)
            }
        })
    }, [typeCode])

    const wrapOnChange = useCallback((e) => {
        const { file, fileList: nowfileList } = e
        const { status } = file


        if ( status === 'done' ) {
            const { key } = uploadInfo
            const imgUrl = returnOssUrl(key)
            nowfileList[nowfileList.length - 1].url = imgUrl
        }
        onChange(nowfileList)
    }, [onChange, uploadInfo])

    // useEffect(() => {
    //     console.log(fileList)
    // }, [fileList])

    return (
        <>
            <Upload
                action={uploadInfo.host}
                data={uploadInfo}
                listType="picture-card"
                fileList={fileList}
                name="file"
                onChange={wrapOnChange}
                beforeUpload={beforeUploadHandler}
                onPreview={handlePreview}
            >
                {fileList.length >= maxNum ? null : uploadButton}
            </Upload>
            <Modal visible={prew.visible} footer={null} onCancel={() => setPrew({image: '', visible: false})}>
                <img alt="example" style={{ width: '100%' }} src={prew.image} />
            </Modal>
        </>
    )
}

export default memo(FromAt.create()(
    ControlUploadForForm
))