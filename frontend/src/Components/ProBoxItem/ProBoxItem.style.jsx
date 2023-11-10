import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";

export const ProBoxItemContainer = styled.div`
	display: flex;
	margin-top: 5rem;
	margin-bottom: 5rem;
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
	position: relative;

	margin: 2rem;
	margin-top: 10rem;
	flex: 1;
	@media only screen and (max-width: ${Breakpoint.bp_small}) {
		padding: 1rem;
		margin-top: 5rem;
	}

	.composition {
		&__photo {
			width: 50%;
			box-shadow: -1rem 1rem 2rem rgba(46, 37, 37, 0.6);
			@media only screen and (max-width: ${Breakpoint.bp_medium}) {
				width: 20%;
			}
			box-shadow: 0 1.5rem 4rem rgba(black, 0.4);
			border-radius: 2px;
			position: absolute;
			z-index: 1;
			transition: all 0.2s;
			outline-offset: 1.5rem;

			@media only screen and (max-width: ${Breakpoint.bp_medium}) {
				float: left;
				position: relative;
				width: 33.333333%;
				box-shadow: 0 1.5rem 4rem rgba(black, 0.2);
			}

			&--p1 {
				left: 0;
				top: -2rem;
				@media only screen and (max-width: ${Breakpoint.bp_medium}) {
					top: 0;
					/* left: 50%; */
				}
			}
			&--p2 {
				right: 0;
				top: 2rem;

				@media only screen and (max-width: ${Breakpoint.bp_medium}) {
					top: -3rem;
					transform: scale(1.3);
					z-index: 2;
				}
			}
			&--p3 {
				left: 20%;
				top: 10rem;
				@media only screen and (max-width: ${Breakpoint.bp_medium}) {
					top: 0;
					left: 0;
				}
			}

			&:hover {
				outline: 0.8rem solid #18df16;
				transform: scale(1.1) translateY(-0.5rem);
				box-shadow: 0 2.5rem 4rem rgba(black, 0.5);
				z-index: 3;
			}
		}
	}
	&:hover .composition__photo:not(:hover) {
		transform: scale(0.9);
	}
`;

export const ProBoxItemTitle = styled.div`
	position: relative;
	&::after {
		content: "";
		position: absolute;
		height: 1rem;
		width: 3.5rem;
		background-color: #18df16;
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
