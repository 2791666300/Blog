import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";

export const RealTimeContainer = styled.div`
	font-size: 12rem;
	font-weight: 800;
	color: white;
	@media only screen and (max-width: ${Breakpoint.bp_small}) {
		font-size: 5rem;
	}
`;
