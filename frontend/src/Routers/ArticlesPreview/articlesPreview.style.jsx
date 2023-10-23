import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";

export const ArticlesPreviewContainer = styled.div`
	grid-row: 2 / -2;
	grid-column: 1 / -1;
	color: white;
	background-color: ${Colors.color_black_1};
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ArticlesContent = styled.div`
	height: 100%;
	width: 80%;
	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		width: 90%;
	}
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		width: 100%;
	}
	display: flex;
	justify-content: space-between;
`;

export const ArticlesSidebar = styled.div`
	height: 100%;
	width: 30%;
	margin: 2.5rem 1rem;
	position: fixed;
	right: 0;
	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		display: none;
	}
`;


