import styled from "styled-components";
import { Link } from "react-router-dom";

import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";

export const NavigationContainer = styled.div`
	grid-row: 1 / 2;
	grid-column: 1 / -1;
	background-color: ${Colors.color_black_1};
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 10vh;
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 10;

	.drop {
		margin-right: 1.5rem;
	}
`;

export const LogoContainer = styled(Link)`
	width: 6rem;
	height: 100%;
	margin-left: 5rem;
	display: flex;
	@media only screen and (max-width: ${Breakpoint.bp_phone}) {
		margin-left: 0;
	}

	img {
		width: 100%;
		height: 100%;
		transition: all 0.3s;
		&:hover {
			filter: drop-shadow(0 0 0 black) invert(100%);
		}
	}
`;

export const NavLinks = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-right: 1rem;
`;

export const NavLinks2 = styled(NavLinks)`
	position: fixed;
	display: ${({ click }) => `${click ? "block" : "none"}`};
	flex-direction: column;
	width: 35%;
	height: 90vh;
	top: 10vh;
	justify-content: flex-start;
	background-color: ${Colors.color_black_1};
	border: 2px solid white;

	& > *:hover {
		background: white;
	}
`;

export const NavLink = styled(Link)`
	transition: all 0.3s;
	padding: 1.5rem;
	color: white;
	font-size: 1.5rem;
	font-weight: 600;
	text-transform: uppercase;

	cursor: pointer;
	&:hover {
		color: ${Colors.color_green_1};
	}
	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		font-size: 1rem;
		padding: 0.5rem;
		display: flex;
		justify-content: flex-start;
	}
`;

export const NavLinkCurrent = styled(NavLink)`
	color: ${Colors.color_green_1};
`;

export const NavLinkIcon = styled.a`
	width: 4rem;
	height: 4rem;
	display: inline-block;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		width: 3rem;
		height: 3rem;
	}
	display: flex;
	justify-content: center;
	align-items: center;
	&::after {
		content: "";
		/* background: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E")
			no-repeat; */
		background: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E")
			no-repeat;

		display: flex;
		height: 3rem;
		width: 3rem;
		@media only screen and (max-width: ${Breakpoint.bp_medium}) {
			width: 2rem;
			height: 2rem;
		}
	}
`;

export const BrightnessPageButton = styled.button`
	width: 4rem;
	height: 4rem;
	cursor: pointer;
	border: none;

	border-radius: 50%;
	display: inline-block;
	text-align: center;
	vertical-align: middle;
	background-color: inherit;
	margin: 0 0.5rem;
	&:hover {
		background-color: #444950;
	}
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		width: 3rem;
		height: 3rem;
		margin: 0 1rem;
	}

	svg,
	span {
		width: 80%;
		height: 80%;
		path {
			fill: ${({ click }) => `${click ? "black" : "white"}`};
		}
	}
`;
