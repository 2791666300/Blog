import { useSelector } from "react-redux";

import { selectorArticles } from "../../Store/articles/articles.selector";

import { SummaryContainer } from "./summary.style";

const Summary = () => {
	const articles = useSelector(selectorArticles);
	if (!articles) {
		return (
			<SummaryContainer>
				<a href='/navi/articles'>
					<span>0</span>文章
				</a>

				<a href='/navi/categories'>
					<span>0</span>分类
				</a>

				<a href='/navi/categories'>
					<span>0</span>标签
				</a>
			</SummaryContainer>
		);
	}

	const classifications = articles.reduce((currentCategorys, article) => {
		currentCategorys.push(article.category);
		return [...new Set(currentCategorys.toString().split(","))];
	}, []);

	const labels = articles.reduce((currentLabels, article) => {
		currentLabels.push(article.label);
		return [...new Set(currentLabels.toString().split(","))];
	}, []);

	return (
		<SummaryContainer>
			<a href='/navi/articles'>
				<span>{articles.length}</span>文章
			</a>

			<a href='/navi/categories'>
				<span>{classifications.length}</span>分类
			</a>

			<a href='/navi/categories'>
				<span>{labels.length}</span>标签
			</a>
		</SummaryContainer>
	);
};

export default Summary;
