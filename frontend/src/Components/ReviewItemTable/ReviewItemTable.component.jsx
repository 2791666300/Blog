import { useState } from "react";
import { useDispatch } from "react-redux";

import ToolIcon, { ICON_TYPE_CLASSES } from "../ToolIcons/ToolIcons.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/button-component";
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
} from "./ReviewItemTable.style";
const ReviewItemTable = (props) => {
	const dispatch = useDispatch();
	const [click, setClick] = useState(false);
	const { commentUser, review } = props.comment;
	const [textForm, setTextForm] = useState(`回复【 ${commentUser.name} 】: `);

	const clickHandler = () => {
		setClick(!click);
	};

	const TextChangeHandler = (e) => {
		e.preventDefault();
		setTextForm(e.target.value);
	};

	const comment = {
		review: textForm,
		thumbsUps: [],
		createdAt: new Date(),
		commentUser: {
			photo: props.currentUser?.photo,
			name: props.currentUser?.name,
		},
	};

	const createReviewHandler = () => {
		dispatch(
			reviewCommentStart(
				props.comments.concat(comment),
				props.id,
				props.articleId,
			),
		);
		setTextForm("");
		setClick(!click);
	};

	return (
		<ReviewsItemContainer>
			<ReviewsItemPhoto>
				<img
					src={`http://localhost:1000/img/users/${commentUser.photo}`}
					alt={commentUser.photo}
				/>
			</ReviewsItemPhoto>
			<ReviewsItemContent>
				<ReviewBrief>
					<strong>{commentUser.name}</strong>
				</ReviewBrief>
				<p>{review}</p>
				<ReviewAction>
					<IconContainer>
						<ToolIcon
							iconType={ICON_TYPE_CLASSES.ThumbsUp}
							height='2rem'
							width='2rem'
							fill='#8a919f'
						/>
						<span></span>
					</IconContainer>
					<IconContainer onClick={clickHandler}>
						<label htmlFor='input'>
							<ToolIcon
								iconType={ICON_TYPE_CLASSES.Chat}
								height='2rem'
								width='2rem'
								fill={click ? "#18DF16" : "#8a919f"}
							/>
							{click ? <strong>取消回复</strong> : <span></span>}
						</label>
					</IconContainer>
				</ReviewAction>
				{click && (
					<ReviewCreator>
						<TextArea
							placeholder={`回复${commentUser.name}:`}
							value={textForm}
							onChange={TextChangeHandler}
							id='input'
						/>

						<ReviewCreatorBtn onClick={createReviewHandler}>
							<Button buttonType={BUTTON_TYPE_CLASSES.action_1}>
								发表评论
							</Button>
						</ReviewCreatorBtn>
					</ReviewCreator>
				)}
			</ReviewsItemContent>
		</ReviewsItemContainer>
	);
};

export default ReviewItemTable;
