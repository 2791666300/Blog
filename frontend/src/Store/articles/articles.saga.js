import { takeLatest, all, call, put } from 'redux-saga/effects'

import * as ArticlesOperate from '../../Utils/articles/ArticlesOperate'

import { fetchArticlesSuccess, fetchArticlesFailed } from './articles.action'
import { ARTICLES_ACTION_TYPES } from "./articles.types";

export function* fetchArticlesAsync() {
    try {
        const articlesArray = yield call(ArticlesOperate.GetAllArticles)
        yield put(fetchArticlesSuccess(articlesArray))
    } catch (error) {
        yield put(fetchArticlesFailed(error))
    }
}

export function* ArticleClicksHandler({ payload: { articleDate, path, type } }) {
    try {
        yield call(ArticlesOperate.UpdateArticle, { articleDate, path, type })
        // const articlesArray = yield call(ArticlesOperate.GetAllArticles)
        // yield put(fetchArticlesSuccess(articlesArray))
        yield call(fetchArticlesAsync)
    } catch (error) {
        yield put(fetchArticlesFailed(error))
    }
}

export function* onFetchArticles() {
    yield takeLatest(ARTICLES_ACTION_TYPES.FETCH_ARTICLES_START, fetchArticlesAsync)
}

export function* onArticleClicksStart() {
    yield takeLatest(ARTICLES_ACTION_TYPES.ARTICLE_CLICKS_START, ArticleClicksHandler)
}


export function* ArticlesSaga() {
    yield all([
        call(onFetchArticles),
        call(onArticleClicksStart),
    ])

}