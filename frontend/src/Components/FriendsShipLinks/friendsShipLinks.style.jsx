import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";
export const FriendShipLinksContainer = styled.div`
	height: 24rem;
	width: 55rem;
	color: white;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const FriendShipLinksItemContainer = styled.span`
	width: 20%;
	height: 50%;
	padding: 3rem;
	position: relative;
	@media only screen and (max-width: ${Breakpoint.bp_phone}) {
		padding: 2rem 0.5rem;
		height: 40%;
	}
`;

export const FriendShipLinksItem = styled.a`
	width: 100%;
	height: 100%;
	color: white;
	font-size: 1.25rem;
	font-weight: 700;
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		width: 100%;
		height: 100%;
		margin-bottom: 0.5rem;
		border-radius: 1.5rem;
		transition: all 0.1s;
		&:hover {
			transform: scale(1.03) translateY(-0.1rem);
		}
	}
`;

export const DeleteButton = styled.div`
	position: absolute;
	cursor: pointer;
	top: 2.5rem;
	right: 2rem;
	background-color: rgba(255, 255, 255, 0.6);
	color: var(--color-red-700);
	font-weight: 700;
	font-size: 1.8rem;
	border-radius: 50%;
	height: 2rem;
	width: 2rem;
	text-align: center;
	line-height: 1.5rem;
	transition: 0.3s;
	@media only screen and (max-width: ${Breakpoint.bp_phone}) {
		top: 2rem;
		right: 0.5rem;
		height: 1rem;
		width: 1rem;
	}
	&:hover {
		transform: scale(1.03) translateY(-0.1rem);
	}
`;
