import FooterItem from "../../Components/footeritem/FooterItem.component";
import Text from "../../Components/Text/text.component";
import {
	FooterContainer,
	FooterNavigation,
	FooterCopyright,
} from "./Footer2.style";
const FooterTwo = () => {
	return (
		<FooterContainer>
			<FooterNavigation>
				<ul>
					<FooterItem>company</FooterItem>
					<FooterItem>Contact us</FooterItem>
					<FooterItem>Carrers</FooterItem>
					<FooterItem>Privacy policy</FooterItem>
					<FooterItem>Terms</FooterItem>
				</ul>
			</FooterNavigation>
			<FooterCopyright>
				<Text>
					&nbsp; &nbsp;Built by &nbsp;<FooterItem>Lemon Flavor</FooterItem>.
					Copyright © by
					<FooterItem>Lemon Flavor</FooterItem>. You are 100% allowed to use
					this webpage for both personal and commercial use, but NOT to claim it
					as your own design.
				</Text>
			</FooterCopyright>
		</FooterContainer>
	);
};

export default FooterTwo;
