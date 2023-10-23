import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";

export const ItemContainer = styled.div``;

export const ItemIntroduce = styled.div`
	p {
		font-size: 1.6rem;
		padding: 2rem 0;
	}
	h2 {
		font-size: 3.5rem;
		margin-bottom: 1rem;
		margin-top: 3rem;
	}
`;

export const ItemTables = styled.div`
	h3 {
		font-size: 2.5rem;
		margin-bottom: 0rem;
		margin-top: 2rem;
	}

	p {
		font-size: 1.6rem;
		padding: 2rem 0;
	}
	span {
		background-color: ${Colors.color_black_1};
		border-radius: 1rem;
		padding: 2rem 2rem;
		display: block;
		font-size: 1.6rem;
		margin-top: 1rem;
		width: 80%;
		@media only screen and (max-width: ${Breakpoint.bp_small}) {
			width: 100%;
		}
		img {
			width: 100%;
			height: 100%;
		}
	}
`;

export const ItemTable = styled.div``;
