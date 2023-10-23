import styled from "styled-components";

export const LinkIconContainer = styled.div`
	margin-top: 2rem;
	width: 40vw;
`;

export const LinkIconText = styled.div`
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
`;

export const LinkIconLogos = styled.div`
	margin-top: 2rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 3rem;
	justify-items: center;
	align-items: center;

	a {
		background: red;
		width: 5rem;
		height: 5rem;
		transition: all 0.3s;
		img {
			width: 100%;
			&:hover {
				filter: drop-shadow(0 0 2rem black) invert(100%);
			}
		}
	}
`;
