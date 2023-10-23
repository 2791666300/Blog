import styled from "styled-components";

export const TextAreaContainer = styled.textarea`
	background-color: RGB(242, 243, 245);
	border-radius: 0.4rem;
	height: 8rem;
	width: 100%;
	padding: 1rem;
	border: none;
	outline: none;
	font-weight: 900;

	&::-webkit-input-placeholder {
		color: RGB(138, 145, 159);
		font-weight: 900;
		font-size: 1.4rem;
	}

	&:focus {
		outline: 2px solid blue;
		background-color: white;
	}
`;
