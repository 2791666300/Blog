import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { reviewThumbsupsStart } from "../../Store/reviews/reviews.action";
import { selectorCurrentUser } from "../../Store/users/user.selector";

import { timeConversion } from "../../Utils/TimeConversion";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/button-component";

import ToolIcon, { ICON_TYPE_CLASSES } from "../ToolIcons/ToolIcons.component";

import ReviewItemTable from "../ReviewItemTable/ReviewItemTable.component";

import { arrayPanel } from "../../Utils/arrayPanel";
import TextArea from "../TextArea/TextArea.component";

import { reviewCommentStart } from "../../Store/reviews/reviews.action";

import {
	ReviewsItemContainer,
	ReviewsItemPhoto,
	ReviewBrief,
	ReviewsItemContent,
	IconContainer,
	ReviewAction,
	ReviewCreator,
	ReviewCreatorBtn,
} from "./reviewsItem.style";

const ReviewsItem = (props) => {
	const dispatch = useDispatch();
	const [click, setClick] = useState(false);
	const [textForm, setTextForm] = useState();
	const [messageApi, contextHolder] = message.useMessage();
	const { review, user, createdAt, id, comments } = props.reviewitem;

	const currentUser = useSelector(selectorCurrentUser);
	const clickHandler = () => {
		setClick(!click);
	};
	const TextChangeHandler = (e) => {
		e.preventDefault();
		setTextForm(e.target.value);
	};
	const ThumbsUpHandler = () => {
		dispatch(
			reviewThumbsupsStart(
				arrayPanel(props.reviewitem, "thumbsUps", currentUser._id),
				id,
				props.articleId,
			),
		);
	};

	const comment = {
		review: textForm,
		thumbsUps: [],
		createdAt: new Date(),
		commentUser: {
			photo: currentUser?.photo,
			name: currentUser?.name,
		},
	};

	const createReviewHandler = () => {
		if (!textForm) {
			messageApi.open({
				type: "error",
				content: "评论不能为空",
			});
		} else {
			dispatch(
				reviewCommentStart(comments.concat(comment), id, props.articleId),
			);
			setTextForm("");
			setClick(!click);
		}
	};

	return (
		<ReviewsItemContainer>
			{contextHolder}
			<ReviewsItemPhoto>
				<img
					src={`http://42.194.140.99:80/img/users/${user.photo}`}
					alt={user.photo}
				/>
			</ReviewsItemPhoto>
			<ReviewsItemContent>
				<ReviewBrief>
					<strong>{user.name}</strong>
					<span>{user.position}</span>
					<i>{timeConversion(new Date(createdAt))}</i>
				</ReviewBrief>
				<p>{review}</p>
				<ReviewAction>
					<IconContainer onClick={ThumbsUpHandler}>
						<ToolIcon
							iconType={ICON_TYPE_CLASSES.ThumbsUp}
							height='2rem'
							width='2rem'
							fill={
								props.reviewitem &&
								props.reviewitem.thumbsUps.includes(currentUser?._id)
									? "#18DF16"
									: "#8a919f"
							}
						/>
						<span>
							{props.reviewitem.thumbsUps
								? props.reviewitem.thumbsUps.length
								: 0}
						</span>
					</IconContainer>
					<IconContainer onClick={clickHandler}>
						<ToolIcon
							iconType={ICON_TYPE_CLASSES.Chat}
							height='2rem'
							width='2rem'
							fill={click ? "#18DF16" : "#8a919f"}
						/>
						{click ? <strong>取消回复</strong> : <span>{comments.length}</span>}
					</IconContainer>
				</ReviewAction>
				{click && (
					<ReviewCreator>
						<TextArea
							placeholder={`回复${user.name}:`}
							value={textForm}
							onChange={TextChangeHandler}
						/>
						<ReviewCreatorBtn onClick={createReviewHandler}>
							<Button buttonType={BUTTON_TYPE_CLASSES.action_1}>
								发表评论
							</Button>
						</ReviewCreatorBtn>
					</ReviewCreator>
				)}

				{comments.map((comment) => {
					return (
						<ReviewItemTable
							comment={comment}
							comments={comments}
							key={comment._id}
							user={user.name}
							currentUser={currentUser}
							id={id}
							articleId={props.articleId}
						/>
					);
				})}
			</ReviewsItemContent>
		</ReviewsItemContainer>
	);
};

export default ReviewsItem;
