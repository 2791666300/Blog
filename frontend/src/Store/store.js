import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux'
// import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'

import { rootReducer } from './root-reducer'


// 持久化存储的配置
const persistConfig = {
    key: 'root',
    storage,
    // blacklist: [] // 黑名单 代表不需要持久化存储的数据
    whilelist: ['user', 'articles']
}

// saga中间件
const sagaMiddleware = createSagaMiddleware()

// 创建一个持久化Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean) // [false && {name: 'lio'}].filter(Boolean)  会输出 []

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

// 使用中间件
const composedEnhancers = composeEnhancer(applyMiddleware(...middleware))

// export const store = createStore(rootReducer, undefined, composedEnhancers)
// 使用带有持久化的 persistedReducer
export const store = createStore(persistedReducer, undefined, composedEnhancers)

// 在实例化store之后还需要调用saga的run
sagaMiddleware.run(rootSaga)

// 导出一个持久化存储实例
export const persistor = persistStore(store)