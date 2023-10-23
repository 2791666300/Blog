import { useParams } from "react-router-dom";
import { Fragment, useEffect } from "react";


import { useSelector, useDispatch } from "react-redux";

import { selectorArticles } from "../../Store/articles/articles.selector";
import { fetchReviewsOnArticleStart } from "../../Store/reviews/reviews.action";

import TypeBar from "../../Components/TypeBar/typeBar.component";
import Contents from "../../Components/Contents/contents.component";
import Catalogue from "../../Components/Catalogue/catalogue.component";
import ToTop from "../../Components/ToTop/totop.component";

const Article = () => {
	const dispatch = useDispatch();
	const { articleId } = useParams();
	const articles = useSelector(selectorArticles);

	useEffect(() => {
		dispatch(fetchReviewsOnArticleStart(articleId));
	}, [dispatch, articleId]);

	if (!articles) {
		return <h1>啥也没有</h1>;
	}
	const currentArticle = articles.find((item) => item.id === articleId);

	return (
		<Fragment>
			<TypeBar articleId={articleId} articles={currentArticle} />

			<Contents articles={currentArticle} />
			<Catalogue articles={currentArticle} />
			<ToTop />
		</Fragment>
	);
};

export default Article;
