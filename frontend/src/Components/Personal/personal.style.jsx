import styled from "styled-components";

import Breakpoint from "../../constants/Breakpoint";

export const PersonalContainer = styled.div`
	background-color: inherit;
	grid-column: col-start 7 / full-end;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		grid-column: 1 / -2;
	}
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const PersonalList = styled.div`
	height: 80%;
	width: 80%;

	box-shadow: 0 1rem 2rem black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
	}
	.realtors__img {
		width: 10rem;
		border-radius: 50%;
		display: block;
	}
	.name {
		color: white;
		font-size: 2.3rem;
		margin: 10px;
	}
`;

export const PersonalBtn = styled.div`
	width: 100%;
	text-align: center;
	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		display: flex;
		justify-content: center;
		& > * {
			margin: 0 1rem;
		}
	}
`;
