import { useNavigate } from "react-router-dom";
import {
	ContentHeaderContainer,
	ContentHeaderTitle,
} from "./contentHeader.style";

const ContentHeader = ({ primaryTitle, publication, articleId }) => {
	const navigate = useNavigate();
	const clickHandle = () => {
		navigate(`/navi/creator/editor/${articleId}`);
	};
	return (
		<ContentHeaderContainer>
			<ContentHeaderTitle>{primaryTitle}</ContentHeaderTitle>
			<div>
				<span>发表于：{publication}</span>
				<div onClick={clickHandle}>编辑</div>
			</div>
		</ContentHeaderContainer>
	);
};

export default ContentHeader;
