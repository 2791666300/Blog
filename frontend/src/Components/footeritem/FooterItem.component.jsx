import { Item, ItemLink } from "./FooterItem.style";

const FooterItem = (props) => {
	return (
		<Item>
			<ItemLink href='#'>{props.children}</ItemLink>
		</Item>
	);
};

export default FooterItem;
