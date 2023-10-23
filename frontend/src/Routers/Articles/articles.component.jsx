import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { fetchArticlesStart } from "../../Store/articles/articles.action";

import ArticlesPreview from "../ArticlesPreview/articlesPreview.component";
import Article from "../Article/article.component";

const Articles = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchArticlesStart());
	}, [dispatch]);

	return (
		<Routes>
			<Route index element={<ArticlesPreview />} />
			<Route path='/:articleId' element={<Article />} />

			{/* 后面这个是给通过分类和标签查找的目录准备的 */}
			<Route path='/*' element={<ArticlesPreview />} />
		</Routes>
	);
};

export default Articles;
