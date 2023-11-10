import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";

export const ArticlesPreviewListContainer = styled.div`
	height: 100%;
	width: 70%;
	margin: 2.5rem 1rem;
	padding: 2rem;
	box-shadow: 0 1rem 2rem black;

	${({ lodaing }) =>
		lodaing
			? `
				display: flex;
				justify-content: center;
				align-items: center;
	
			`
			: ""}

	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		margin: 0;
		width: 100%;
	}
`;

export const GoToCreatorContainer = styled.div`
	height: 6rem;
	display: flex;
	justify-content: flex-end;
`;

export const ArticlesNav = styled.nav`
	padding: 1rem;
	padding-left: 0;
	font-size: 1.3rem;
	& > *:not(:first-child) {
		border-left: 1px solid rgba(255, 255, 255, 0.6);
	}
`;

export const NavItem = styled.span`
	padding: 0 1rem;
	cursor: pointer;
	&:hover {
		color: #18df16;
	}
`;
