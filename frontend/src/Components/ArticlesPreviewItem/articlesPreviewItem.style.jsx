import styled from "styled-components";
import { ReactComponent as Eye } from "../../Assets/eye.svg";
import Breakpoint from "../../constants/Breakpoint";

export const ArticlesPreviewItemContainer = styled.div`
	border-top: 0.1px solid rgba(255, 255, 255, 0.4);
	border-bottom: 0.1px solid rgba(255, 255, 255, 0.4);
	padding: 1rem;
	cursor: pointer;
	&:hover {
		background-color: rgba(0, 0, 0, 0.25);
	}
`;

export const ItemMetaContainer = styled.div`
	width: 100%;
	height: 3rem;
	font-size: 1.4rem;
	letter-spacing: 0.05rem;
`;

export const ItemMetaList = styled.ul`
	list-style: none;
	display: flex;
	& > *:not(:first-child) {
		border-left: 1px solid rgba(255, 255, 255, 0.3);
	}
`;
export const MetaItem = styled.li`
	padding: 0.3rem 1rem;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		padding: 0.3rem 0.4rem;
	}
	span {
		margin: 0 1rem;
		@media only screen and (max-width: ${Breakpoint.bp_medium}) {
			margin: 0 0.5rem;
		}
		position: relative;
		&::after {
			position: absolute;
			right: -1rem;
			top: 1rem;
			display: block;
			content: " ";
			width: 0.3rem;
			height: 0.3rem;
			border-radius: 50%;
			background: white;
			@media only screen and (max-width: ${Breakpoint.bp_medium}) {
				right: -0.5rem;
			}
		}
	}
`;

export const ItemContentWrapper = styled.div`
	width: 100%;
	height: 9rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ContentWrapperList = styled.ul`
	width: 80%;
	height: 100%;
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

export const ContentWrapperItem = styled.li`
	p {
		max-width: 40rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: grey;
		font-size: 1.2rem;
		@media only screen and (max-width: ${Breakpoint.bp_small}) {
			max-width: 32rem;
		}
	}

	div {
		width: 33rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		span {
			width: 5rem;
			display: flex;
			align-items: center;
			color: grey;
			font-size: 1.4rem;
			font-weight: 900;
		}
	}
`;

export const EyeContainer = styled(Eye)`
	height: 2rem;
	path {
		fill: grey;
	}
`;

export const CoverImg = styled.div`
	height: 8rem;
	width: 12rem;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		height: 5rem;
		width: 8rem;
	}
	border-radius: 0.4rem;
	overflow: hidden;
	outline: 0.1rem solid white;
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: 50% 25%;
	}
`;
