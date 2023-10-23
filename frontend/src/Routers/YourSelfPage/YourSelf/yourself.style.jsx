import styled from "styled-components";
import Breakpoint from "../../../constants/Breakpoint";
import Colors from "../../../constants/Colors";
import { Link } from "react-router-dom";

export const YourSelfContiner = styled.div`
	grid-row: 2 / -2;
	grid-column: 1 / -1;
	color: white;
	background-color: ${Colors.color_black_1};
	font-size: 1.5rem;
	padding: 2rem 4rem;
	display: flex;
	justify-content: space-around;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		flex-direction: column;
	}
`;

export const SidebarContainer = styled.nav`
	background-color: ${Colors.color_black_1};
	flex: 0 0 20%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		flex: 0 0 10%;
	}
	box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
`;

export const SidebarList = styled.ul`
	font-size: 1.4rem;
	list-style: none;
	margin-top: 3.5rem;

	// 当视口宽度小于900px 时导航栏重排
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		display: flex;
		margin: 0;
	}
`;

export const SidebarItem = styled.li`
	position: relative;
	&:not(:last-child) {
		margin-bottom: 0.5rem;

		@media only screen and (max-width: ${Breakpoint.bp_medium}) {
			margin-bottom: 0;
		}
	}

	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		flex: 1;
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 3%;
		background-color: rgba(0, 0, 0, 0.15);

		// origin也就是发生改变的地方 scaleY 方向y轴
		transform-origin: left;
		transform: scaleY(0);

		// 可以同时绑定多个动画
		transition: transform 0.2s, width 0.3s cubic-bezier(1, 0, 0, 1) 0.2s,
			background-color 0.1s;
	}

	// item hover时before 元素
	&:hover::before,
	&--active::before {
		transform: scaleY(100%);
		width: 100%;
	}

	&:active::before {
		background-color: rgba(0, 0, 0, 0.3);
	}
`;

export const SidebarItemCurrent = styled(SidebarItem)`
	background-color: rgba(0, 0, 0, 0.15);
	transform: scaleY(100%);
	width: 100%;
`;

export const SidebarLink = styled(Link)`
	&,
	&:link,
	&:visited {
		font-size: 1.6rem;
		color: rgba(255, 255, 255, 0.6);
		text-decoration: none;
		text-transform: uppercase;
		display: block;
		padding: 1.5rem 3rem;
		// z-index 必须在有position: relative;的情况下才能生效
		position: relative;
		z-index: 10;
		@media only screen and (max-width: ${Breakpoint.bp_medium}) {
			padding: 1.5rem 2rem;
			font-size: 1rem;
		}
	}
`;
