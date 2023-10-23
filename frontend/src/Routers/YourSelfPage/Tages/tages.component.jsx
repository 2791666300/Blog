import { useSelector } from "react-redux";

import { selectorArticles } from "../../../Store/articles/articles.selector";
import { selectorCurrentUser } from "../../../Store/users/user.selector";

import ContentContainer from "../Contentcontainer/contentcontainer.component";

import Classification from "../../../Components/Classification/classification.component";
import Label from "../../../Components/Label/label.component";

import { TagesCategory, TagesLabels } from "./tages.style";
const Tages = () => {
	const articles = useSelector(selectorArticles);
	const currentUser = useSelector(selectorCurrentUser);

	const likes = articles.filter((article) =>
		currentUser.collections.some((collection) => collection === article.id),
	);
	const currentCategory = likes.reduce((currentCategorys, like) => {
		currentCategorys.push(like.category);
		return [...new Set(currentCategorys.toString().split(","))];
	}, []);

	const currentLabel = likes.reduce((currentLabels, like) => {
		currentLabels.push(like.label);
		return [...new Set(currentLabels.toString().split(","))];
	}, []);

	return (
		<ContentContainer>
			<h2>分类</h2>
			<TagesCategory>
				{currentCategory.map((cg) => {
					return <Classification name={cg} key={cg} href={`category=${cg}`} />;
				})}
			</TagesCategory>
			<h2>标签</h2>
			<TagesLabels>
				{currentLabel.map((lb) => {
					return <Label label={lb} key={lb} href={`label=${lb}`} />;
				})}
			</TagesLabels>
		</ContentContainer>
	);
};

export default Tages;
