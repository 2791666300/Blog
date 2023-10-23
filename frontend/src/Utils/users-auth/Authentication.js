import axios from 'axios'
import Cookies from 'js-cookie'
import { showAlert } from './alerts'


// 登录
export const Login = async (objects) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:1000/api/v1/user/login',
            data: objects
        })

        const UserArr = res.data.data.user
        if (res.data.status === 'success') {
            Cookies.set('user', res.data.token)

            showAlert('success', '登录成功')
            window.setTimeout(() => {
                window.location.reload(true)
                window.location.assign('/navi/articles')
            }, 1500)
        }
        return UserArr
    } catch (err) {
        showAlert('error', err.response.data.message)
    }
}

// 当前用户
export const getMe = async () => {
    try {
        const res = await axios({
            method: 'GET',
            params: {
                cookie: window.document.cookie
            },
            url: 'http://localhost:1000/api/v1/user/Me',
        })

        const UserArr = res.data.data.user
        return UserArr
    } catch (err) {
        showAlert('error', err.response.data.message)
    }
}

// 注册
export const SignUp = async (objects) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:1000/api/v1/user/signup',
            data: objects
        })
        const UserArr = res.data.data.user

        Cookies.set('user', res.data.token)
        if (res.data.status === 'success') {
            showAlert('success', '注册成功')
        }
        return UserArr
    } catch (err) {
        showAlert('error', err.response.data.message)
    }
}


// 登出
export const LogOut = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:1000/api/v1/user/logout'
        })

        Cookies.remove('user')

        if (res.data) {
            showAlert('success', '注销成功,重新登录')
            window.setTimeout(() => {
                window.location.reload(true)
                window.location.assign('/')
            }, 1500)
        }

        return res.data.data
    } catch (err) {
        showAlert('error', '请重新尝试')
    }
}

// 更改当前用户数据
export const UpdateMe = async (objects) => {

    try {
        const res = await axios({
            method: 'PATCH',
            params: {
                cookie: window.document.cookie
            },
            url: 'http://localhost:1000/api/v1/user/updateMe',
            data: { ...objects, cookie: window.document.cookie }
        })
        return res.data.data.updateUser

    } catch (err) {
        showAlert('error', err.response.data.message)
    }
}


// 更改密码
export const updatePassword = async (objects) => {
    try {
        const res = await axios({
            method: 'PATCH',
            params: {
                cookie: window.document.cookie
            },
            url: 'http://localhost:1000/api/v1/user/updatePassword',
            data: { ...objects, cookie: window.document.cookie }
        })

        showAlert('success', '密码更改成功')
        window.location.assign('/')
        return res

    } catch (err) {
        showAlert('error', err.response.data.message)
    }
}

// blogger 
// 获取全部用户
export const getAllUsers = async () => {
    try {

        const res = await axios({
            method: 'GET',
            params: {
                cookie: window.document.cookie
            },
            url: 'http://localhost:1000/api/v1/user/'
        })

        return res.data.data.users

    } catch (err) {
        showAlert('error', err.response.data.message)
    }
}