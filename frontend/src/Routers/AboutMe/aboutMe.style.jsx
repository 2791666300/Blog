import styled from "styled-components";
import Colors from "../../constants/Colors";

export const AboutMeContainer = styled.div`
	grid-row: 2 / -2;
	grid-column: 1 / -1;

	background-color: ${Colors.color_black_2};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ResumeContinaer = styled.div`
	height: 100vh;
	width: 90vw;
	margin: 2rem;
`;
