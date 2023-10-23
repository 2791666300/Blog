import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";

export const IndexPageContainer = styled.div`
	background-color: ${Colors.color_secondary};
	display: grid;
	grid-template-rows: 95vh 5vh min-content min-content min-content min-content min-content;
	grid-template-columns:
		[sidebar-start] 5rem [sidebar-end full-start] minmax(6rem, 1fr)
		[center-start]
		repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
		[center-end] minmax(6rem, 1fr) [full-end];

	// 当屏幕宽度小于1000px的时候，导航栏移动到最上面
	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		grid-template-rows: 5rem 95vh min-content min-content min-content min-content min-content;
		grid-template-columns:
			[full-start] minmax(6rem, 1fr)
			[center-start]
			repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
			[center-end] minmax(6rem, 1fr) [full-end] 5vh;
	}
	// 当屏幕宽度小于800px时
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		grid-template-rows: 5rem calc(100vh - 6rem) min-content min-content min-content min-content min-content;
		grid-template-columns:
			[full-start] minmax(6rem, 1fr)
			[center-start]
			repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
			[center-end] minmax(6rem, 1fr) [full-end] 5vh;
	}
`;

export const Bottom = styled.div`
	background-color: ${Colors.color_primary};
	grid-column: sidebar-end / -1;
	grid-row: 2 / 3;
	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		grid-column: -2 / -1;
		grid-row: 2 / -1;
	}
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		grid-column: -2 / -1;
		grid-row: 2 / -1;
	}
`;
