import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";

export const BaseButton = styled.div`
	.btn-text {
		&:link,
		&:visited {
			color: ${Colors.color_primary_2};
			display: inline-block;
			text-decoration: none;
			font-size: 1.8rem;
			border-bottom: 1px solid ${Colors.color_primary_2};
			padding: 0.3rem;
			margin: 0.5rem 0;
			transition: all 0.1s;
			@media only screen and (max-width: ${Breakpoint.bp_large}) {
				font-size: 1.4rem;
				margin: 0.2rem 0;
				padding: 0.2rem;
			}
		}

		&:hover {
			background-color: ${Colors.color_primary_2};
			color: #fff;
			box-shadow: 0 1rem 2rem rgba(#000, 0.15);
			transform: translateY(-2px);
		}

		&:active {
			box-shadow: 0 0.5rem 1rem rgba(#000, 0.15);
			transform: translateY(0px);
		}
	}
`;

export const OneButton = styled(BaseButton)`
	.btn-text {
		&:link,
		&:visited {
			color: ${Colors.color_secondary};
			border-bottom: 1px solid ${Colors.color_secondary};
		}
		&:hover {
			color: white;
			background-color: ${Colors.color_secondary};
		}
	}
`;

export const TwoButton = styled(BaseButton)`
	.btn-text {
		-webkit-transition: all 0.2s;
		transition: all 0.2s;
		&:link,
		&:visited {
			color: ${Colors.color_green_1};
			border-bottom: 1px solid ${Colors.color_green_1};
		}
		&:hover {
			color: white;
			background-color: ${Colors.color_green_1};
		}
	}
`;
