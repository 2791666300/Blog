import { Item, ItemLink } from "./FooterItem.style";

const FooterItem = (props) => {
	return (
		<Item>
			<ItemLink to={props.to}>{props.children}</ItemLink>
		</Item>
	);
};

export default FooterItem;
