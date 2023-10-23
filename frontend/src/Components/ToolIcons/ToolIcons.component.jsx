import { ReactComponent as Chat } from "../../Assets/chat.svg";
import { ReactComponent as Redo } from "../../Assets/redo2.svg";
import { ReactComponent as StartFull } from "../../Assets/star-full.svg";
import { ReactComponent as ThumbsUp } from "../../Assets/thumbs-up.svg";
import { ReactComponent as Warning } from "../../Assets/warning.svg";

import { ToolIconsContainer } from "./ToolIcons.style";

export const ICON_TYPE_CLASSES = {
	Chat: "Chat",
	Redo: "Redo",
	StartFull: "StartFull",
	ThumbsUp: "ThumbsUp",
	Warning: "Warning",
};

const getIcon = (iconType) =>
	({
		[ICON_TYPE_CLASSES.Chat]: Chat,
		[ICON_TYPE_CLASSES.Redo]: Redo,
		[ICON_TYPE_CLASSES.StartFull]: StartFull,
		[ICON_TYPE_CLASSES.ThumbsUp]: ThumbsUp,
		[ICON_TYPE_CLASSES.Warning]: Warning,
	}[iconType]);

const ToolIcon = ({ iconType, height, width, fill, ...otherprops }) => {
	const CustomIcon = getIcon(iconType);
	return (
		<ToolIconsContainer
			{...otherprops}
			height={height}
			width={width}
			fillcolor={fill}>
			<CustomIcon />
		</ToolIconsContainer>
	);
};

export default ToolIcon;
