import styled from "styled-components";
import Breakpoint from "../../../constants/Breakpoint";

export const AccountContent = styled.div`
	margin-top: 2rem;

	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-end;

	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		flex-direction: column;
	}
`;

export const Form = styled.form`
	flex: 0 0 60%;
	button {
		margin-top: 3rem;
	}
`;
