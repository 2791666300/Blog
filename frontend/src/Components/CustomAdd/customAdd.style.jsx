import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";
import Colors from "../../constants/Colors";

export const CustomAddContainer = styled.div`
	background-color: ${Colors.color_black_1};
	box-shadow: 0 0 1rem white;
	height: 70vh;
	width: 40vw;
	border-radius: 2rem;
	overflow: hidden;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		width: 60vw;
	}
`;

export const Form = styled.form`
	padding: 0 1rem;
	button {
		margin: 3rem;
	}
`;
