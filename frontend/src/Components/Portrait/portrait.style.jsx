import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";
export const PortraitContainer = styled.figure`
	width: 14rem;
	height: 14rem;
	position: relative;
	cursor: pointer;
	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		width: 10rem;
		height: 10rem;
	}
	// @supports代表如果浏览器支持这两种方法则执行里面的代码，否则忽略它
	@supports (clip-path: circle(50% at 50% 50%)) or
		(-webkit-clip-path: circle(50% at 50% 50%)) {
		/* -webkit-shape-outside: circle(50% at 50% 50%);
		shape-outside: circle(50% at 50% 50%); */

		-webkit-clip-path: circle(50% at 50% 50%);
		clip-path: circle(50% at 50% 50%);
	}
	img {
		height: 100%;
		transform: scale(1.4);
		backface-visibility: hidden;
		transition: all 0.5s;
	}

	&:hover figcaption {
		transform: translate(-50%, -50%);
		opacity: 1;
	}

	&:hover img {
		transform: scale(1.05);

		// blur 模糊度   brightness 亮度
		filter: blur(2px) brightness(80%);
	}
`;

export const PortraitCaption = styled.figcaption`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, 50%);
	color: #fff;
	text-transform: uppercase;
	font-size: 1.4rem;
	font-weight: 500;
	text-align: center;
	opacity: 0;
	transition: all 0.6s;
	// 隐藏背面能见度
	backface-visibility: hidden;
`;
