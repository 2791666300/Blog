import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #242526;
	border-radius: 9px;
	box-shadow: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
	transition: all 0.5s;
`;

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(4px);
	z-index: 1000;
	transition: all 0.5s;
`;

const Button = styled.button`
	background: none;
	border: none;
	padding: 0.4rem;
	border-radius: 5px;
	transform: translateX(0.8rem);
	transition: all 0.2s;
	position: absolute;
	top: 1.2rem;
	right: 1.9rem;

	&:hover {
		background-color: #1f2937;
	}

	& svg {
		width: 2.4rem;
		height: 2.4rem;
		/* Sometimes we need both */
		/* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
		color: #18df16;
	}
`;

const ModalContext = createContext();

function Modal({ children }) {
	const [openName, setOpenName] = useState("");

	const close = () => setOpenName("");
	const open = setOpenName;

	return (
		<ModalContext.Provider value={{ openName, open, close }}>
			{children}
		</ModalContext.Provider>
	);
}

function Open({ children, opens: opensWindowName }) {
	const { open } = useContext(ModalContext);
	// cloneElement 克隆一个组件并给组件一些参数
	return cloneElement(children, { onClick: () => open(opensWindowName) });
}

const Window = ({ children, name }) => {
	const { openName, close } = useContext(ModalContext);

	const ref = useOutsideClick(close);

	if (name !== openName) return null;
	// createPortal 会把第一个参数也就是组件直接挂载在第二个参数里面，也就是dom树
	// 这里也就是将overlay直接挂载在body下面
	return createPortal(
		<Overlay>
			<StyledModal ref={ref}>
				<Button onClick={close}>
					<HiXMark />
				</Button>
				<div>{cloneElement(children, { onCloseModal: close })}</div>
			</StyledModal>
		</Overlay>,
		document.body,
	);
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
