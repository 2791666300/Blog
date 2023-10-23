import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";
export const ListNavigationContainer = styled.div`
	
	height: 100%;
	width: 100%;
	background-color: ${Colors.color_primary};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ListNavigationList = styled.ul`
	list-style: none;
`;
export const ListNavigationItem = styled.li`
	margin: 1rem;
`;
export const ListNavigationLink = styled.a`
	&:link,
	&:visited {
		display: inline-block;
		font-size: 3rem;
		font-weight: 500;
		padding: 1rem 2rem;

		@media only screen and (max-width: ${Breakpoint.bp_large}) {
			font-size: 2rem;
		}

		color: white;
		text-decoration: none;
		text-transform: uppercase;
		background-image: linear-gradient(
			120deg,
			transparent 0%,
			transparent 50%,
			white -50%
		);
		background-size: 230%;
		transition: all 0.3s;

		span {
			margin-right: 1.5rem;
			display: inline-block;
		}
	}

	&:hover,
	&:active {
		background-position: 100%;
		color: ${Colors.color_primary_2};
		transform: translateX(-1rem);
	}
`;
