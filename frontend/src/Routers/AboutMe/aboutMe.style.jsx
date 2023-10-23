import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";
export const AboutMeContainer = styled.div`
	grid-row: 2 / -2;
	grid-column: 1 / -1;
	/* background: url("/img/bgimg-2.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: right;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		background-position: top;
	} */
	background-color: ${Colors.color_black_2};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ResumeContinaer = styled.div`
	width: 60%;
	height: 95%;
	background-color: ${Colors.color_black_1};
	border-radius: 0.5rem;
	box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);
	color: white;
	padding: 10rem;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		padding: 3rem;
		width: 75%;
	}
	h1 {
		text-align: center;
		margin-bottom: 2rem;
	}

	h3 {
		margin-top: 2rem;
		margin-bottom: 0.5rem;
	}

	h4 {
		font-size: 1.5rem;
		text-align: center;
	}

	a {
		color: blue;
	}

	ul {
		margin-left: 4rem;
	}
`;

export const ResumeItem = styled.div`
	margin: 2rem 0;

	h2 {
		border-bottom: 1px solid white;
		margin-bottom: 1rem;
	}
`;
