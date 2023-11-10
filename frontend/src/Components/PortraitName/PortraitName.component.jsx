import HeadPortrait from "../HeadPortrait/headportrait.component";

import { PortraitNameContainer, NameTable } from "./PortraitName.style";
const PortraitName = (props) => {
	return (
		<PortraitNameContainer>
			<HeadPortrait
				src={`http://localhost:80/img/users/${props.photo}`}
				alt='default'
			/>
			<NameTable>{props.name}</NameTable>
		</PortraitNameContainer>
	);
};

export default PortraitName;
