import { useSelector, useDispatch } from "react-redux";

import { selectorCurrentUser } from "../../Store/users/user.selector";
import { signOutStart } from "../../Store/users/user.action";
import {
	ListNavigationContainer,
	ListNavigationList,
	ListNavigationItem,
	ListNavigationLink,
} from "./listNavi.style";

const ListNavigation = () => {
	const currentUser = useSelector(selectorCurrentUser);

	const dispatch = useDispatch();
	// 登出
	const handleClick = async () => {
		dispatch(signOutStart());
	};
	return (
		<ListNavigationContainer>
			<ListNavigationList>
				{currentUser && (
					<ListNavigationItem onClick={handleClick}>
						<ListNavigationLink onClick={(e) => e.preventDefault()} href=''>
							<span>01</span>sign out
						</ListNavigationLink>
					</ListNavigationItem>
				)}

				{!currentUser && (
					<ListNavigationItem>
						<ListNavigationLink href='/auth'>
							<span>01</span>sign-up/login
						</ListNavigationLink>
					</ListNavigationItem>
				)}
				<ListNavigationItem>
					<ListNavigationLink href='/navi/aboutme'>
						<span>02</span>关于我
					</ListNavigationLink>
				</ListNavigationItem>
				<ListNavigationItem>
					<ListNavigationLink href='/navi/aboutblog'>
						<span>03</span>关于博客
					</ListNavigationLink>
				</ListNavigationItem>
				<ListNavigationItem>
					<ListNavigationLink href='/navi/articles'>
						<span>04</span>开始阅读
					</ListNavigationLink>
				</ListNavigationItem>
				<ListNavigationItem>
					<ListNavigationLink href='/'>
						<span>05</span>回到首页
					</ListNavigationLink>
				</ListNavigationItem>
			</ListNavigationList>
		</ListNavigationContainer>
	);
};

export default ListNavigation;
