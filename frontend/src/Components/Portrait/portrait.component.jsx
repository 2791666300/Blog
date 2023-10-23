import { PortraitContainer, PortraitCaption } from "./portrait.style";

const Portrait = ({ text, imgUrl }) => {
	return (
		<PortraitContainer>
			<img src={imgUrl} alt={imgUrl} />
			<PortraitCaption>{text}</PortraitCaption>
		</PortraitContainer>
	);
};

export default Portrait;
