import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";

export const CreatorHomeContainer = styled.div`
	grid-row: 2 / -2;
	grid-column: 1 / -1;
	background-color: ${Colors.color_black_1};
	display: flex;
`;

export const CreatorSidebar = styled.div`
	width: 25rem;
	margin: 2rem;
	padding: 2rem;
	box-shadow: 0 1rem 2rem black;
	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		display: none;
	}

	outline: 5px solid RGBA(30, 128, 255, 1);
`;

export const CreatorContent = styled.div`
	flex: 1;
	margin: 2rem;
	padding: 2rem;
	box-shadow: 0 1rem 2rem black;
	outline: 5px solid RGBA(30, 128, 255, 1);
`;

export const ToEditor = styled.a`
	margin: 4rem 0;
	text-align: center;
	background-color: RGB(30, 128, 255);
	font-size: 1.5rem;
	font-weight: 500;
	letter-spacing: 0.2rem;
	color: white;
	padding: 0.8rem 0;
	display: block;

	box-shadow: 0 0 0.5rem RGB(30, 128, 255);

	&:hover {
		background-color: RGBA(30, 128, 255, 0.85);
	}
`;

export const DataAnalysis = styled.div`
	outline: 3px solid RGBA(30, 128, 255, 1);
	padding: 1rem;
	margin: 2rem 0;

	h1 {
		color: white;
		padding: 1rem 0;
		text-align: center;
	}
`;
export const AnalysisList = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
`;
export const AnalysisItem = styled.li`
	background-color: RGBA(30, 128, 255, 1);
	box-shadow: 0 0 1rem RGBA(30, 128, 255, 1);
	width: 28%;
	height: 12rem;
	padding: 1rem;
	margin: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	strong {
		color: white;
		font-weight: 500;
		font-size: 1.5rem;
	}
	span {
		color: white;
		font-weight: 900;
		font-size: 4rem;
	}
`;
export const DataChart = styled.div`
	outline: 3px solid RGBA(30, 128, 255, 1);
	padding: 1rem;
	margin: 2rem 0;

	h1 {
		color: white;
		padding: 1rem 0;
		text-align: center;
	}
`;

export const ChartContent = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;

	img {
		width: 45%;
		object-fit: cover;
		margin: 1rem 0;
		box-shadow: 0 0 1rem RGBA(30, 128, 255, 1);
	}
`;
