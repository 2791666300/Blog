import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";

export const ArticlesPreviewListContainer = styled.div`
	height: 100%;
	width: 70%;
	margin: 2.5rem 1rem;
	padding: 2rem;
	box-shadow: 0 1rem 2rem black;
	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		margin: 0;
		width: 100%;
	}
`;

export const GoToCreatorContainer = styled.div`
	height: 6rem;
	display: flex;
	justify-content: flex-end;
`;
