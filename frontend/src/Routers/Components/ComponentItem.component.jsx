import Cart from "../../Components/Cart/Cart.compoment";

import {
	ItemTitle,
	ItemComponent,
	ItemDescription,
} from "./ComponentItem.style";

function ComponentItem({ title, description, children }) {
	return (
		<Cart>
			<ItemTitle>{title}</ItemTitle>
			<ItemComponent>{children}</ItemComponent>
			<ItemDescription>{description}</ItemDescription>
		</Cart>
	);
}

export default ComponentItem;
