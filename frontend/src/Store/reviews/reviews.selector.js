import { createSelector } from 'reselect'

const selectReviewsReducer = (state) => state.reviews

export const selectorCurrentReviews = createSelector(
    [selectReviewsReducer],
    (reviews) => reviews.currentReviews
)

export const selectorAllReviews = createSelector(
    [selectReviewsReducer],
    (reviews) => reviews.reviews
)