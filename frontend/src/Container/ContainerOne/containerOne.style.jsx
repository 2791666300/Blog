import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";


export const ContentContainerOne = styled.div`
	grid-column: sidebar-end / -1;
	grid-row: 1 / 2;
	// 屏幕宽度小于1000px
	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		grid-column: full-start / full-end;
		grid-row: 2 / -2;
	}
	background-color: ${({ bgcolor }) => `${bgcolor}`};
`;
