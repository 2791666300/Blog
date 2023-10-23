import { FloatButton } from "antd";
import { ToTopContainer } from "./totop.style";
const ToTop = () => {
	return (
		<ToTopContainer>
			<FloatButton.BackTop visibilityHeight={100}/>
		</ToTopContainer>
	);
};

export default ToTop;
