import styled from "styled-components";

export const Item = styled.li`
	display: inline-block;

	&:not(:last-child) {
		margin-right: 1.5rem;
	}
`;

export const ItemLink = styled.a`
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
			box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
			transform: rotate(5deg) scale(1.3);
		}
	}
`;
