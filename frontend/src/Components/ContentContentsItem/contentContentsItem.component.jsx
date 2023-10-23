import { Fragment } from "react";
import {
	ItemContainer,
	ItemIntroduce,
	ItemTables,
	ItemTable,
} from "./contentContentsItem.style";

const ContentContentsItem = (props) => {
	const { item, index } = props;
	return (
		<ItemContainer>
			<ItemIntroduce>
				<h2 id={index}>{item.secondaryTitle}</h2>
				<p>{item.secondaryIntroduction}</p>
			</ItemIntroduce>
			<ItemTables>
				{props.item.secondaryContent
					? props.item.secondaryContent.map((It, i) => {
							return (
								<ItemTable key={It._id}>
									<h3 id={`${index}-${i}`}>{It.tertiaryTitle}</h3>
									{It.text.map((txt, txtnum) => {
										return (
											<Fragment key={txtnum}>
												<p>{txt}</p>
												{It.code
													? It.code[txtnum]
														? It.code[txtnum].map((img) => {
																return (
																	<span key={img}>
																		<img src={`/code/${img}`} alt={img} />
																	</span>
																);
														  })
														: null
													: null}
											</Fragment>
										);
									})}
								</ItemTable>
							);
					  })
					: null}
			</ItemTables>
		</ItemContainer>
	);
};

export default ContentContentsItem;
