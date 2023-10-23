import { InputForm } from "./search-box-styles";

const SearchBox = ({ placeholder, arg }) => {
	return <InputForm type='search' placeholder={placeholder} onChange={arg} />;
};

export default SearchBox;
