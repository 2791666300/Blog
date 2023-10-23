import { useState } from "react";
import { RealTimeContainer } from "./realtime.style";

const RealTime = () => {
	const [date, setDate] = useState(new Date());

	setInterval(() => {
		setDate(new Date());
	}, 1000);

	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();
	if (hour < 10) {
		hour = "0" + hour;
	}
	if (minute < 10) {
		minute = "0" + minute;
	}
	if (second < 10) {
		second = "0" + second;
	}
	return (
		<RealTimeContainer>
			{hour}:{minute}:{second}
		</RealTimeContainer>
	);
};

export default RealTime;
