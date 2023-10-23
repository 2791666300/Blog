import { REVIEWS_ACTION_TYPES } from './reviews.types'
import { createAction } from '../../Utils/reducer/reducer.utils'

export const fetchReviewsOnArticleStart = (articleId) =>
    createAction(REVIEWS_ACTION_TYPES.FETCH_REVIEWS_ON_ARTICLE_START, articleId)

export const fetchReviewsOnArticleSuccess = (reviews) =>
    createAction(REVIEWS_ACTION_TYPES.FETCH_REVIEWS_ON_ARTICLE_SUCCESS, reviews)

export const fetchReviewsOnArticleFailed = (error) =>
    createAction(REVIEWS_ACTION_TYPES.FETCH_REVIEWS_ON_ARTICLE_FAILED, error)

export const createReviewOnArticleStart = (review, articleId) =>
    createAction(REVIEWS_ACTION_TYPES.CREATE_REVIEWS_ON_ARTICLE_START, { review, articleId })

export const createReviewOnArticleSuccess = (reviews) =>
    createAction(REVIEWS_ACTION_TYPES.CREATE_REVIEWS_ON_ARTICLE_SUCCESS, reviews)

export const createReviewOnArticleFailed = (error) =>
    createAction(REVIEWS_ACTION_TYPES.CREATE_REVIEWS_ON_ARTICLE_FAILED, error)

// 点赞
export const reviewThumbsupsStart = (thumbsUps, reviewId, articleId) =>
    createAction(REVIEWS_ACTION_TYPES.REVIEW_THUMBSUPS_START, { thumbsUps, reviewId, articleId })



// 评论
export const reviewCommentStart = (comments, reviewId, articleId) =>
    createAction(REVIEWS_ACTION_TYPES.REVIEW_COMMENT_START, { comments, reviewId, articleId })

// 更改
export const updateReviewStart = () =>
    createAction(REVIEWS_ACTION_TYPES.UPDATE_REVIEW_START)

export const updateReviewSuccess = (reviews) =>
    createAction(REVIEWS_ACTION_TYPES.UPDATE_REVIEW_SUCCESS, reviews)

export const updateReviewFailed = (error) =>
    createAction(REVIEWS_ACTION_TYPES.UPDATE_REVIEW_FAILED, error)


// 所有评论
export const getAllReviewsStart = () => 
    createAction(REVIEWS_ACTION_TYPES.GET_ALLREVIEWS_START)

export const getAllReviewsSuccess = (reviews) =>       
    createAction(REVIEWS_ACTION_TYPES.GET_ALLREVIEWS_SUCCESS, reviews)

export const getAllReviewsFailed = (error) =>    
    createAction(REVIEWS_ACTION_TYPES.GET_ALLREVIEWS_FAILED, error)
