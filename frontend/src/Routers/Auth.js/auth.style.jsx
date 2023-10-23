import styled from "styled-components";

export const AuthContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: #eee;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: sans-serif;

	form {
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 0 4rem;
		height: 100%;
		text-align: center;
	}

	input {
	}

	.container {
		background-color: #fff;
		border-radius: 10px;
		box-shadow: -20px 20px 20px rgba(0, 0, 0, 0.25),
			0 30px 10px rgba(0, 0, 0, 0.22);
		position: relative;
		overflow: hidden;
		width: 768px;
		max-width: 100%;
		min-height: 480px;
	}

	.form-container {
		position: absolute;
		top: 0;
		height: 100%;
		transition: all 0.6s ease-in-out;
	}

	.sign-in-container {
		left: 0;
		width: 50%;
		z-index: 2;
	}

	.sign-up-container {
		left: 0;
		width: 50%;
		opacity: 0;
		z-index: 1;
	}

	@keyframes show {
		0%,
		49.99% {
			opacity: 0;
			z-index: 1;
		}

		50%,
		100% {
			opacity: 1;
			z-index: 5;
		}
	}

	.overlay-container {
		position: absolute;
		top: 0;
		left: 50%;

		width: 50%;
		height: 100%;
		overflow: hidden;
		transition: transform 0.6s ease-in-out;
		z-index: 50;
	}

	.overlay {
		background: #ff416c;
		background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
		background: linear-gradient(to right, #ff4b2b, #ff416c);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 0 0;
		color: #ffffff;
		position: relative;
		left: -100%;
		height: 100%;
		width: 200%;
		transform: translateX(0);
		transition: transform 0.6s ease-in-out;
	}

	.overlay-panel {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 0 40px;
		text-align: center;
		top: 0;
		height: 100%;
		width: 50%;
		transform: translateX(0);
		transition: transform 0.6s ease-in-out;
	}

	.right-panel-active .overlay {
		transform: translateX(50%);
	}
	.overlay-left {
		transform: translateX(-20%);
	}
	.overlay-right {
		right: 0;
		transform: translateX(0);
	}

	.right-panel-active .overlay-left {
		transform: translateX(0);
	}
	.right-panel-active .overlay-right {
		transform: translateX(20%);
	}
	.right-panel-active .sign-in-container {
		transform: translateX(100%);
	}

	.right-panel-active .sign-up-container {
		transform: translateX(100%);
		opacity: 1;
		z-index: 5;
		animation: show 0.7s;
	}

	.right-panel-active .overlay-container {
		transform: translateX(-100%);
	}

	.social-container {
		margin: 20px 0;
	}

	.social-container a {
		border: 1px solid #dddddd;
		border-radius: 50%;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		margin: 0 5px;
		height: 40px;
		width: 40px;
	}
`;
