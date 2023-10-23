import { ARTICLES_ACTION_TYPES } from "./articles.types";

const ARTICLES_INITIAL_STATE = {
    articles: [],
    isLoading: false,
    error: null
}

export const articlesReducer = (state = ARTICLES_INITIAL_STATE, action) => {
    const { type, payload } = action
    switch (type) {
        case ARTICLES_ACTION_TYPES.FETCH_ARTICLES_START:
            return { ...state, isLoading: true }
        case ARTICLES_ACTION_TYPES.FETCH_ARTICLES_SUCCESS:
            return { ...state, articles: payload, isLoading: false }
        case ARTICLES_ACTION_TYPES.FETCH_ARTICLES_FAILED:
            return { ...state, error: payload, isLoading: false }
        default:
            return state
    }
}