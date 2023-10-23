import { useState, Fragment } from "react";
import ListNavigation from "../../Routers/ListNavigation/listNavi.component";
import {
	SidebarContainer,
	SidebarBtnContainer,
	SidebarBtn,
	ListNaviContainer,
} from "./sidebar.style";

const Sidebar = () => {
	
	const [toggle, setToggle] = useState(false);

	const toggleHandler = () => {
		setToggle(!toggle);
	};
	

	return (
		<Fragment>
			<SidebarContainer>
				<SidebarBtnContainer onClick={toggleHandler}>
					<SidebarBtn />
				</SidebarBtnContainer>
			</SidebarContainer>

			{toggle && (
				<ListNaviContainer>
					<ListNavigation />
				</ListNaviContainer>
			)}
		</Fragment>
	);
};

export default Sidebar;
