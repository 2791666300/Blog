import styled from "styled-components";
import Breakpoint from "../../../constants/Breakpoint";
import Colors from "../../../constants/Colors";
export const ProfileContent = styled.div`
	margin-top: 2rem;

	display: flex;
	flex-direction: row-reverse;

	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		flex-direction: column;
	}
`;
export const PortraitChange = styled.div`
	flex: 0 0 40%;
	display: flex;
	justify-content: center;
	padding: 1rem;
	div {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		input {
			margin-top: 0.5rem;
		}
	}
`;
export const Form = styled.form`
	flex: 0 0 60%;
	button {
		margin-top: 3rem;
	}
`;

export const FormUploadPhoto = styled.input`
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;

	&:focus + label {
		outline: 3px solid ${Colors.color_green_1};
		outline-offset: 3px;
	}

	& + label {
		color: ${Colors.color_green_1};
		display: inline-block;
		text-decoration: none;
		border-bottom: 1px solid ${Colors.color_green_1};
		padding: 3px;
		font-weight: 900;
		letter-spacing: 0.04rem;
		-webkit-transition: all 0.2s;
		transition: all 0.2s;
		cursor: pointer;
		margin: 1rem;
	}
	& + label:hover {
		background-color: ${Colors.color_green_1};
		color: #fff;
		-webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
		-webkit-transform: translateY(-2px);
		transform: translateY(-2px);
	}
`;

export const UploadPhostButton = styled.input`
	border: none;
	color: ${Colors.color_green_1};
	display: block;
	text-decoration: none;
	border-bottom: 1px solid ${Colors.color_green_1};
	padding: 0.3rem 1rem;
	font-weight: 900;
	letter-spacing: 0.1rem;
	-webkit-transition: all 0.2s;
	transition: all 0.2s;
	cursor: pointer;
	margin: 1rem;
	background-color: transparent;

	&:focus {
		outline: 3px solid ${Colors.color_green_1};
		outline-offset: 3px;
	}

	&:hover {
		background-color: ${Colors.color_green_1};
		color: #fff;
		-webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
		-webkit-transform: translateY(-2px);
		transform: translateY(-2px);
	}
`;
