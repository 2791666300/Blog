import { ARTICLES_ACTION_TYPES } from './articles.types'

import { createAction } from '../../Utils/reducer/reducer.utils'


// 数据获取
export const fetchArticlesStart = () =>
    createAction(ARTICLES_ACTION_TYPES.FETCH_ARTICLES_START)

export const fetchArticlesSuccess = (articlesArray) =>
    createAction(ARTICLES_ACTION_TYPES.FETCH_ARTICLES_SUCCESS, articlesArray)

export const fetchArticlesFailed = (error) =>
    createAction(ARTICLES_ACTION_TYPES.FETCH_ARTICLES_FAILED, error)


// 数据更新
export const UpdateArticlesStart = () =>
    createAction(ARTICLES_ACTION_TYPES.UPDATE_ARTICLES_START)

export const UpdateArticlesSuccess = (article) =>
    createAction(ARTICLES_ACTION_TYPES.UPDATE_ARTICLES_SUCCESS, article)

export const UpdateArticlesFailed = (error) =>
    createAction(ARTICLES_ACTION_TYPES.ARTICLE_CLICKS_FAILED, error)

// 文章点击量事件
export const ArticleClicksStart = (articleDate, path, type) =>
    createAction(ARTICLES_ACTION_TYPES.ARTICLE_CLICKS_START, { articleDate, path , type})