import { PrimaryText, SecondaryText, TertiaryText } from "./text.style";

export const TEXT_TYPE_CLASSES = {
	primary: "primary",
	secondary: "secondary",
	tertiary: "tertiary",
};

const getText = (textType = TEXT_TYPE_CLASSES.primary) =>
	({
		[TEXT_TYPE_CLASSES.primary]: PrimaryText,
		[TEXT_TYPE_CLASSES.secondary]: SecondaryText,
		[TEXT_TYPE_CLASSES.tertiary]: TertiaryText,
	}[textType]);

const Text = ({ children, textType, ...otherProps }) => {
	const CustomText = getText(textType);
	return <CustomText {...otherProps}>{children}</CustomText>;
};

export default Text;
