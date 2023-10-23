import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from '../../Utils/reducer/reducer.utils'

export const checkUserSession = () =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER)

// 登录
export const emailSignInStart = (email, password) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_EMAIL, { email, password })

export const signInSuccess = (user) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)

export const signInFailed = (error) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)



// 注册
export const signUpStart = (email, password, name, passwordConfirm) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, name, passwordConfirm })

export const signUpSuccess = (user) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user })

export const signUpFailed = (error) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)


// 登出
export const signOutStart = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_START)

export const signOutSuccess = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)

export const signOutFailed = (error) =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)


// 更改当前用户的基本数据
export const updatemeStart = (name, position, individual) =>
    createAction(USER_ACTION_TYPES.UPDATE_CURRENT_USER, { name, position, individual })

// 添加自定义网址
export const customAddStart = (friendShips) =>
    createAction(USER_ACTION_TYPES.CUSTOMADD_LINKS_START, { friendShips })

export const customAddDeleteStart = (linkName) =>
    createAction(USER_ACTION_TYPES.CUSTOMADD_LINKS_DELETE_START, linkName)

export const updatemeSuccess = (user) =>
    createAction(USER_ACTION_TYPES.UPDATE_CURRENT_SUCCESS, user)


export const updatemeFailed = (error) =>
    createAction(USER_ACTION_TYPES.UPDATE_CURRENT_FAILED, error)




// 更改当前用户密码
export const updatePasswordStart = (passwordCurrent, password, passwordConfirm) =>
    createAction(USER_ACTION_TYPES.UPDATE_CURRENT_PASSWORD, {
        passwordCurrent,
        password,
        passwordConfirm
    })

export const updatePasswordSuccess = () =>
    createAction(USER_ACTION_TYPES.UPDATE_CURRENT_PASSWORD_SUCCESS)

export const updatePasswordFailed = (error) =>
    createAction(USER_ACTION_TYPES.UPDATE_CURRENT_PASSWORD_FAILED, error)

// 收藏
export const CollectionStart = (collections) =>
    createAction(USER_ACTION_TYPES.COLLECTION_START, { collections })

// 点赞
export const ThumbsUpsStart = (thumbsUps) =>
    createAction(USER_ACTION_TYPES.THUMBSUPS_START, { thumbsUps })

export const ArticleSuspendedpanelSuccess = (user) =>
    createAction(USER_ACTION_TYPES.COLLECTION_SUCCESS, user)

export const ArticleSuspendedpanelFailed = (error) =>
    createAction(USER_ACTION_TYPES.COLLECTION_FAILED, error)


// 更新头像

export const UpdateHeadPortraitStart = (form) =>
    createAction(USER_ACTION_TYPES.CHANGE_HEADPORTRAIT_START, { form })


// blogger
// 获取所有用户
export const GetAllUsersStart = () => 
    createAction(USER_ACTION_TYPES.GET_ALLUSERS_START)

export const GetAllUsersSuccess = (users) => 
    createAction(USER_ACTION_TYPES.GET_ALLUSERS_SUCCESS, users)

export const GetAllUsersFailed = (error) => 
    createAction(USER_ACTION_TYPES.GET_ALLUSERS_FAILED, error)