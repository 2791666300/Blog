import styled from "styled-components";

export const ReviewsItemContainer = styled.li`
	display: flex;
	border-bottom: 1px solid grey;
	min-height: 5rem;
	margin: 1rem;
`;

export const ReviewsItemPhoto = styled.div`
	height: 100%;
	width: 10%;
	img {
		height: 4rem;
		width: 4rem;
		border-radius: 50%;
	}
`;

export const ReviewsItemContent = styled.div`
	height: 100%;
	width: 90%;
	position: relative;
	p {
		margin-top: 1rem;
		color: white;
	}
`;

export const ReviewBrief = styled.div`
	height: 2rem;
	strong {
		margin-right: 1rem;
		font-size: 1.4rem;
	}
	span {
		font-weight: 100;
		color: grey;
	}
	i {
		position: absolute;
		right: 2rem;
	}
`;

export const ReviewAction = styled.div`
	height: 5rem;
	display: flex;
	align-items: center;
`;

export const IconContainer = styled.div`
	cursor: pointer;
	display: flex;
	width: 8rem;
	align-items: center;
	span {
		color: #8a919f;
		font-size: 1.6rem;
		font-weight: 600;
		margin-left: 0.8rem;
	}
	strong {
		color: #18df16;
		font-size: 1.3rem;
		font-weight: 600;
		margin-left: 0.4rem;
	}
`;

export const ReviewCreator = styled.div``;

export const ReviewCreatorBtn = styled.div`
	text-align: right;
	margin: 1rem 0;
`;
