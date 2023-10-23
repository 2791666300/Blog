import { HeadPortraitContainer } from "./headportrait.style";

const HeadPortrait = (props) => {
	return (
		<HeadPortraitContainer>
			<img src={props.src} alt={props.alt} />
		</HeadPortraitContainer>
	);
};

export default HeadPortrait;
