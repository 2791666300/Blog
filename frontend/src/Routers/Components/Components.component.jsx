import { useState } from "react";
import Flipcard from "../../Components/Flipcard/Flipcard.component";
import Spinner from "../../Components/Spinner/Spinner.component";
import CartSpinner from "../../Components/CartSpinner/CartSpinner.component";
import Button, {
	BUTTON_TYPE_CLASSES,
} from "../../Components/Button/button-component";

import TextButton, {
	TEXT_BUTTON_TYPE_CLASSES,
} from "../../Components/Button-text/buttonText.component";

import { ComponentsContainer } from "./Components.style";
import ComponentItem from "./ComponentItem.component";

function Components() {
	let [time, setTime] = useState(new Date().getSeconds());
	return (
		<ComponentsContainer>
			<ComponentItem
				title='翻转卡片'
				description='这是一个可以用来加载的组件当然也还有其他的用途'>
				<Flipcard time={1000} size={180} item={time} setItem={setTime} />
			</ComponentItem>

			<ComponentItem
				title='加载'
				description='比较炫酷的加载组件，可以用在加载数据之前，也可以配合其他主机使用，或者装饰'>
				<Spinner character='LOADING' />
			</ComponentItem>
			<ComponentItem
				title='卡牌'
				description='这是一张扑克牌形式的加载组件，很炫酷有么有'>
				<CartSpinner rot='10deg' trX='0' />
				<CartSpinner rot='-10deg' trX='0' />
			</ComponentItem>
			<ComponentItem
				title='按钮'
				description='好看button组件，可以是填充形式的按钮，也可以放在文字中'>
				<Button buttonType={BUTTON_TYPE_CLASSES.action_1_blue}>按钮</Button>
				<Button buttonType={BUTTON_TYPE_CLASSES.action_1}>按钮</Button>
				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "space-evenly",
					}}>
					<TextButton buttonType={TEXT_BUTTON_TYPE_CLASSES.base}>
						按钮 &rarr;
					</TextButton>
					<TextButton buttonType={TEXT_BUTTON_TYPE_CLASSES.base_2}>
						按钮 &rarr;
					</TextButton>
				</div>

				<Button buttonType={BUTTON_TYPE_CLASSES.inverted}>按钮</Button>
				<Button buttonType={BUTTON_TYPE_CLASSES.base}>按钮</Button>
			</ComponentItem>
		</ComponentsContainer>
	);
}

export default Components;
