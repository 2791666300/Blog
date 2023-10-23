import { ClassificationContainer } from "./classification.style";
const Classification = (props) => {
	return (
		<ClassificationContainer href={`/navi/articles/?${props.href}`}>
			<span>{props.name}</span>
		</ClassificationContainer>
	);
};

export default Classification;
