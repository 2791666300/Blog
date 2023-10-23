import TextButton from "../Button-text/buttonText.component";
import Title, { TITLE_TYPE_CLASSES } from "../Title/title.component";
import LinkIcon from "../Link-icon/linkIcon.component";
import { HeaderContainer } from "./header.style";
const Header = () => {
	return (
		<HeaderContainer>
			<img src='./favicon.png' alt='logo' className='header__logo' />
			<Title titleType={TITLE_TYPE_CLASSES.tertiary}>nice choice: </Title>
			<Title>欢迎来到我的博客</Title>
			<TextButton goto='/navi/articles'>开始阅读 &rarr;</TextButton>
			<LinkIcon />
		</HeaderContainer>
	);
};

export default Header;
