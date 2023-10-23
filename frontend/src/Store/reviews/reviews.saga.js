import { takeLatest, all, call, put } from 'redux-saga/effects'

import * as ReviewsOperate from '../../Utils/reviews/ReviewsOperate'

import {
    fetchReviewsOnArticleSuccess,
    fetchReviewsOnArticleFailed,
    createReviewOnArticleSuccess,
    createReviewOnArticleFailed,
    updateReviewFailed,
    updateReviewSuccess,
    getAllReviewsSuccess,
    getAllReviewsFailed
} from './reviews.action'
import { REVIEWS_ACTION_TYPES } from './reviews.types'

export function* fetchReviewsAsync({ payload: articleId }) {
    try {
        const reviewsArray = yield call(ReviewsOperate.GetAllCurrentReviews, articleId)
        yield put(fetchReviewsOnArticleSuccess(reviewsArray))
    } catch (error) {
        yield put(fetchReviewsOnArticleFailed(error))
    }
}

export function* CreateReviewStart({ payload: { review, articleId } }) {
    try {
        const newreview = yield call(ReviewsOperate.CreateReview, { review, articleId })
        if (newreview) {
            const reviewsArray = yield call(ReviewsOperate.GetAllCurrentReviews, articleId)
            yield put(createReviewOnArticleSuccess(reviewsArray))
        }
    } catch (error) {
        yield put(createReviewOnArticleFailed(error))
    }
}

export function* ReviewThumbsubpHandler({ payload: { thumbsUps, reviewId, articleId } }) {
    try {
        const newreview = yield call(ReviewsOperate.UpdateReview, { thumbsUps, reviewId })

        if (newreview) {
            const reviewsArray = yield call(ReviewsOperate.GetAllCurrentReviews, articleId)
            yield put(updateReviewSuccess(reviewsArray))
        }
    } catch (error) {
        yield put(updateReviewFailed(error))
    }
}

export function* ReviewAddComments({ payload: { comments, reviewId, articleId } }) {
    try {
        const newreview = yield call(ReviewsOperate.UpdateReview, { comments, reviewId })

        if (newreview) {
            const reviewsArray = yield call(ReviewsOperate.GetAllCurrentReviews, articleId)
            yield put(updateReviewSuccess(reviewsArray))
        }

    } catch (error) {
        yield put(updateReviewFailed(error))
    }
}

export function* GetAllReviewsHandler() {
    try {
        
        const reviews = yield call(ReviewsOperate.GetAllReviews)
        yield put(getAllReviewsSuccess(reviews))

    } catch (error) {
        yield put(getAllReviewsFailed(error))
    }

}

export function* onFetchReviews() {
    yield takeLatest(REVIEWS_ACTION_TYPES.FETCH_REVIEWS_ON_ARTICLE_START, fetchReviewsAsync)
}

export function* onCreateReview() {
    yield takeLatest(REVIEWS_ACTION_TYPES.CREATE_REVIEWS_ON_ARTICLE_START, CreateReviewStart)
}

export function* onreviewThumbsups() {
    yield takeLatest(REVIEWS_ACTION_TYPES.REVIEW_THUMBSUPS_START, ReviewThumbsubpHandler)
}

export function* onReviewComments() {
    yield takeLatest(REVIEWS_ACTION_TYPES.REVIEW_COMMENT_START, ReviewAddComments)
}

export function* onGetAllReviews() {
    yield takeLatest(REVIEWS_ACTION_TYPES.GET_ALLREVIEWS_START, GetAllReviewsHandler)
}

export function* ReviewsSaga() {
    yield all([
        call(onFetchReviews),
        call(onCreateReview),
        call(onreviewThumbsups),
        call(onReviewComments),
        call(onGetAllReviews)
    ])
}