import axios from 'axios'

// type 是“密码”或“数据”
export const updateFile = async (data) => {
    try {
        const url = 'http://localhost:80/api/v1/user/updateMe'

        const res = await axios({
            method: 'PATCH',
            url: url,
            params: {
                cookie: window.document.cookie
            },
            // data: { ...data, cookie: window.document.cookie }
            data: data,

        })
        return res.data.data.updateUser
    } catch (err) {
        console.log('上传失败', err)
    }
}

