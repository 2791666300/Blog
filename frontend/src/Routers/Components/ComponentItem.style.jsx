import styled from "styled-components";

export const ItemTitle = styled.div`
	text-align: center;
	font-size: 3rem;
	height: 10%;
	color: white;
	font-weight: 800;
	letter-spacing: 0.3rem;
`;

export const ItemComponent = styled.div`
	height: 70%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

export const ItemDescription = styled.div`
	font-size: 1.4rem;
	position: relative;
	margin: 0 1rem;
	color: white;
	margin-top: 1rem;

	&::before {
		content: "";
		display: block;
		width: 14px;
		height: 14px;
		border-left: 2px solid white;
		border-top: 2px solid white;
		position: absolute;
		top: 0;
		left: -10px;
	}
	&::after {
		content: "";
		display: block;
		width: 14px;
		height: 14px;
		border-right: 2px solid white;
		border-bottom: 2px solid white;
		position: absolute;
		bottom: 0;
		right: -10px;
	}
`;
