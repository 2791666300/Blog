import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";

export const RealDateContainer = styled.div`
	font-size: 2rem;
	font-weight: 500;
	color: white;
	margin-bottom: 2rem;
	@media only screen and (max-width: ${Breakpoint.bp_small}) {
		font-size: 1.5rem;
	}
`;
