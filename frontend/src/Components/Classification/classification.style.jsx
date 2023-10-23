import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";

export const ClassificationContainer = styled.a`
	width: 8rem;
	margin: 1rem;
	height: 3.4rem;
	outline: 2px solid white;
	background-color: black;

	border-radius: 0.5rem;
	font-size: 1.4rem;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		font-size: 1rem;
	}
	cursor: pointer;
	font-weight: 600;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	&:hover {
		outline: 2px solid ${Colors.color_green_1};
		color: ${Colors.color_green_1};
	}
`;
