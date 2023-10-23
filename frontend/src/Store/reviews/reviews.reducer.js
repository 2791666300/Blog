import { REVIEWS_ACTION_TYPES } from "./reviews.types";

const REVIEWS_INITIAL_STATE = {
    reviews: [],
    currentReviews: [],
    isLoading: false,
    error: null
}

export const reviewsReducer = (state = REVIEWS_INITIAL_STATE, action) => {
    const { type, payload } = action
    switch (type) {
        case REVIEWS_ACTION_TYPES.FETCH_REVIEWS_ON_ARTICLE_START:
            return { ...state, isLoading: true }

        case REVIEWS_ACTION_TYPES.FETCH_REVIEWS_ON_ARTICLE_SUCCESS:
        case REVIEWS_ACTION_TYPES.CREATE_REVIEWS_ON_ARTICLE_SUCCESS:
        case REVIEWS_ACTION_TYPES.UPDATE_REVIEW_SUCCESS:
            return { ...state, currentReviews: payload, isLoading: false }
        
        case REVIEWS_ACTION_TYPES.GET_ALLREVIEWS_SUCCESS: 
            return {...state, reviews: payload, isLoading: false}

        case REVIEWS_ACTION_TYPES.FETCH_REVIEWS_ON_ARTICLE_FAILED:
        case REVIEWS_ACTION_TYPES.CREATE_REVIEWS_ON_ARTICLE_FAILED:
        case REVIEWS_ACTION_TYPES.UPDATE_REVIEW_FAILED:
        case REVIEWS_ACTION_TYPES.GET_ALLREVIEWS_FAILED:
            return { ...state, error: payload, isLoading: false }
        default:
            return state
    }
}