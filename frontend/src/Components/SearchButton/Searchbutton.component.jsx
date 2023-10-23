import { ReactComponent as SearchIcon } from "../../Assets/search.svg";
import { SearchButtonContainer } from "./Searchbutton.style";
const SearchButton = (props) => {
	return (
		<SearchButtonContainer onClick={props.searchHandler}>
			<SearchIcon />
			<span>搜索</span>
			<div>🤪</div>
			<p>😏</p>
		</SearchButtonContainer>
	);
};

export default SearchButton;
