import { useState } from "react";
import Flipcard from "../Flipcard/Flipcard.component";
import { RealTimeFlipContainer } from "./RealTimeFlip.style";
const RealTimeFlip = () => {
	let [time, setTime] = useState(new Date().getSeconds());

	return (
		<RealTimeFlipContainer>
			<Flipcard time={1000} size={50} item={time} setItem={setTime} />
		</RealTimeFlipContainer>
	);
};

export default RealTimeFlip;
