import { createSelector } from 'reselect'

const selectArticlesReducer = (state) => state.articles

export const selectorArticles = createSelector(
    [selectArticlesReducer],
    (articles) => articles.articles
)