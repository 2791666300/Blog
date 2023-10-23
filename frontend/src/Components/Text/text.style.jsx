import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";
export const PrimaryText = styled.p`
	font-size: 1.4rem;
	font-weight: 100;
	line-height: 2rem;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;

	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		font-size: 1.2rem;
	}
`;
export const SecondaryText = styled.i`
	font-weight: 300;
	font-size: 1.2rem;
	margin: 2rem;
	color: white;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		font-size: 1rem;
		margin: 1rem 3.5rem;
	}
`;

export const TertiaryText = styled.p``;
