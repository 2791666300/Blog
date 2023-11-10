import styled from "styled-components";

export const CartContainer = styled.div`
	background-color: white;
	height: ${({ size }) => `${size}px`};
	width: ${({ size }) => `${size}px`};
	text-align: center;

	color: #b28451;

	font-size: ${({ size }) => `${size / 15}rem`};
	perspective: 500px;

	position: relative;
	cursor: pointer;
	font-family: Arial;

	&::after {
		content: "";
		position: absolute;
		width: 100%;
		height: ${({ size }) => `${size / 25}px`};
		background: linear-gradient(
			to bottom,
			#b28451,
			#b28451 ${({ size }) => `${size / 50}px`},
			#fff ${({ size }) => `${size / 50}px`}
		);
		top: 50%;
		left: 0;
		margin-top: -1px;
		z-index: 99;
	}

	.cart {
		position: absolute;
		width: 100%;
		height: 50%;
		left: 0;
		top: 0;
		overflow: hidden;
	}
	.cart1 {
		line-height: ${({ size }) => `${size}px`};
	}

	.cart2 {
		top: 50%;
		line-height: 0;
		background-color: white;
		transform: rotateX(180deg);
		transform-origin: center top;
		backface-visibility: hidden;
		transition: 0.5s;
		z-index: 10;
	}

	.cart3 {
		background-color: white;
		line-height: ${({ size }) => `${size}px`};
		z-index: 10;
		transform-origin: center bottom;
		transition: 0.5s;
		backface-visibility: hidden;
	}

	.cart4 {
		top: 50%;

		line-height: 0;
	}
`;
