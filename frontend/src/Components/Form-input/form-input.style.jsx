import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";
import Colors from "../../constants/Colors";

export const FromGroup = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	border-top: 1px solid rgba(255, 255, 255, 0.5);
	border-bottom: 1px solid rgba(255, 255, 255, 0.5);
	padding: 1rem 0;
	@media only screen and (max-width: ${Breakpoint.bp_small}) {
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 0.5rem 0;
	}
`;

export const Input = styled.input`
	background-color: rgba(255, 255, 255, 0.85);
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 70%;
	border-radius: 0.5rem;
	&:focus {
		outline: 2px solid ${Colors.color_green_1};
	}
	@media only screen and (max-width: ${Breakpoint.bp_small}) {
		width: 100%;
		padding: 8px 10px;
	}
`;
export const Label = styled.label`
	width: 15%;
	color: white;
	font-size: 1.4rem;
	font-weight: 800;
	display: block;
	margin-bottom: 0.3rem;
	transition: all 0.2s;
	@media only screen and (max-width: ${Breakpoint.bp_small}) {
		width: 100%;
	}
`;
