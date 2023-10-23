import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ReactComponent as ArticleIcon } from "../../Assets/article.svg";

import Button, { BUTTON_TYPE_CLASSES } from "../Button/button-component";

import { selectorArticles } from "../../Store/articles/articles.selector";

import { timeConversion } from "../../Utils/TimeConversion";

import {
	SearchContainerBox,
	SearchTable,
	SearchFromInput,
	SearchContent,
	SearchContentItem,
	SearchButtonContainer,
} from "./SearchContainer.style";

const SearchContainer = (props) => {
	const navigate = useNavigate();
	const articles = useSelector(selectorArticles);
	const [filteredArticles, setFilteredAticles] = useState([]);

	const searchOnchange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();

		const newFilterArticles = articles.filter((el) => {
			return (
				el.primaryTitle.toLocaleLowerCase().includes(searchFieldString) |
				el.introduction.toLocaleLowerCase().includes(searchFieldString)
			);
		});
		setFilteredAticles(newFilterArticles);
		if (!searchFieldString) {
			setFilteredAticles([]);
		}
	};

	const goToArticle = (id) => {
		props.onCloseModal?.();
		navigate(`/navi/articles/${id}`);
	};

	return (
		<SearchContainerBox>
			<SearchTable>
				<SearchFromInput
					type='search'
					placeholder='输入并搜索.....'
					onChange={searchOnchange}
				/>
				<SearchContent>
					{filteredArticles.map((item) => {
						return (
							<SearchContentItem
								key={item.id}
								onClick={() => {
									goToArticle(item.id);
								}}>
								<ArticleIcon />
								<h2>{item.primaryTitle}</h2>
								<div>{timeConversion(new Date(item.publication))}</div>
								<img src={`/users/${item.coverImg}`} alt={item.coverImg} />
							</SearchContentItem>
						);
					})}
				</SearchContent>
				<SearchButtonContainer>
					<Button
						onClick={props?.onCloseModal}
						buttonType={BUTTON_TYPE_CLASSES.actionbase}>
						取消 &rarr;
					</Button>
					<Button buttonType={BUTTON_TYPE_CLASSES.actionbase}>
						搜索 &rarr;
					</Button>
				</SearchButtonContainer>
			</SearchTable>
		</SearchContainerBox>
	);
};

export default SearchContainer;
