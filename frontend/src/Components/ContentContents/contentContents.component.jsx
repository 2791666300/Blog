import ContentContentsItem from "../ContentContentsItem/contentContentsItem.component";

import { ContentContentsContainer } from "./contentContents.style";

const ContentContents = (props) => {
	return (
		<ContentContentsContainer>
			{props.content.map((item, index) => {
				return <ContentContentsItem item={item} key={index} index={index} />;
			})}
		</ContentContentsContainer>
	);
};

export default ContentContents;
