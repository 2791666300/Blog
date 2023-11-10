import FooterItem from "../footeritem/FooterItem.component";
import Text from "../Text/text.component";
import {
	FooterContainer,
	FooterNavigation,
	FooterCopyright,
} from "./footer.style";
const Footer = () => {
	function scolltoTop() {
		window.scrollTo(0, 0);
	}
	return (
		<FooterContainer onClick={scolltoTop}>
			<FooterNavigation>
				<ul>
					<FooterItem>company</FooterItem>
					<FooterItem to='/navi/aboutme'>联系我</FooterItem>
					<FooterItem>Carrers</FooterItem>
					<FooterItem>隐私政策</FooterItem>
					<FooterItem>团队</FooterItem>
				</ul>
			</FooterNavigation>
			<FooterCopyright>
				<Text>
					&nbsp; &nbsp; 由 &nbsp;
					<FooterItem to='/navi/aboutme'>Lemon Flavor</FooterItem>. 版权所有 ©by{" "}
					<FooterItem to='/navi/aboutme'>Lemon Flavor</FooterItem>.
					您可以100%将此网页用于个人和商业用途，但不能声称它是您自己的设计。
				</Text>
			</FooterCopyright>
		</FooterContainer>
	);
};

export default Footer;
