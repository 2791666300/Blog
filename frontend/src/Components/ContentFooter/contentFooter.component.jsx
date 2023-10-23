import TextButton from "../Button-text/buttonText.component";

import {
	ContentFooterContainer,
	ThumbUpIcon,
	ThumbDownIcon,
} from "./contentFooter.style";

const ContentFooter = () => {
	return (
		<ContentFooterContainer>
			<p>页面是否对你有帮助？</p>
			<ThumbUpIcon />
			<ThumbDownIcon />
			<TextButton>编辑此页面 &rarr;</TextButton>
		</ContentFooterContainer>
	);
};

export default ContentFooter;
