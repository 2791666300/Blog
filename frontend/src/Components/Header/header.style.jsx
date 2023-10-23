import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";

export const HeaderContainer = styled.header`
	background-color: ${Colors.color_grey_dark_1};
	grid-column: full-start / col-end 6;
	background-image: linear-gradient(
			rgba(16, 29, 44, 0.9),
			rgba(16, 29, 44, 0.8)
		),
		url("/img/hero-2.jpg");

	background-size: cover;
	background-position: center;
	padding: 8rem;
	padding-top: 4rem;

	display: grid;
	grid-template-rows: 1fr min-content minmax(6rem, min-content) 1fr;
	grid-template-columns: minmax(min-content, max-content);
	grid-row-gap: 1.5rem;
	justify-content: flex-start;

	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		grid-column: 1 / -2;
	}
	@media only screen and (max-width: ${Breakpoint.bp_small}) {
		padding: 5rem;
	}

	.header__logo {
		height: 10rem;
		margin-top: -2rem;
		margin-bottom: 5rem;
	}

	.header__seenon-text {
		display: grid;
		grid-template-columns: 1fr max-content 1fr;
		grid-column-gap: 1.5rem;
		align-items: center;

		font-size: 1.6rem;
		color: white;

		&::before,
		&::after {
			content: "";
			height: 1px;
			display: block;
			background-color: currentColor;
		}
	}
	.header__seenon-logos {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 3rem;
		justify-items: center;
		align-items: center;

		img {
			max-height: 5rem;
			max-width: 100%;
			&:hover {
				
				filter: drop-shadow(0 0 2rem black) invert(100%);
			}
		}
	}
`;