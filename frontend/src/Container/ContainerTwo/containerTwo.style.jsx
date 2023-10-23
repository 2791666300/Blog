import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";

export const ContainerTwoContainer = styled.div`
	display: grid;
	grid-template-rows: 10vh min-content minmax(90vh, 1fr) min-content;
	grid-template-columns:
		[typebar-start] min-content [typebar-end content-start] minmax(70rem, 1fr)
		[content-end catalogue-start] 30rem [catalogue-end];
	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		grid-template-rows: 10vh min-content minmax(90vh, 1fr) min-content;
		grid-template-columns:
			[typebar-start] 0 [typebar-end content-start] minmax(min-content, 1fr)
			[ content-end catalogue-start] 0rem [catalogue-end];
	}
	position: relative;
`;

export const Top = styled.div`
	grid-row: 2 / 3;
	grid-column: 1 / -1;
`;
