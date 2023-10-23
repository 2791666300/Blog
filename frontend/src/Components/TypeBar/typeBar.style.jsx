import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";

export const Box = styled.div`
	width: ${({ width }) => `${width}`};
`;
export const TypeBarContainer = styled.div`
	grid-row: 2/ -1;
	grid-column: typebar-start / typebar-end;
	border-right: 1px solid #aaa;
	background-color: ${Colors.color_black_2};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const TypeBox = styled.div`
	font-size: 1.5rem;
	width: 12rem;
	height: 80vh;
	position: fixed;
	display: ${({ typeBoxState }) => `${typeBoxState}`};
	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		display: none;
	}
`;

export const BoxTable = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	color: #8a919f;
`;

export const BoxTableItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 8vh;
	height: 8vh;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.8);
`;

export const CollapseSidebarButton = styled.button`
	background-color: ${Colors.color_black_3};
	border: 1px solid ${Colors.color_white_text_1};
	height: ${({ height }) => `${height}`};
	width: ${({ width }) => `${width}`};
	transform: rotate(${({ transform }) => `${transform}`});
	position: fixed;
	bottom: 0;
	&:hover {
		filter: invert(5%);
	}
	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		display: none;
	}
`;
