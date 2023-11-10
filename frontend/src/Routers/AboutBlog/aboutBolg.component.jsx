import { Timeline, ConfigProvider } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FileTextFilled } from "@ant-design/icons";

import Spinner from "../../Components/Spinner/Spinner.component";
import { timeConversion } from "../../Utils/TimeConversion";

import {
	AboutBlogContainer,
	AbTitle,
	ProviderContainer,
} from "./aboutBolg.style";
import { selectorArticles } from "../../Store/articles/articles.selector";

const AboutBolg = () => {
	const articles = useSelector(selectorArticles);

	if (!articles) {
		return (
			<AboutBlogContainer>
				<Spinner character='LOADING' />
			</AboutBlogContainer>
		);
	}

	const items = articles?.map((article) => {
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
			<AbTitle>时间轴</AbTitle>
			<ProviderContainer>
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
			</ProviderContainer>
		</AboutBlogContainer>
	);
};
export default AboutBolg;
