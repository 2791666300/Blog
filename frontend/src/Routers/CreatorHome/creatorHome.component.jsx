import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
	selectorCurrentUser,
	selectorAllUsers,
} from "../../Store/users/user.selector";
import { selectorArticles } from "../../Store/articles/articles.selector";
import { selectorAllReviews } from "../../Store/reviews/reviews.selector";
import { GetAllUsersStart } from "../../Store/users/user.action";
import { getAllReviewsStart } from "../../Store/reviews/reviews.action";

import PortraitName from "../../Components/PortraitName/PortraitName.component";

import {
	CreatorHomeContainer,
	CreatorSidebar,
	CreatorContent,
	ToEditor,
	DataAnalysis,
	AnalysisList,
	AnalysisItem,
	DataChart,
	ChartContent,
} from "./creatorHome.style";

const CreatorHome = (props) => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectorCurrentUser);
	const users = useSelector(selectorAllUsers);
	const articles = useSelector(selectorArticles);
	const reviews = useSelector(selectorAllReviews);
	
	useEffect(() => {
		dispatch(GetAllUsersStart());
		dispatch(getAllReviewsStart());
	}, [dispatch]);

	const articlesCounts = articles?.length;
	const readCounts = articles?.reduce((pre, nex) => {
		return pre + nex.clicked;
	}, 0);

	const commentsCounts =
		reviews?.reduce((pre, nex) => {
			return pre + nex.comments.length;
		}, 0) + reviews?.length;

	const likeCounts = users?.reduce((pre, nex) => {
		return pre + nex.thumbsUps.length;
	}, 0);
	const collectionsCounts = users?.reduce((pre, nex) => {
		return pre + nex.collections.length;
	}, 0);

	const commentsLikes = reviews?.reduce((pre, nex) => {
		return pre + nex.thumbsUps.length;
	}, 0);

	return (
		<CreatorHomeContainer>
			<CreatorSidebar>
				<PortraitName photo={currentUser.photo} name={currentUser.name} />
				<ToEditor href='/navi/creator/editor'>写文章</ToEditor>
			</CreatorSidebar>
			<CreatorContent>
				<DataAnalysis>
					<h1>文章数据</h1>
					<AnalysisList>
						<AnalysisItem>
							<strong>文章总篇数</strong>
							<span>{articlesCounts}</span>
						</AnalysisItem>
						<AnalysisItem>
							<strong>文章阅读数</strong>
							<span>{readCounts}</span>
						</AnalysisItem>
						<AnalysisItem>
							<strong>文章评论数</strong>
							<span>{commentsCounts}</span>
						</AnalysisItem>
						<AnalysisItem>
							<strong>文章点赞数</strong>
							<span>{likeCounts}</span>
						</AnalysisItem>
						<AnalysisItem>
							<strong>文章收藏数</strong>
							<span>{collectionsCounts}</span>
						</AnalysisItem>
						<AnalysisItem>
							<strong>评论点赞数</strong>
							<span>{commentsLikes}</span>
						</AnalysisItem>
					</AnalysisList>
				</DataAnalysis>
				<DataChart>
					<h1>数据分析(待上线)</h1>
					<ChartContent>
						<img src='/img/数据分析2.gif' alt='数据分析图' />
						<img src='/img/数据分析2.gif' alt='数据分析图' />
						<img src='/img/数据分析.jpg' alt='数据分析图' />
						<img src='/img/数据分析.jpg' alt='数据分析图' />
					</ChartContent>
				</DataChart>
			</CreatorContent>
		</CreatorHomeContainer>
	);
};

export default CreatorHome;
