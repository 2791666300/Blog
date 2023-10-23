import styled from "styled-components";

export const SummaryContainer = styled.div`
	height: 6rem;
	width: 18rem;
	margin-top: 1rem;
	margin-bottom: 5rem;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: space-around;
	& > *:not(:first-child) {
		border-left: 1px solid white;
	}
	& > a {
		color: rgb(153, 153, 153);
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		&:hover {
			color: white;
		}
	}
`;
