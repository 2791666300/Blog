import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectorArticles } from "../../Store/articles/articles.selector";
import { selectorCurrentUser } from "../../Store/users/user.selector";

import ArticlesPreviewItem from "../ArticlesPreviewItem/articlesPreviewItem.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/button-component";

import {
	ArticlesPreviewListContainer,
	GoToCreatorContainer,
} from "./articlesPreviewList.style";

const ArticlesPreviewList = (props) => {
	const articles = useSelector(selectorArticles);
	const currentUser = useSelector(selectorCurrentUser);

	const [search] = useSearchParams();
	const category = search.get("category");
	const label = search.get("label");

	if (!articles) {
		return (
			<ArticlesPreviewListContainer>
				<h1>啥也没有！</h1>
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

	return (
		<ArticlesPreviewListContainer>
			{currentUser && currentUser.role === "blogger" && (
				<GoToCreatorContainer>
					<a href='/navi/creator'>
						<Button buttonType={BUTTON_TYPE_CLASSES.action_1_blue}>
							创作者中心 &rarr;
						</Button>
					</a>
				</GoToCreatorContainer>
			)}
			{articlesPreViews.map((article) => {
				return <ArticlesPreviewItem article={article} key={article.id} />;
			})}
		</ArticlesPreviewListContainer>
	);
};

export default ArticlesPreviewList;
