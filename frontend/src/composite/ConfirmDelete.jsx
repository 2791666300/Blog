import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
	width: 40rem;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	padding: 3rem;

	& p {
		color: var(--color-grey-500);
		margin-bottom: 1.2rem;
		span {
			border-bottom: 1.5px solid var(--color-red-700);
		}
	}

	& div {
		display: flex;
		justify-content: flex-end;
		gap: 1.2rem;
	}
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
	return (
		<StyledConfirmDelete>
			<Heading as='h3'>删除 {resourceName}</Heading>
			<p>
				是否确实要永久删除 <span>{resourceName}</span>？这操作无法撤消。
			</p>

			<div>
				<Button
					variation='secondary'
					disabled={disabled}
					onClick={onCloseModal}>
					Cancel
				</Button>
				<Button variation='danger' disabled={disabled} onClick={onConfirm}>
					Delete
				</Button>
			</div>
		</StyledConfirmDelete>
	);
}

export default ConfirmDelete;
