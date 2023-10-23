import styled from "styled-components";


export const ToolIconsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	svg {
		height: ${({ height }) => `${height}`};
		width: ${({ width }) => `${width}`};
		path {
			fill: ${({ fillcolor }) => `${fillcolor}`};
		}
	}
`;
