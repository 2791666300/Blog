import styled from "styled-components";

export const CardBackContainer = styled.div`
	backface-visibility: hidden;
	background-color: #c2a813;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAYCAQAAADHE7InAAAAeElEQVR42q3PMRXAAAhDwbiKf0c4SAW0Q4eDlfffkX1vd3vPrT/vbzVlzPNEzPNEzPNEzPNEzPNEzPNEzbudJWpeV0vEPF/jQU3EPE+M5XliLM8TY3meGMvzxFieJ8byPDGW54mxPE8M5nW1xGDe4dqig/rhaJ4mPuBo/qcX9qNXAAAAAElFTkSuQmCC);
	background-size: 20px;
	border: 5px solid #c2a813;
	transform: rotateY(180deg) translateZ(1px);
	align-items: center;
	backface-visibility: hidden;
	border-radius: 10px;
	display: flex;
	height: 100%;
	justify-content: center;
	outline: transparent solid 1px;
	pointer-events: none;
	position: absolute;
	width: 100%;

	g.run-text {
		animation-duration: 5s;
		animation-name: a;
	}
	circle.run-circle,
	g.run-text {
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		transform-origin: 50% 50%;
	}

	circle.run-circle:nth-child(2) {
		animation-delay: -2.2s;
	}
	circle.run-circle {
		animation-duration: 3s;
		animation-name: b;
	}
	circle.run-circle,
	g.run-text {
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		transform-origin: 50% 50%;
	}

	@keyframes a {
		0% {
			transform: rotate(0);
		}

		100% {
			transform: rotate(1turn);
		}
	}

	@keyframes b {
		0%,
		100% {
			transform: scale(0.8);
		}
		50% {
			transform: scale(1);
		}
		90% {
			transform: scale(0.9);
		}
	}
`;
