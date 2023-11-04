import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ArticleClicksStart } from "../../Store/articles/articles.action";

import { timeConversion } from "../../Utils/TimeConversion";
import Label from "../Label/label.component";
import {
	ArticlesPreviewItemContainer,
	ItemMetaContainer,
	ItemMetaList,
	MetaItem,
	ItemContentWrapper,
	ContentWrapperList,
	ContentWrapperItem,
	CoverImg,
	EyeContainer,
} from "./articlesPreviewItem.style";

const ArticlesPreviewItem = (props) => {
	const dispatch = useDispatch();
	const {
		user,
		publication,
		category,
		primaryTitle,
		introduction,
		label,
		clicked,
		id,
		coverImg,
	} = props.article;

	const navigate = useNavigate();
	const goToArticle = () => {
		dispatch(ArticleClicksStart(clicked + 1, id, "clicked"));
		navigate(`/navi/articles/${id}`);
		window.scrollTo(0, 0);
	};
	return (
		<ArticlesPreviewItemContainer onClick={goToArticle}>
			<ItemMetaContainer>
				<ItemMetaList>
					<MetaItem>{user?.name}</MetaItem>
					<MetaItem>{timeConversion(new Date(publication))}</MetaItem>
					<MetaItem>
						{category.map((cg) => (
							<span key={cg}>{cg}</span>
						))}
					</MetaItem>
				</ItemMetaList>
			</ItemMetaContainer>
			<ItemContentWrapper>
				<ContentWrapperList>
					<ContentWrapperItem>
						<h3>{primaryTitle}</h3>
					</ContentWrapperItem>
					<ContentWrapperItem>
						<p>{introduction}</p>
					</ContentWrapperItem>
					<ContentWrapperItem>
						<div>
							{label.map((lb) => (
								<Label label={lb} key={lb} />
							))}
							<span>
								<EyeContainer /> {clicked}
							</span>
						</div>
					</ContentWrapperItem>
				</ContentWrapperList>
				<CoverImg>
					<img src={coverImg} alt={coverImg} />
				</CoverImg>
			</ItemContentWrapper>
		</ArticlesPreviewItemContainer>
	);
};

export default ArticlesPreviewItem;
