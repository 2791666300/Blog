import styled from "styled-components";

import { ReactComponent as ThumbUp } from "../../Assets/thumbUp.svg";

export const ContentFooterContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 5rem;
	p {
		font-size: 1.6rem;
		padding: 2rem 0;
	}
`;

export const ThumbUpIcon = styled(ThumbUp)`
	height: 3rem;
	path {
		fill: #6b6b6b;
	}

	&:hover {
		path {
			fill: #c69963;
		}
	}
`;
export const ThumbDownIcon = styled(ThumbUpIcon)`
	transform: rotate(180deg);
`;
