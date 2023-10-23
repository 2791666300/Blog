import { takeLatest, all, call, put } from 'redux-saga/effects'

import {
    signInSuccess,
    signInFailed,
    signUpSuccess,
    signUpFailed,
    // signOutSuccess,
    signOutFailed,
    updatemeSuccess,
    updatemeFailed,
    updatePasswordSuccess,
    updatePasswordFailed,
    ArticleSuspendedpanelSuccess,
    ArticleSuspendedpanelFailed,
    GetAllUsersSuccess,
    GetAllUsersFailed,
} from './user.action'
import { USER_ACTION_TYPES } from './user.types'
import * as Authentication from "../../Utils/users-auth/Authentication";

import { updateFile } from "../../Utils/users-auth/file";



export function* fetchCurrentsAsync() {
    try {
        if (!document.cookie.split('=')[1]) {
            yield put(signInSuccess(null))
        } else {
            const userInformation = yield call(Authentication.getMe)
            yield put(signInSuccess(userInformation))
        }

    }
    catch (error) {
        yield put(signInFailed(error))
    }
}


export function* signInWithEmail({ payload: { email, password } }) {
    try {

        const userInformation = yield call(Authentication.Login, { email, password })

        yield put(signInSuccess(userInformation))
    } catch (error) {
        yield put(signInFailed(error))
    }
}



export function* signUp({ payload: { email, password, name, passwordConfirm } }) {
    try {
        yield call(Authentication.SignUp, { email, password, name, passwordConfirm })
        yield put(signUpSuccess({ email, password }))
    } catch (error) {
        yield put(signUpFailed(error))
    }
}

export function* signInAfterSignup({ payload: { user } }) {
    const { email, password } = user
    const userInformation = yield call(Authentication.Login, { email, password })
    yield put(signInSuccess(userInformation))
}


export function* signOut() {
    try {
        yield call(Authentication.LogOut)

        // yield put(signOutSuccess)
        yield put(signInSuccess(null))
    } catch (error) {
        yield put(signOutFailed(error))
    }
}


export function* updateMe({ payload: { name, position, individual } }) {
    try {

        const userInformation = yield call(Authentication.UpdateMe, { name, position, individual })

        yield put(updatemeSuccess(userInformation))
    } catch (error) {
        yield put(updatemeFailed(error))
    }
}

export function* customAdd({ payload: { friendShips } }) {
    try {
        const userInformation = yield call(Authentication.UpdateMe, { friendShips })
        yield put(updatemeSuccess(userInformation))
    } catch (error) {
        yield put(updatemeFailed(error))

    }
}

export function* customAddDelete({ payload: linkName }) {
    try {
        const userInformation = yield call(Authentication.getMe)
        const friendShips = userInformation.friendShips.filter(item => {
            return item.linkName !== linkName
        })
        // console.log(linkName)
        // console.log(friendShips)
        const newuserInformation = yield call(Authentication.UpdateMe, { friendShips })
        yield put(updatemeSuccess(newuserInformation))
    } catch (error) {
        yield put(updatemeFailed(error))

    }
}


export function* updatePassword({ payload: { passwordCurrent, password, passwordConfirm } }) {
    try {
        const userInformation = yield call(Authentication.updatePassword, { passwordCurrent, password, passwordConfirm })
        if (userInformation) {
            yield put(updatePasswordSuccess())
        }
    } catch (error) {
        yield put(updatePasswordFailed(error))
    }
}

export function* CollectionHandler({ payload: { collections } }) {
    try {
        const userInformation = yield call(Authentication.UpdateMe, { collections })
        yield put(ArticleSuspendedpanelSuccess(userInformation))
    } catch (error) {
        yield put(ArticleSuspendedpanelFailed(error))
    }
}

export function* ThumbsUpsHandler({ payload: { thumbsUps } }) {
    try {
        const userInformation = yield call(Authentication.UpdateMe, { thumbsUps })
        yield put(ArticleSuspendedpanelSuccess(userInformation))
    } catch (error) {
        yield put(ArticleSuspendedpanelFailed(error))
    }
}

export function* UpdateHeadPortraitHandler({ payload: { form } }) {
    try {
        const userInformation = yield call(updateFile, form)
        yield put(updatemeSuccess(userInformation))
    } catch (error) {
        yield put(updatemeFailed(error))
    }
}

export function* getAllUserHandler() {
    try {

        const users = yield call(Authentication.getAllUsers)
        yield put(GetAllUsersSuccess(users))
    } catch (error) {
        yield put(GetAllUsersFailed(error))
    }
}

export function* onFetchCurrents() {
    yield takeLatest(USER_ACTION_TYPES.SET_CURRENT_USER, fetchCurrentsAsync)
}

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_IN_EMAIL, signInWithEmail)
}


export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

// 注册完之后登录
export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignup)
}

export function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* onUpdateMeStart() {
    yield takeLatest(USER_ACTION_TYPES.UPDATE_CURRENT_USER, updateMe)
}

export function* onCustomAddStart() {
    yield takeLatest(USER_ACTION_TYPES.CUSTOMADD_LINKS_START, customAdd)
}

export function* onCustomAddDelete() {
    yield takeLatest(USER_ACTION_TYPES.CUSTOMADD_LINKS_DELETE_START, customAddDelete)
}

export function* onUpdatePassword() {
    yield takeLatest(USER_ACTION_TYPES.UPDATE_CURRENT_PASSWORD, updatePassword)
}

export function* onUpdatePasswordSuccess() {
    yield takeLatest(USER_ACTION_TYPES.UPDATE_CURRENT_PASSWORD_SUCCESS, signOut)
}

export function* onCollectionStart() {
    yield takeLatest(USER_ACTION_TYPES.COLLECTION_START, CollectionHandler)
}

export function* onThumbsUpsStart() {
    yield takeLatest(USER_ACTION_TYPES.THUMBSUPS_START, ThumbsUpsHandler)
}

export function* onUpdateHeadPortrait() {
    yield takeLatest(USER_ACTION_TYPES.CHANGE_HEADPORTRAIT_START, UpdateHeadPortraitHandler)
}

export function* onGetAllUsers() {
    yield takeLatest(USER_ACTION_TYPES.GET_ALLUSERS_START, getAllUserHandler)
}

export function* CurrentsSaga() {
    yield all([
        call(onFetchCurrents),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart),
        call(onUpdateMeStart),
        call(onCustomAddStart),
        call(onCustomAddDelete),
        call(onUpdatePassword),
        call(onUpdatePasswordSuccess),
        call(onCollectionStart),
        call(onThumbsUpsStart),
        call(onUpdateHeadPortrait),
        call(onGetAllUsers)
    ])
}