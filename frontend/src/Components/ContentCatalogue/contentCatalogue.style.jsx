import styled from "styled-components";

import Colors from "../../constants/Colors";

export const ContentCatalogueContainer = styled.div`
	border-bottom: 1px solid #6b6b6b;
	ul {
		margin: 3rem 0 5rem 2rem;
		li {
			transition: all 0.3s;
			margin: 1rem;
			width: 15rem;
			a {
				background: ${Colors.color_black_3};

				font-size: 2rem;
				color: #e3e3e3;
				box-shadow: 0.5rem 0.5rem 2rem black;
			}
			&:hover {
				transform: translateY(-2px);
			}
		}
	}
`;