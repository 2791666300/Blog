import TextButton, {
	TEXT_BUTTON_TYPE_CLASSES,
} from "../Button-text/buttonText.component";

import {
	ProBoxItemContainer,
	Brief,
	Picture,
	ProBoxItemTitle,
	ProBoxItemIntro,
	ProBoxItemDesc,
} from "./ProBoxItem.style";

const ProBoxItem = (props) => {
	const { title, desc, layout, address } = props;
	return (
		<ProBoxItemContainer layout={layout}>
			<Brief>
				<ProBoxItemTitle>{title}</ProBoxItemTitle>

				{props?.intro && <ProBoxItemIntro>{props?.intro}</ProBoxItemIntro>}
				<ProBoxItemDesc>{desc}</ProBoxItemDesc>

				<TextButton buttonType={TEXT_BUTTON_TYPE_CLASSES.base_2} url={address}>
					{address} &rarr;
				</TextButton>
			</Brief>
			<Picture>
				{props?.imgs &&
					props.imgs.map((item) => <img src={item} alt={item} key={item} />)}
			</Picture>
		</ProBoxItemContainer>
	);
};

export default ProBoxItem;
