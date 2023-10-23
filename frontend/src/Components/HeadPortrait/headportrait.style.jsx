import styled from "styled-components";

export const HeadPortraitContainer = styled.div`
	height: 4.5rem;
	width: 4.5rem;
	border-radius: 100%;
	overflow: hidden;
	margin-right: 1rem;

	img {
		height: 100%;
		width: 100%;
		transition: all 0.2s;
		&:hover {
			filter: contrast(90%);
		}
	}
`;
