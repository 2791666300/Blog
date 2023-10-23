import { useSelector } from "react-redux";

import { selectorArticles } from "../../../Store/articles/articles.selector";
import { selectorCurrentUser } from "../../../Store/users/user.selector";

import ArticlesPreviewItem from "../../../Components/ArticlesPreviewItem/articlesPreviewItem.component";

import ContentContainer from "../Contentcontainer/contentcontainer.component";

import { LikesContainer } from "./likes.style";

const Likes = () => {
	const articles = useSelector(selectorArticles);
	const currentUser = useSelector(selectorCurrentUser);

	const likes = articles.filter((article) =>
		currentUser.collections.some((collection) => collection === article.id),
	);
	
	return (
		<ContentContainer>
			<LikesContainer>
				{likes.map((like) => {
					return <ArticlesPreviewItem article={like} key={like.id} />;
				})}
			</LikesContainer>
		</ContentContainer>
	);
};

export default Likes;
