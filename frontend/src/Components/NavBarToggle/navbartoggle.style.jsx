import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";

export const NavBarToggleContainer = styled.div`
	display: none;
	svg {
		path {
			stroke: ${({ color }) => `${color}`};
		}
	}

	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		display: block;
		width: 100%;
		height: 100%;
	}
`;
