import { Timeline, ConfigProvider } from "antd";

import { useSelector } from "react-redux";

import { FileTextFilled } from "@ant-design/icons";

import { timeConversion } from "../../Utils/TimeConversion";
import { Link } from "react-router-dom";

import { AboutBlogContainer } from "./aboutBolg.style";
import { selectorArticles } from "../../Store/articles/articles.selector";

const AboutBolg = () => {
	const articles = useSelector(selectorArticles);

	const items = articles.map((article) => {
		return {
			children: timeConversion(new Date(article.publication)),
			label: (
				<Link
					to={`/navi/articles/${article.id}`}
					style={{ color: "white", fontSize: 16 }}>
					<FileTextFilled />
					{article.primaryTitle}
				</Link>
			),
		};
	});

	return (
		<AboutBlogContainer>
			<div
				style={{
					width: "60rem",
					height: "100vh",
					paddingTop: "5rem",
				}}>
				<h2 style={{ textAlign: "center", paddingBottom: "5rem" }}>时间轴</h2>
				<ConfigProvider
					theme={{
						components: {
							Timeline: {
								tailColor: "#18DF16",
								itemPaddingBottom: 80,
								tailWidth: 2,
								colorText: "white",

								colorPrimary: "#18DF16",
							},
						},
					}}>
					<Timeline mode='alternate' items={items} />
				</ConfigProvider>
			</div>
		</AboutBlogContainer>
	);
};
export default AboutBolg;
