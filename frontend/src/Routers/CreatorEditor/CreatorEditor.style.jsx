import styled from "styled-components";

export const CreatorEditorContainer = styled.div`
	grid-row: 2 / -2;
	grid-column: 1 / -1;
`;

export const EditorContainer = styled.div`
	width: 100%;
	height: 100%;

	.for-container .for-editor .for-panel .for-preview {
		background-color: #f8f9fa;
		border-left: 1px solid #dddddd;
	}

	.for-editor-edit::-webkit-scrollbar,
	.for-editor-preview::-webkit-scrollbar {
		width: 6px;
		height: 4px;
		background-color: transparent;
	}

	.for-editor-edit::-webkit-scrollbar-track,
	.for-editor-preview::-webkit-scrollbar-track {
		/*滚动槽轨道样式*/
		background: rgba(0, 0, 0, 0.1);
	}
`;

export const CategoryLable = styled.div`
	display: flex;
	width: 60rem;
	padding: 1rem;
	margin-left: auto;
`;
