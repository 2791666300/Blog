import { LabelContainer } from "./label.style";
const Label = (props) => {
	return (
		<LabelContainer href={`/navi/articles/?${props.href}`}>
			{props.label}
		</LabelContainer>
	);
};

export default Label;
