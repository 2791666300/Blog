import { MoreContainer } from "./more.style";

import { Carousel, Image } from "antd";

const contentStyle = {
	paddingTop: "20px",
	height: "90vh",
	color: "#fff",
	lineHeight: "90vh",
	textAlign: "center",
	backgroundColor: "#1B1B1D",
};
const More = () => {
	const onChange = (currentSlide) => {
		console.log(currentSlide);
	};
	return (
		<MoreContainer>
			<Carousel afterChange={onChange} autoplay>
				<div>
					<div style={contentStyle}>
						<Image
							height={500}
							src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
						/>
					</div>
				</div>
				<div>
					<div style={contentStyle}>
						<Image
							height={500}
							src='https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp'
						/>
					</div>
				</div>
				<div>
					<div style={contentStyle}>
						<Image
							height={500}
							src='https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp'
						/>
					</div>
				</div>
				<div>
					<div style={contentStyle}>
						<Image
							height={500}
							src='https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp'
						/>
					</div>
				</div>
			</Carousel>
		</MoreContainer>
	);
};

export default More;
