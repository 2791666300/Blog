import { useSelector } from "react-redux";

import ReviewCreate from "../ReviewCreate/reviewCreate.component";
import ReviewsItem from "../ReviewsItem/reviewsItem.component";

import { selectorCurrentReviews } from "../../Store/reviews/reviews.selector";

import { ReviewsContainer, ReviewsTitle, ReviewsTables } from "./reviews.styls";

const Reviews = (props) => {
	const reviews = useSelector(selectorCurrentReviews);

	return (
		<ReviewsContainer id='reviews'>
			<ReviewCreate articleId={props.articleId} />
			<ReviewsTitle>
				全部评论 :<span>{reviews ? reviews.length : 0}</span>
			</ReviewsTitle>
			<ReviewsTables>
				{reviews
					? reviews.map((item) => {
							return (
								<ReviewsItem
									key={item.id}
									reviewitem={item}
									articleId={props.articleId}
								/>
							);
					  })
					: null}
			</ReviewsTables>
		</ReviewsContainer>
	);
};

export default Reviews;
