import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";

export const SidebarContainer = styled.div`
	background-color: ${Colors.color_primary};
	grid-column: sidebar-start / sidebar-end;
	grid-row: 1 / -1;

	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		grid-column: 1 / -1;
		grid-row: 1 / 2;
		justify-content: flex-end;
		align-items: center;
	}
	display: flex;
	justify-content: center;
`;
export const SidebarBtnContainer = styled.div`
	z-index: 1000;
	height: 4rem;
	width: 4.5rem;
	margin-top: 2rem;
	display: flex;
	align-items: center;
	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		transform: translate(-1rem, -1rem);
	}
	&:hover > * {
		background-color: rgba(255,255,255, .6);
	}
	&:hover > *::before {
		background-color: rgba(255,255,255, .6);
	}
	&:hover > *::after {
		background-color: rgba(255,255,255, .6);
	}
`;
export const SidebarBtn = styled.button`
	border: none;
	border-radius: 0;
	background-color: #fff;
	height: 2px;
	width: 4.5rem;
	&::before,
	&::after {
		content: "";
		background-color: #fff;
		height: 2px;
		width: 4.5rem;
		display: block;
	}

	&::before {
		transform: translateY(-1.3rem);
	}

	&::after {
		transform: translateY(1.3rem);
	}

	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		margin-top: 0;

		&::before {
			transform: translateY(-1.2rem);
		}

		&::after {
			transform: translateY(1rem);
		}
	}
`;

export const ListNaviContainer = styled.div`
	height: 100vh;
	width: 100vw;
	position: absolute;
	z-index: 100;
`;
