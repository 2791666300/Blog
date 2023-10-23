import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
	ActionBaseButton,
	ActionOneButton,
	ActionOneButtonBlue,
	ActionOneButtonGreen,
	ActionTwoButton,
	AuthButton_1,
	AuthButton_2,
} from "./button-styles"; // css in js

export const BUTTON_TYPE_CLASSES = {
	base: "base",
	google: "google-sign-in",
	inverted: "inverted",
	actionbase: "actionbase",
	action_1: "action_1",
	action_1_blue: "action_1_blue",
	action_2: "action_2",
	auth_1: "auth_1",
	auth_2: "auth_2",
};

// 通过buttonType 选择按钮类型并返回 buttonType 默认为BUTTON_TYPE_CLASSES.base
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
	({
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
		[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
		[BUTTON_TYPE_CLASSES.actionbase]: ActionBaseButton,
		[BUTTON_TYPE_CLASSES.action_1]: ActionOneButton,
		[BUTTON_TYPE_CLASSES.action_1_blue]: ActionOneButtonBlue,
		[BUTTON_TYPE_CLASSES.action_1_green]: ActionOneButtonGreen,
		[BUTTON_TYPE_CLASSES.action_2]: ActionTwoButton,
		[BUTTON_TYPE_CLASSES.auth_1]: AuthButton_1,
		[BUTTON_TYPE_CLASSES.auth_2]: AuthButton_2,
	}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
	const CustomButton = getButton(buttonType);
	return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
