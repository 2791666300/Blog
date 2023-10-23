import { all, call } from 'redux-saga/effects'


import { CurrentsSaga } from './users/user.saga'
import { ArticlesSaga } from './articles/articles.saga'
import { ReviewsSaga } from './reviews/reviews.saga'

export function* rootSaga() {
    yield all([call(CurrentsSaga), call(ArticlesSaga), call(ReviewsSaga)])
}