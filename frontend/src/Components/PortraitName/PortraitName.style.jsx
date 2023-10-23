import styled from "styled-components";

export const PortraitNameContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const NameTable = styled.div`
	cursor: pointer;
	font-size: 1.5rem;
	color: rgba(255, 255, 255, 0.9);
	transition: all 0.2s;
	&:hover {
		color: rgba(255, 255, 255, 0.6);
	}
`;
