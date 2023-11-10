import styled from "styled-components";
import { Link } from "react-router-dom";

export const Item = styled.li`
	display: inline-block;

	&:not(:last-child) {
		margin-right: 1.5rem;
	}
`;

export const ItemLink = styled(Link)`
	&:link,
	&:visited {
		color: #f7f7f7;
		background-color: #333;
		text-decoration: none;
		text-transform: uppercase;
		display: inline-block;
		transition: all 0.2s;
		
		&:hover,
		&:active {
			color: #c69963;
			box-shadow: 0 0 0.5rem black;
			padding: 0 0.3rem;
			transform: rotate(5deg) scale(1.3);
		}
	}
`;
