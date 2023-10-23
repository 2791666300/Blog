import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";

export const SearchContainerBox = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 10vh;
`;

export const SearchTable = styled.div`
	height: 30rem;
	width: 55rem;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		width: 40rem;
	}
	background-color: ${Colors.color_black_2};
	box-shadow: 0rem 0rem 2rem black;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SearchFromInput = styled.input`
	height: 5rem;
	width: 90%;
	margin: 1rem;
	padding: 0rem;
	border-radius: 0.5rem;
	outline: 2px solid ${Colors.color_green_1};
	border: none;
	background-color: black;
	color: white;
	font-size: 2rem;
`;

export const SearchContent = styled.div`
	height: 20rem;
	width: 90%;
	color: white;
	overflow: auto;
`;
export const SearchContentItem = styled.div`
	height: 5rem;
	border-top: 0.1px solid rgba(255, 255, 255, 0.4);
	border-bottom: 0.1px solid rgba(255, 255, 255, 0.4);
	padding: 1rem;
	border-radius: 1rem;
	&:hover {
		background-color: ${Colors.color_green_1};
	}

	img {
		height: 3rem;
	}

	svg {
		path {
			fill: white;
		}
	}
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const SearchButtonContainer = styled.div`
	height: 5rem;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	box-shadow: 0rem 0rem 2rem black;
	border-radius: 0.5rem;
`;
