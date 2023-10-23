import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";

import { createReviewOnArticleStart } from "../../Store/reviews/reviews.action";
import { selectorCurrentUser } from "../../Store/users/user.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/button-component";
import HeadPortrait from "../HeadPortrait/headportrait.component";

import TextArea from "../TextArea/TextArea.component";

import {
	ReviewCreatorContainer,
	CurrentUserContainer,
	ReviewCreatorBtn,
} from "./reviewCreate.style";

const ReviewCreate = (props) => {
	const [textForm, setTextForm] = useState();
	const dispatch = useDispatch();
	const [messageApi, contextHolder] = message.useMessage();
	const currentUser = useSelector(selectorCurrentUser);
	const TextChangeHandler = (e) => {
		e.preventDefault();
		setTextForm(e.target.value);
	};
	const createReviewHandler = () => {
		if (!textForm) {
			messageApi.open({
				type: "error",
				content: "评论不能为空",
			});
		} else {
			dispatch(createReviewOnArticleStart(textForm, props.articleId));
			setTextForm("");
		}
	};
	return (
		<Fragment>
			{contextHolder}
			<h2>评论</h2>
			<ReviewCreatorContainer>
				<CurrentUserContainer>
					{currentUser && (
						<HeadPortrait
							src={`http://localhost:1000/img/users/${currentUser?.photo}`}
							alt='default'
						/>
					)}
				</CurrentUserContainer>
				<TextArea
					placeholder='输入评论'
					value={textForm}
					onChange={TextChangeHandler}
				/>
			</ReviewCreatorContainer>
			<ReviewCreatorBtn onClick={createReviewHandler}>
				<Button buttonType={BUTTON_TYPE_CLASSES.action_1}>发表评论</Button>
			</ReviewCreatorBtn>
		</Fragment>
	);
};

export default ReviewCreate;
