import { combineReducers } from 'redux'


import { userReducer } from './users/user.reducer'
import { articlesReducer } from './articles/articles.reducer'
import { reviewsReducer } from './reviews/reviews.reducer'

// 创建一个合并的reducer 也就是根
export const rootReducer = combineReducers({
    user: userReducer,
    articles: articlesReducer,
    reviews: reviewsReducer
})