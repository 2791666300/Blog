import { useEffect } from "react";
import { CatalogueContainer } from "./catalogue.style";
import { Anchor, ConfigProvider } from "antd";
const Catalogue = ({ articles }) => {
	const catalogue = articles.article.match(/^##.*/gm);
	const catalogueArray = {};
	let key;
	catalogue.forEach((item) => {
		if (item.includes("###")) {
			catalogueArray[key].push(item.split(" ")[1]);
		} else {
			const dd = item.split(" ")[1];
			catalogueArray[dd] = [];
			key = dd;
		}
	});

	let cata = [];
	Object.keys(catalogueArray).forEach((secondary, index) => {
		if (catalogueArray[secondary].length !== 0) {
			cata.push({
				key: index,
				href: `#${secondary}`,
				title: secondary,
				children: catalogueArray[secondary].map((item) => {
					return {
						key: item,
						href: `#${item}`,
						title: item,
					};
				}),
			});
		} else {
			cata.push({
				key: index,
				href: `#${secondary}`,
				title: secondary,
			});
		}
	});
	useEffect(() => {
		const h2 = document.querySelectorAll("h2");
		const h3 = document.querySelectorAll("h3");

		h2.forEach((item) => {
			item.id = item.textContent;
		});
		h3.forEach((item) => {
			item.id = item.textContent;
		});
	});

	return (
		<CatalogueContainer>
			<ConfigProvider
				theme={{
					components: {
						Anchor: {
							colorPrimary: "#18DF16",
							colorText: "white",
						},
					},
				}}>
				<Anchor
					targetOffset={100}
					them
					colorText={"white"}
					style={{
						position: "fixed",
						top: "15vh",
					}}
					items={cata}
				/>
			</ConfigProvider>
		</CatalogueContainer>
	);
};

export default Catalogue;
