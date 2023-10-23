import { timeConversion } from "../../Utils/TimeConversion";

import ContentHeader from "../ContentHeader/contentHeader.component";
import ContentFooter from "../ContentFooter/contentFooter.component";
import MarkDetail from "../MarkDetail/MarkDetail";
import Reviews from "../Reviews/reviews.component";
import { ContentsContainer, ContentBox } from "./contents.style";
const Contents = (props) => {
	const { primaryTitle, publication, article, id } = props.articles;

	return (
		<ContentsContainer>
			<ContentBox>
				<ContentHeader
					publication={timeConversion(new Date(publication))}
					primaryTitle={primaryTitle}
					articleId={id}
				/>
				<MarkDetail content={article} />
				<ContentFooter />
				<Reviews articleId={id} />
			</ContentBox>
		</ContentsContainer>
	);
};

export default Contents;
