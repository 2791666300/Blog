import { BaseButton, OneButton, TwoButton } from "./buttonText.style";
import { Link } from "react-router-dom";
export const TEXT_BUTTON_TYPE_CLASSES = {
	base: "base",
	base_1: "base_1",
	base_2: "base_2",
};

// 通过buttonType 选择按钮类型并返回 buttonType 默认为BUTTON_TYPE_CLASSES.base
const getButton = (buttonType = TEXT_BUTTON_TYPE_CLASSES.base) =>
	({
		[TEXT_BUTTON_TYPE_CLASSES.base]: BaseButton,
		[TEXT_BUTTON_TYPE_CLASSES.base_1]: OneButton,
		[TEXT_BUTTON_TYPE_CLASSES.base_2]: TwoButton,
	}[buttonType]);

const TextButton = ({ children, buttonType, goto, ...otherProps }) => {
	const CustomButton = getButton(buttonType);
	if (goto) {
		return (
			<CustomButton {...otherProps}>
				<Link className='btn-text' to={goto}>
					{children}
				</Link>
			</CustomButton>
		);
	} else {
		return (
			<CustomButton {...otherProps}>
				<Link className='btn-text'>{children}</Link>
			</CustomButton>
		);
	}
};

export default TextButton;
