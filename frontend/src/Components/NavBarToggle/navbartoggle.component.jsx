import { ReactComponent as NavBarToggle } from "../../Assets/navBarToggle.svg";

import { NavBarToggleContainer } from "./navbartoggle.style";

const NavBartoggle = props => {
    return(
        <NavBarToggleContainer color={props.color}>
            <NavBarToggle />
        </NavBarToggleContainer>
    )
}

export default NavBartoggle