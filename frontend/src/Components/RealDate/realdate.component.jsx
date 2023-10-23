import { RealDateContainer } from "./realdate.style";

const RealDate = () => {
	const date = new Date();
	let yarn = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	if (month < 10) {
		month = "0" + month;
	}
	if (day < 10) {
		day = "0" + day;
	}
	return (
		<RealDateContainer>
			{yarn}年{month}月{day}日
		</RealDateContainer>
	);
};

export default RealDate;
