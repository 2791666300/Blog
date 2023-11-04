import HeadPortrait from "../HeadPortrait/headportrait.component";

import { PortraitNameContainer, NameTable } from "./PortraitName.style";
const PortraitName = (props) => {
	return (
		<PortraitNameContainer>
			<HeadPortrait
				src={`http://42.194.140.99:80/img/users/${props.photo}`}
				alt='default'
			/>
			<NameTable>{props.name}</NameTable>
		</PortraitNameContainer>
	);
};

export default PortraitName;
