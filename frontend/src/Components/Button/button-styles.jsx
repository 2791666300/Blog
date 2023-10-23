import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";
export const BaseButton = styled.button`
	width: auto;
	height: 5rem;
	width: 20rem;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 1.5rem;
	background-color: #7dd56f;
	color: #fff;
	text-transform: uppercase;
	font-family: "Open Sans Condensed";
	font-weight: bolder;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		height: 3rem;
		width: 12rem;
		line-height: 3rem;
		font-size: 1rem;
	}

	&:hover {
		background-color: white;
		color: #7dd56f;
		border: 1px solid black;
	}
`;

// styled(BaseButton) 代表继承BaseButton的所有样式
export const GoogleSignInButton = styled(BaseButton)`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;

export const InvertedButton = styled(BaseButton)`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;

export const ActionBaseButton = styled.button`
	width: 100px;
	border: none;
	color: ${Colors.color_green_1};
	font-size: 1.5rem;
	border-bottom: 1px solid currentColor;
	padding: 2px;
	display: inline-block;
	background-color: transparent;
	cursor: pointer;
	transition: all 0.2s;

	& span {
		margin-left: 5px;
		transition: margin-left 0.2s;
	}

	&:hover {
		color: ${Colors.color_primary_2};
		span {
			margin-left: 8px;
		}
	}
	&:focus {
		outline: none;
		background-color: white;
		// 动画 infinite 表示动画可以无限发生
		animation: pulsate 1s infinite;
	}
	@keyframes pulsate {
		0% {
			transform: scale(1);
			box-shadow: none;
		}

		50% {
			transform: scale(1.05);
			box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.25);
		}

		100% {
			transform: scale(1);
			box-shadow: none;
		}
	}
`;

const BaseAction = styled.button`
	width: 130px;
	height: 40px;
	color: #fff;
	border-radius: 5px;
	padding: 10px 25px;
	font-family: "Lato", sans-serif;
	font-weight: 500;
	font-size: 1.5rem;
	background: transparent;
	cursor: pointer;
	transition: all 0.3s ease;
	position: relative;
	display: inline-block;
	box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
		7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
	outline: none;
`;

export const ActionOneButton = styled(BaseAction)`
	width: 130px;
	height: 40px;
	line-height: 42px;
	padding: 0;
	border: none;
	background: ${Colors.color_green_2};

	&:hover {
		color: ${Colors.color_green_1};
		background: transparent;
		box-shadow: none;
	}
	&:before,
	&:after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		height: 2px;
		width: 0;
		background: ${Colors.color_green_2};
		box-shadow: -1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003,
			4px 4px 5px 0px #0002;
		transition: 400ms ease all;
	}
	&:after {
		right: inherit;
		top: inherit;
		left: 0;
		bottom: 0;
	}
	&:hover:before,
	&:hover:after {
		width: 100%;
		transition: 800ms ease all;
	}
`;

export const ActionOneButtonBlue = styled(ActionOneButton)`
	background: ${Colors.color_blue_1};
	&:hover {
		color: ${Colors.color_blue_1};
	}
	&:before,
	&:after {
		background: ${Colors.color_blue_1};
	}
`;
export const ActionOneButtonGreen = styled(ActionOneButton)`
	background: ${Colors.color_green_1};
	&:hover {
		color: ${Colors.color_green_1};
	}
	&:before,
	&:after {
		background: ${Colors.color_green_1};
	}
`;
export const ActionTwoButton = styled(BaseAction)`
	background: rgb(247, 150, 192);
	background: radial-gradient(
		circle,
		rgba(247, 150, 192, 1) 0%,
		rgba(118, 174, 241, 1) 100%
	);
	line-height: 42px;
	padding: 0;
	border: none;

	& span {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
	}
	&:before,
	&:after {
		position: absolute;
		content: "";
		height: 0%;
		width: 1px;
		box-shadow: -1px -1px 20px 0px rgba(255, 255, 255, 1),
			-4px -4px 5px 0px rgba(255, 255, 255, 1),
			7px 7px 20px 0px rgba(0, 0, 0, 0.4), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
	}
	&:before {
		right: 0;
		top: 0;
		transition: all 500ms ease;
	}
	&:after {
		left: 0;
		bottom: 0;
		transition: all 500ms ease;
	}
	&:hover {
		background: transparent;
		color: #76aef1;
		box-shadow: none;
	}
	&:hover:before {
		transition: all 500ms ease;
		height: 100%;
	}
	&:hover:after {
		transition: all 500ms ease;
		height: 100%;
	}
	& span:before,
	& span:after {
		position: absolute;
		content: "";
		box-shadow: -1px -1px 20px 0px rgba(255, 255, 255, 1),
			-4px -4px 5px 0px rgba(255, 255, 255, 1),
			7px 7px 20px 0px rgba(0, 0, 0, 0.4), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
	}
	& span:before {
		left: 0;
		top: 0;
		width: 0%;
		height: 0.5px;
		transition: all 500ms ease;
	}
	& span:after {
		right: 0;
		bottom: 0;
		width: 0%;
		height: 0.5px;
		transition: all 500ms ease;
	}
	& span:hover:before {
		width: 100%;
	}
	& span:hover:after {
		width: 100%;
	}
`;

export const AuthButton_1 = styled.button`
	border-radius: 20px;
	border: 1px solid #ff4b2b;
	background-color: #ff4b2b;
	color: #ffffff;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 30px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
	&:active {
		transform: scale(0.95);
	}

	&:focus {
		outline: none;
	}
`;

export const AuthButton_2 = styled(AuthButton_1)`
	background-color: transparent;
	border-color: #ffffff;
`;
