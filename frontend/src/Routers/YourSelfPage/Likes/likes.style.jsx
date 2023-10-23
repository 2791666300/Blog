import styled from "styled-components";
import Breakpoint from "../../../constants/Breakpoint";

export const LikesContainer = styled.div`
	width: 80%;

	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		width: 100%;
	}
`;
