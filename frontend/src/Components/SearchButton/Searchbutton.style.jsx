import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";

export const SearchButtonContainer = styled.div`
	width: 14rem;
	height: 3.5rem;
	padding: 0 1rem;
	cursor: pointer;
	@media only screen and (max-width: ${Breakpoint.bp_small}) {
		width: 4rem;
		p,
		div {
			display: none;
		}
		span {
			display: none;
		}
	}

	display: flex;
	justify-content: flex-start;
	align-items: center;
	border: none;
	border-radius: 2rem;
	background-color: ${Colors.color_black_2};
	div {
		display: none;
	}
	&:hover {
		outline: 2px solid ${Colors.color_green_1};
		p {
			display: none;
		}
		div {
			display: block;
			@media only screen and (max-width: ${Breakpoint.bp_medium}) {
				display: none;
			}
		}
	}
	svg {
		path {
			stroke: white;
		}
	}
	span {
		color: ${Colors.color_white_text_2};
		font-size: 1.3rem;
		font-weight: 600;
		padding-left: 0.5rem;
	}
	p,
	div {
		flex: 1;
		font-size: 2.5rem;
		text-align: right;
	}
`;
