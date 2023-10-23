import Sidebar from "../../Components/Sidebar/sidebar.component";
import Footer from "../../Components/Footer/footer.component";
import { IndexPageContainer, Bottom } from "../../Routers/Index/index.style";

import { ContentContainerOne } from "./containerOne.style";

const ContainerOne = (props) => {
	return (
		<IndexPageContainer>
			<Sidebar />
			<ContentContainerOne bgcolor={props.bgcolor}>
				{props.children}
			</ContentContainerOne>
			<Bottom />
			<Footer />
		</IndexPageContainer>
	);
};

export default ContainerOne;
