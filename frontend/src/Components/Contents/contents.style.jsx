import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";

export const ContentsContainer = styled.div`
	grid-row: 2/ -2;
	grid-column: content-start / content-end;
	background-color: ${Colors.color_black_2};
	background-color: ${Colors.color_black_2};
`;

export const ContentBox = styled.div`
	height: 100%;
	width: 100%;
	color: white;
	padding: 3rem;
	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		padding: 1rem;
	}
`;
