import FooterTwo from "./Footer2.component";
import { ContainerTwoContainer, Top } from "./containerTwo.style";

const ContainerTow = (props) => {
	return (
		<ContainerTwoContainer>
			<Top id='top' />
			{props.children}
			<FooterTwo />
		</ContainerTwoContainer>
	);
};
export default ContainerTow;
