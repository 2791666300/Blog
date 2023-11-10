import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";
export const AboutBlogContainer = styled.div`
	grid-row: 2 / -2;
	grid-column: 1 / -1;
	color: white;
	font-size: 1.5rem;
	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		font-size: 1rem;
	}
	background: url("/img/bgimg-1.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		background-position: right;
	}
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: auto;
`;

export const AbTitle = styled.h1`
	font-size: 5rem;
	margin: 2rem;
	@media only screen and (max-width: ${Breakpoint.bp_small}) {
		font-size: 3.5rem;
	}
`;

export const ProviderContainer = styled.div`
	width: 60rem;
	height: 100vh;
	padding-top: 5rem;

	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		padding-top: 2rem;
		width: 25rem;
	}
`;
