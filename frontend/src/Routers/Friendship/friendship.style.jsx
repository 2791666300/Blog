import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";

export const FriendShipContainer = styled.div`
	grid-row: 2 / -2;
	grid-column: 1 / -1;
	background: url("/img/bgimg-1.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		background-position: right;
	}
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const FriendShipContent = styled.div`
	height: 100%;
	width: 60rem;

	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		width: 50rem;
		margin-top: 15rem;
	}
	@media only screen and (max-width: ${Breakpoint.bp_phone}) {
		width: 30rem;
	}
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

export const CustomAddButton = styled.div`
	position: fixed;
	right: 2rem;
	top: 12vh;
	background-color: rgba(255, 255, 255, 0.25);
`;
