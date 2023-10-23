import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";

export const PrimaryTitle = styled.h1`
	color: white;
	text-transform: uppercase;
	margin-bottom: 6rem;
	font-size: 4rem;
	font-weight: 700;
	letter-spacing: 1.7rem;
	cursor: pointer;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		margin-bottom: 4rem;
		font-size: 3rem;
		letter-spacing: 1.2rem;
	}
`;
export const SecondaryTitle = styled.h2`
	color: white;
	text-transform: uppercase;
	margin-bottom: 3rem;
	font-size: 2.5rem;
	font-weight: 600;
	letter-spacing: 1rem;
	cursor: pointer;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		margin-bottom: 2rem;
		font-size: 1.8rem;
		letter-spacing: 1rem;
	}
`;
export const TertiaryTitle = styled.h3`
	color: #c69963;
	text-transform: uppercase;
	margin-bottom: 1rem;
	font-size: 2rem;
	font-weight: 600;
	letter-spacing: 0.8rem;
	cursor: pointer;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		margin-bottom: 1rem;
		font-size: 1.5rem;
		letter-spacing: 0.6rem;
	}
`;

export const FourthTitle = styled.h4`
	color: white;
	text-transform: uppercase;
	margin-bottom: 1rem;
	font-size: 1.6rem;
	font-weight: 600;
	letter-spacing: 0.4rem;
	cursor: pointer;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		font-size: 1.4rem;
		margin-bottom: 0.5rem;
	}
`;
