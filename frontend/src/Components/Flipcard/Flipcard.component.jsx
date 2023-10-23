import { useEffect } from "react";
import { CartContainer } from "./Flipcard.style";
const Flipcard = ({ time, size, item, setItem }) => {
	useEffect(() => {
		const cart2 = document.querySelector(".cart2");
		const cart3 = document.querySelector(".cart3");
		cart2.style.transform = "rotateX(180deg)";
		cart3.style.transform = "rotateX(0)";
		cart2.style.transition = "none";
		cart3.style.transition = "none";
		setInterval(() => {
			setTimeout(
				() => {
					cart2.style.transform = "rotateX(0)";
					cart3.style.transform = "rotateX(-180deg)";
					cart2.style.transition = "0.5s";
					cart3.style.transition = "0.5s";
				},
				time < 2000 ? time / 1.9 : time - 2000,
			);
		
				setItem(new Date().getSeconds());
		}, time);
	});

	return (
		<CartContainer className='container' size={size}>
			<div className='cart cart1'>{item + 1}</div>
			<div className='cart cart2'>{item + 1}</div>
			<div className='cart cart3'>{item}</div>
			<div className='cart cart4'>{item}</div>
		</CartContainer>
	);
};

export default Flipcard;
