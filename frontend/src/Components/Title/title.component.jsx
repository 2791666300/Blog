import {
	PrimaryTitle,
	SecondaryTitle,
	TertiaryTitle,
	FourthTitle,
} from "./title.style";

export const TITLE_TYPE_CLASSES = {
	primary: "primary",
	secondary: "secondary",
	tertiary: "tertiary",
	fourth: "fourth",
};

// 通过buttonType 选择按钮类型并返回 buttonType 默认为TITLE_TYPE_CLASSES.primary
const getTitle = (titleType = TITLE_TYPE_CLASSES.primary) =>
	({
		[TITLE_TYPE_CLASSES.primary]: PrimaryTitle,
		[TITLE_TYPE_CLASSES.secondary]: SecondaryTitle,
		[TITLE_TYPE_CLASSES.tertiary]: TertiaryTitle,
		[TITLE_TYPE_CLASSES.fourth]: FourthTitle,
	}[titleType]);

const Title = ({ children, titleType, ...otherProps }) => {
	const CustomTitle = getTitle(titleType);
	return <CustomTitle {...otherProps}>{children}</CustomTitle>;
};

export default Title;
