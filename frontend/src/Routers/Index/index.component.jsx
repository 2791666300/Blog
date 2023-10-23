import { IndexPageContainer, Bottom } from "./index.style";

import Sidebar from "../../Components/Sidebar/sidebar.component";
import Header from "../../Components/Header/header.component";
import Personal from "../../Components/Personal/personal.component";
import Footer from "../../Components/Footer/footer.component";

const Index = () => {
	return (
		<IndexPageContainer>
			<Sidebar />
			<Header />
			<Personal />
			<Bottom />
			<Footer />
		</IndexPageContainer>
	);
};

export default Index;
