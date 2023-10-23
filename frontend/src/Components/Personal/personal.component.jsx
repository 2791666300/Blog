import Portrait from "../Portrait/portrait.component";
import Summary from "../Summary/symmary.component";
import TextButton from "../Button-text/buttonText.component";
import Title, { TITLE_TYPE_CLASSES } from "../Title/title.component";
import Text, { TEXT_TYPE_CLASSES } from "../Text/text.component";

import { PersonalContainer, PersonalList, PersonalBtn } from "./personal.style";

const Personal = () => {
	return (
		<PersonalContainer>
			<PersonalList>
				<Portrait text='Lemon Flavor' imgUrl='/胖达.jpeg' />
				<Title titleType={TITLE_TYPE_CLASSES.fourth}>Lemon Flavor</Title>
				<Text textType={TEXT_TYPE_CLASSES.secondary}>
					这个世界充满未知的东西，就像我们永远都不会知道宇宙的全部面貌，但有什么能比循序渐进的过程更让人热血澎湃呢！
				</Text>
				<PersonalBtn>
					<TextButton goto='/navi/aboutme'>关于我 &rarr;</TextButton>
					<TextButton goto='/navi/aboutblog'>关于博客 &rarr;</TextButton>
				</PersonalBtn>
				<Summary />
			</PersonalList>
		</PersonalContainer>
	);
};

export default Personal;
