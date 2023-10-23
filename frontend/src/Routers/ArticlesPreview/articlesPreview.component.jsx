import ArticlesPreviewList from "../../Components/ArticlesPreviewList/articlesPreviewList.component";
import Personal from "../../Components/Personal/personal.component";

import {
	ArticlesPreviewContainer,
	ArticlesContent,
	ArticlesSidebar,
} from "./articlesPreview.style";

const ArticlesPreview = () => {
	return (
		<ArticlesPreviewContainer>
			<ArticlesContent>
				<ArticlesPreviewList></ArticlesPreviewList>
				<ArticlesSidebar>
					<Personal />
				</ArticlesSidebar>
			</ArticlesContent>
		</ArticlesPreviewContainer>
	);
};

export default ArticlesPreview;
