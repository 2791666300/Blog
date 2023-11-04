import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";

export const LabelContainer = styled.a`
	height: 2.2rem;
	width: 5rem;
	@media only screen and (max-width: ${Breakpoint.bp_phone}) {
		height: 1.8rem;
		width: 3rem;
		font-size: 1rem;
	}
	margin: 1rem 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: black;
	font-weight: 800;
	font-size: 1.2rem;
	background-color: white;
	box-shadow: 0 0 1rem black;
	margin-right: 5px;
	position: relative;
	cursor: pointer;
	&::after {
		position: absolute;
		left: -1.14rem;
		top: 0;
		width: 0;
		height: 0;
		content: "";
		border-top: 1.1rem solid transparent;
		border-bottom: 1.1rem solid transparent;
		border-right: 1.2rem solid white;
		@media only screen and (max-width: ${Breakpoint.bp_phone}) {
			border-top: 0.8rem solid transparent;
			border-bottom: 1.1rem solid transparent;
			border-right: 1.2rem solid white;
		}
	}
	&:hover {
		background-color: ${Colors.color_primary_2};
		color: white;
		&::after {
			border-right: 1.2rem solid ${Colors.color_primary_2};
		}
	}
`;
