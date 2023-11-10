import { useSelector } from "react-redux";
import { selectorArticles } from "../../Store/articles/articles.selector";

import Spinner from "../../Components/Spinner/Spinner.component";

import {
	CategoriesContainer,
	ClassificationContainer,
	Classification,
	ClassificationItem,
	LabelContainer,
	LabelTabel,
	LabelItem,
} from "./categories.style";
const Categories = (props) => {
	const articles = useSelector(selectorArticles);

	if (!articles) {
		return (
			<CategoriesContainer>
				<Spinner character='LOADING' />
			</CategoriesContainer>
		);
	}

	const classifications = articles?.reduce((currentCategorys, article) => {
		currentCategorys.push(article.category);
		return [...new Set(currentCategorys.toString().split(","))];
	}, []);

	const labels = articles?.reduce((currentLabels, article) => {
		currentLabels.push(article.label);
		return [...new Set(currentLabels.toString().split(","))];
	}, []);

	return (
		<CategoriesContainer>
			<ClassificationContainer>
				<h1>分类</h1>
				<Classification>
					{classifications?.map((item) => {
						return (
							<ClassificationItem
								href={`/navi/articles/?category=${item}`}
								key={item}>
								{item}
							</ClassificationItem>
						);
					})}
				</Classification>
			</ClassificationContainer>
			<LabelContainer>
				<h1>标签</h1>
				<LabelTabel>
					{labels?.map((item) => {
						return (
							<LabelItem href={`/navi/articles/?label=${item}`} key={item}>
								{item}
							</LabelItem>
						);
					})}
				</LabelTabel>
			</LabelContainer>
		</CategoriesContainer>
	);
};

export default Categories;
