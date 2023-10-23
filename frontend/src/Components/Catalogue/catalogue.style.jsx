import styled from "styled-components";
import Colors from "../../constants/Colors";

export const CatalogueContainer = styled.div`
	grid-row: 2/ -2;
	grid-column: catalogue-start / catelogue-end;
	background-color: ${Colors.color_black_2};
	.active {
		color: ${Colors.color_green_1};
	}
`;

export const CatalogueList = styled.div`
	color: white;
	height: 90vh;
	width: 100%;
	font-size: 1rem;
	position: fixed;
	margin: 2rem 0;
	& > div {
		border-left: 1px solid #aaa;
	}
`;

export const CatelogueItem = styled.div`
	padding: 0.2rem 1rem;
	text-align: left;
`;

export const PrimaryCatalogue = styled.a`
	color: #fff;

	cursor: pointer;

	&:hover {
		color: ${Colors.color_green_1};
	}
`;
export const PrimaryCatalogueCurrent = styled(PrimaryCatalogue)`
	color: ${Colors.color_green_1};
`;

export const SecondaryCatalogue = styled.ul`
	list-style: none;
	padding: 0 1.5rem;
	li {
		padding: 0.5rem;
		cursor: pointer;
		text-align: left;
		a {
			color: white;
			padding: 0.5rem;
			&:hover {
				color: ${Colors.color_green_1};
			}
		}
	}
`;

export const SecondaryCatalogueCurrent = styled(SecondaryCatalogue)`
	color: ${Colors.color_green_1};
`;
