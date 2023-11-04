import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectorCurrentUser } from "../../Store/users/user.selector";
import {
	ContentHeaderContainer,
	ContentHeaderTitle,
} from "./contentHeader.style";

const ContentHeader = ({ primaryTitle, publication, articleId }) => {
	const navigate = useNavigate();

	const currentUser = useSelector(selectorCurrentUser);
	const clickHandle = () => {
		navigate(`/navi/creator/editor/${articleId}`);
	};
	return (
		<ContentHeaderContainer>
			<ContentHeaderTitle>{primaryTitle}</ContentHeaderTitle>
			<div>
				<span>发表于：{publication}</span>
				{currentUser && currentUser.role === "blogger" && (
					<div onClick={clickHandle}>编辑</div>
				)}
			</div>
		</ContentHeaderContainer>
	);
};

export default ContentHeader;
