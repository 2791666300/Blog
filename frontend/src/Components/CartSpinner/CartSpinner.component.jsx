import { useEffect, useState } from "react";
import CardBack from "./CardBack.component";
import {
	CartContainer,
	CardHislop,
	Card,
	CardFront,
	CardLabel,
	CardLabelReverse,
	CardLogoContainer,
	CardLogo,
} from "./CartSpinner.style";

function CartSpinner({ rot, trX }) {
	const [click, setClick] = useState({ running: false, pass: false });

	function handleClick() {
		setClick({ ...click, running: true });
		setTimeout(() => {
			setClick({ ...click, running: false, pass: true });
			setTimeout(() => {
				setClick({ ...click, running: false, pass: false });
			}, 1000);
		}, 2000);
	}

	useEffect(() => {
		setClick({ pass: false, running: true });
		setTimeout(() => {
			setClick({ running: false, pass: true });
			setTimeout(() => {
				setClick({ running: false, pass: false });
			}, 1000);
		}, 2000);
	}, []);
	return (
		<CartContainer>
			<CardHislop rot={rot} trX={trX}>
				<Card
					run={click.running}
					pass={click.pass}
					className={`jest-card ${click.running ? "jest-card-running" : ""}`}
					onClick={handleClick}>
					<CardFront>
						<CardLabel>JEST</CardLabel>
						<CardLogoContainer pass={click.pass}>
							<CardLogo pass={click.pass} />
						</CardLogoContainer>
						<CardLabelReverse>JEST</CardLabelReverse>
					</CardFront>
					<CardBack />
				</Card>
			</CardHislop>
		</CartContainer>
	);
}

export default CartSpinner;
