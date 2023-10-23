import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "antd";
import { message } from "antd";
import { ReactComponent as CollapseSidebar } from "../../Assets/collapseSidebar.svg";

import ToolIcon, { ICON_TYPE_CLASSES } from "../ToolIcons/ToolIcons.component";

import { selectorCurrentUser } from "../../Store/users/user.selector";

import { CollectionStart, ThumbsUpsStart } from "../../Store/users/user.action";

import { arrayPanel } from "../../Utils/arrayPanel";
import { ArticleClicksStart } from "../../Store/articles/articles.action";
import { selectorCurrentReviews } from "../../Store/reviews/reviews.selector";

import {
	Box,
	TypeBox,
	BoxTable,
	BoxTableItem,
	TypeBarContainer,
	CollapseSidebarButton,
} from "./typeBar.style";

const TypeBar = ({ articleId, articles }) => {
	const [collapse, setCollapse] = useState(false);

	const dispatch = useDispatch();

	const currentUser = useSelector(selectorCurrentUser);
	const reviews = useSelector(selectorCurrentReviews);

	const reviewsCount =
		reviews.reduce((pre, nex) => {
			return pre + nex.comments.length;
		}, 0) + reviews.length;
	const collapseHandler = () => {
		setCollapse(!collapse);
	};
	const typeBoxState = collapse ? "none" : "block";
	const height = collapse ? "90vh" : "3rem";
	const width = collapse ? "3rem" : "12rem";
	const transform = collapse ? "0deg" : "180deg";

	const [messageApi, contextHolder] = message.useMessage();

	const thumbsUpsHandler = async () => {
		if (!currentUser) {
			messageApi.open({
				type: "error",
				content: "你需要先登录",
			});
		} else {
			dispatch(ThumbsUpsStart(arrayPanel(currentUser, "thumbsUps", articleId)));

			dispatch(
				ArticleClicksStart(
					arrayPanel(articles, "thumbsUps", currentUser._id),
					articleId,
					"thumbsUps",
				),
			);
		}
	};

	const collectionsHandler = async () => {
		if (!currentUser) {
			messageApi.open({
				type: "error",
				content: "你需要先登录",
			});
		} else {
			dispatch(
				CollectionStart(arrayPanel(currentUser, "collections", articleId)),
			);
			dispatch(
				ArticleClicksStart(
					arrayPanel(articles, "collections", currentUser._id),
					articleId,
					"collections",
				),
			);
		}
	};

	return (
		<TypeBarContainer>
			{contextHolder}
			<Box width={width}></Box>
			<TypeBox typeBoxState={typeBoxState}>
				<BoxTable>
					<Badge count={articles.thumbsUps.length} offset={[0, 5]}>
						<BoxTableItem onClick={thumbsUpsHandler}>
							{/* <Avatar shape='square' size='large' /> */}
							<ToolIcon
								iconType={ICON_TYPE_CLASSES.ThumbsUp}
								height='3rem'
								width='3rem'
								fill={
									currentUser && currentUser.thumbsUps.includes(articleId)
										? "#18DF16"
										: "#8a919f"
								}
							/>
						</BoxTableItem>
					</Badge>
					<Badge count={reviewsCount} offset={[0, 5]}>
						<BoxTableItem>
							<a href='#reviews'>
								<ToolIcon
									iconType={ICON_TYPE_CLASSES.Chat}
									height='3rem'
									width='3rem'
									fill='#8a919f'
								/>
							</a>
						</BoxTableItem>
					</Badge>
					<Badge count={articles.collections.length} offset={[0, 5]}>
						<BoxTableItem onClick={collectionsHandler}>
							<ToolIcon
								iconType={ICON_TYPE_CLASSES.StartFull}
								height='3rem'
								width='3rem'
								fill={
									currentUser && currentUser.collections.includes(articleId)
										? "#18DF16"
										: "#8a919f"
								}
							/>
						</BoxTableItem>
					</Badge>
					<BoxTableItem>
						<ToolIcon
							iconType={ICON_TYPE_CLASSES.Redo}
							height='3rem'
							width='3rem'
							fill='#8a919f'
						/>
					</BoxTableItem>
					________
					<BoxTableItem>
						<ToolIcon
							iconType={ICON_TYPE_CLASSES.Warning}
							height='3rem'
							width='3rem'
							fill='#8a919f'
						/>
					</BoxTableItem>
				</BoxTable>
			</TypeBox>
			<CollapseSidebarButton
				onClick={collapseHandler}
				width={width}
				height={height}
				transform={transform}>
				<CollapseSidebar />
			</CollapseSidebarButton>
		</TypeBarContainer>
	);
};

export default TypeBar;
