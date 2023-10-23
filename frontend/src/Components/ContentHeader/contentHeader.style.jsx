import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";

export const ContentHeaderContainer = styled.div`
	padding-top: 4rem;
	border-bottom: 1px solid #6b6b6b;
	margin: 0 1.4rem;

	div {
		display: flex;

		justify-content: space-between;
		align-items: center;
		span {
			background-color: ${Colors.color_black_1};
			border-radius: 1rem;
			padding: 2rem 2rem;
			display: block;
			font-size: 1.6rem;
			margin-top: 1rem;
			width: 80%;
			@media only screen and (max-width: ${Breakpoint.bp_small}) {
				width: 100%;
			}
			img {
				width: 100%;
				height: 100%;
			}
		}

		div {
			font-size: 1.5rem;
			font-weight: 100;
			letter-spacing: 2px;
			color: #18df16;
			cursor: pointer;
			&:hover {
				border-bottom: 1px solid #18df16;
			}
		}
	}
`;

export const ContentHeaderTitle = styled.h1`
	font-size: 5rem;
	margin-bottom: 3rem;
	text-align: center;
`;
