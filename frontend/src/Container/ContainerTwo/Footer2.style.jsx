import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";


export const FooterContainer = styled.div`
	grid-column: 2 / -1;
	grid-row: -2 / -1;
	background-color: #333;
	color: #f7f7f7;
	padding: 8rem;
	font-size: 1.4rem;
	z-index: 100;
	@media only screen and (max-width: ${Breakpoint.bp_small}) {
		padding: 4rem;
	}

	ul {
		list-style: none;
	}
`;

export const FooterNavigation = styled.div`
	width: 40%;
	border-top: 1px solid #f7f7f7;
	padding-top: 2rem;
	display: inline-block;

	@media only screen and (max-width: ${Breakpoint.bp_small}) {
		width: 100%;
	}
`;

export const FooterCopyright = styled.div`
	border-top: 1px solid #f7f7f7;
	padding-top: 2rem;
	width: 40%;
	float: right;

	@media only screen and (max-width: ${Breakpoint.bp_small}) {
		width: 100%;
		margin-top: 5rem;
	}
`;
