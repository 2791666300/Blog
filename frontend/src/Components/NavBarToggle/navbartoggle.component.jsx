import { NavBarToggleContainer } from "./navbartoggle.style";

const NavBartoggle = ({ color, children }) => {
	return (
		<NavBarToggleContainer color={color}>{children}</NavBarToggleContainer>
	);
};

export default NavBartoggle;
