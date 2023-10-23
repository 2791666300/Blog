import styled from "styled-components";
import Breakpoint from "../../../constants/Breakpoint";
import Colors from "../../../constants/Colors";

export const ContentCon = styled.div`
	flex: 0 0 80%;
	padding: 2rem;
	background-color: ${Colors.color_black_1};
	box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		flex: 0 0 90%;
	}
	h2 {
		margin: 2rem;
	}
`;
