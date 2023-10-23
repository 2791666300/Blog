import { ContentCatalogueContainer } from "./contentCatalogue.style";

const ContentCatalogue = (props) => {
	return (
		<ContentCatalogueContainer>
			<ul>
				{props.catalogueArray.map((item, index) => {
					return (
						<li key={index}>
							<a href={`#${index}`}>{item}</a>
						</li>
					);
				})}
			</ul>
		</ContentCatalogueContainer>
	);
};

export default ContentCatalogue;
