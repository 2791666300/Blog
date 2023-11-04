import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";

export const ProBoxItemContainer = styled.div`
	display: flex;
	margin-top: 10rem;
	flex-direction: ${({ layout }) => `${layout}`};
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		flex-direction: column;
		margin-top: 3rem;
	}
`;

export const Brief = styled.div`
	flex: 1;
	padding: 5rem;
	@media only screen and (max-width: ${Breakpoint.bp_small}) {
		padding: 2rem;
	}
	margin: auto;
`;

export const Picture = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	padding: 2rem;
	@media only screen and (max-width: ${Breakpoint.bp_small}) {
		padding: 1rem;
	}
	img {
		width: 26rem;
		object-fit: cover;
		margin: 1rem;
		box-shadow: -1rem 1rem 2rem rgba(46, 37, 37, 0.6);
		@media only screen and (max-width: ${Breakpoint.bp_small}) {
			width: 20rem;
		}
	}
`;

export const ProBoxItemTitle = styled.div`
	position: relative;
	&::after {
		content: "";
		position: absolute;
		height: 1rem;
		width: 3.5rem;
		background-color: RGB(0, 199, 0);
		left: 0.3rem;
		top: -0.1rem;
	}
	font-weight: 900;
	font-size: 4rem;
	padding: 1.5rem 0;
	@media only screen and (max-width: ${Breakpoint.bp_small}) {
		font-weight: 700;
		font-size: 3rem;
	}
`;

export const ProBoxItemIntro = styled.div`
	font-size: 3rem;
	display: inline-block;
	margin-bottom: 2rem;
	position: relative;
	@media only screen and (max-width: ${Breakpoint.bp_small}) {
		font-size: 2rem;
	}
	&::before {
		content: "";
		display: block;
		width: 14px;
		height: 14px;
		border-left: 2px solid #333;
		border-top: 2px solid #333;
		position: absolute;
		top: 0;
		left: -10px;
	}
	&::after {
		content: "";
		display: block;
		width: 14px;
		height: 14px;
		border-right: 2px solid #333;
		border-bottom: 2px solid #333;
		position: absolute;
		bottom: 0;
		right: -10px;
	}
`;

export const ProBoxItemDesc = styled.div`
	margin: 2rem 0;
	letter-spacing: 0.2rem;
	font-size: 1.4rem;
	line-height: 2.5rem;
	@media only screen and (max-width: ${Breakpoint.bp_small}) {
		font-size: 1.3rem;
	}
`;
