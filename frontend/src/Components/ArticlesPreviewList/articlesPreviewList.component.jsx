import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectorArticles } from "../../Store/articles/articles.selector";
import { selectorCurrentUser } from "../../Store/users/user.selector";

import ArticlesPreviewItem from "../ArticlesPreviewItem/articlesPreviewItem.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/button-component";

import Spinner from "../Spinner/Spinner.component";
import {
	ArticlesPreviewListContainer,
	GoToCreatorContainer,
	ArticlesNav,
	NavItem,
} from "./articlesPreviewList.style";
import { useState } from "react";

const ArticlesPreviewList = (props) => {
	const articles = useSelector(selectorArticles);
	const [filters, setFilter] = useState(null);

	const currentUser = useSelector(selectorCurrentUser);

	const [search] = useSearchParams();
	const category = search.get("category");
	const label = search.get("label");

	if (!articles) {
		return (
			<ArticlesPreviewListContainer lodaing={!articles}>
				<Spinner character='LOADING' />
			</ArticlesPreviewListContainer>
		);
	}

	let articlesPreViews = articles;

	if (category) {
		articlesPreViews = articles.filter((article) => {
			return article.category.includes(category);
		});
	}
	if (label) {
		articlesPreViews = articles.filter((article) => {
			return article.label.includes(label);
		});
	}

	function compreHandler() {
		setFilter(null);
		
	}

	function latestHandler() {
		articlesPreViews = articlesPreViews.sort(
			(a, b) =>
				Math.round(new Date(b.publication)) -
				Math.round(new Date(a.publication)),
		);

		setFilter(articlesPreViews);
	}

	function hottest() {
		articlesPreViews = articlesPreViews.sort((a, b) => b.clicked - a.clicked);

		setFilter(articlesPreViews);
	}

	return (
		<ArticlesPreviewListContainer lodaing={!articles}>
			{currentUser && currentUser.role === "blogger" && (
				<GoToCreatorContainer>
					<a href='/navi/creator'>
						<Button buttonType={BUTTON_TYPE_CLASSES.action_1_blue}>
							创作者中心 &rarr;
						</Button>
					</a>
				</GoToCreatorContainer>
			)}
			<ArticlesNav>
				<NavItem onClick={compreHandler}>综合排序</NavItem>
				<NavItem onClick={latestHandler}>最新优先</NavItem>
				<NavItem onClick={hottest}>最热优先</NavItem>
			</ArticlesNav>
			{filters
				? filters.map((article) => {
						return <ArticlesPreviewItem article={article} key={article.id} />;
				  })
				: articlesPreViews.map((article) => {
						return <ArticlesPreviewItem article={article} key={article.id} />;
				  })}
		</ArticlesPreviewListContainer>
	);
};

export default ArticlesPreviewList;
