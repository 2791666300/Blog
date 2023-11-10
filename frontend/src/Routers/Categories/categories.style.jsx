import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";

export const CategoriesContainer = styled.div`
	grid-row: 2 / -2;
	grid-column: 1 / -1;
	background: url("/img/bgimg-1.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		background-position: right;
	}
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		height: 3.5rem;

		color: ${Colors.color_green_1};
		font-weight: 900;
		font-size: 2.5rem;
		margin-bottom: 2rem;

		&:hover {
			border-bottom: 2px solid ${Colors.color_green_1};
		}
		cursor: pointer;
	}
`;

export const ClassificationContainer = styled.div`
	height: 50%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const Classification = styled.div`
	height: 55%;
	width: 40%;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		width: 90%;
	}
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
`;
export const ClassificationItem = styled.a`
	width: 20%;
	margin: 1rem;
	height: 3.4rem;
	outline: 2px solid white;
	background-color: black;

	border-radius: 0.5rem;
	font-size: 1.4rem;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		font-size: 1rem;
	}
	cursor: pointer;
	font-weight: 600;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	&:hover {
		outline: 2px solid ${Colors.color_green_1};
		color: ${Colors.color_green_1};
	}
`;

export const LabelContainer = styled.div`
	height: 55%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const LabelTabel = styled.div`
	height: 50%;
	width: 50%;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		width: 90%;
	}
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-content: center;
`;
export const LabelItem = styled.a`
	height: 2.8rem;
	width: 12%;
	margin: 1rem 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: black;
	font-weight: 800;
	font-size: 1.5rem;
	background-color: white;
	box-shadow: 0 0 1rem black;
	margin-right: 5px;
	position: relative;
	cursor: pointer;
	@media only screen and (max-width: ${Breakpoint.bp_small}) {
		font-size: 1rem;
	}

	&::after {
		position: absolute;
		left: -1.2rem;
		top: 0;
		width: 0;
		height: 0;
		content: "";
		border-top: 1.4rem solid transparent;
		border-bottom: 1.5rem solid transparent;
		border-right: 1.2rem solid white;
	}

	&:hover {
		background-color: ${Colors.color_primary_2};
		color: white;
		&::after {
			border-right: 1.2rem solid ${Colors.color_primary_2};
		}
	}
`;
