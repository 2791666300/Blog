import { useState } from "react";
import { useSelector } from "react-redux";
import { ConfigProvider, Pagination } from "antd";
import Button, {
	BUTTON_TYPE_CLASSES,
} from "../../Components/Button/button-component";

import RealTime from "../../Components/RealTime/realtime.component";
import RealDate from "../../Components/RealDate/realdate.component";
import SearchBox from "../../Components/SearchBox/search-box-component";
import FriendsShipLinks from "../../Components/FriendsShipLinks/friendsShipLinks.component";
import CustomAdd from "../../Components/CustomAdd/customAdd.component";

import DefaultFriendShipLinks from "../../data/friendShipLinks-data";

import { selectorCurrentUser } from "../../Store/users/user.selector";

import Modal from "../../composite/Modal";

import {
	FriendShipContainer,
	FriendShipContent,
	CustomAddButton,
} from "./friendship.style";

const Friendship = (props) => {
	const currentUser = useSelector(selectorCurrentUser);
	const [current, setCurrent] = useState(1);

	let linksDates;
	if (!currentUser) {
		linksDates = DefaultFriendShipLinks;
	} else {
		linksDates = [...DefaultFriendShipLinks, ...currentUser.friendShips];
	}
	const [searchLinks, setSearchLinks] = useState(linksDates);
	const [click, setClick] = useState(false);

	const searchOnchangeHandler = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		const newFilterLinks = linksDates.filter((item) => {
			return item.linkName.toLocaleLowerCase().includes(searchFieldString);
		});
		setSearchLinks(newFilterLinks);
	};

	const onChange = (page) => {
		console.log(page);
		setCurrent(page);
	};
	const data = searchLinks.slice((current - 1) * 10, current * 10);

	const clikcHandler = () => {
		setClick(!click);
	};

	return (
		<FriendShipContainer>
			<FriendShipContent>
				<RealTime />
				<RealDate />
				<SearchBox
					placeholder='请输入并搜索......'
					arg={searchOnchangeHandler}
				/>
				<FriendsShipLinks linksDates={data} />
				{searchLinks.length > 10 ? (
					<ConfigProvider
						theme={{
							components: {
								Pagination: {
									colorBorder: "white",
									colorText: "white",
									itemSize: 37,
								},
							},
						}}>
						<Pagination
							current={current}
							onChange={onChange}
							total={linksDates.length}
						/>
						;
					</ConfigProvider>
				) : null}
			</FriendShipContent>
			<CustomAddButton onClick={clikcHandler}>
				<Modal>
					<Modal.Open opens='customAdd'>
						<Button buttonType={BUTTON_TYPE_CLASSES.actionbase}>
							&plusmn; 自定义 &rarr;
						</Button>
					</Modal.Open>
					<Modal.Window name='customAdd'>
						<CustomAdd friendShips={currentUser?.friendShips} />
					</Modal.Window>
				</Modal>
			</CustomAddButton>
		</FriendShipContainer>
	);
};

export default Friendship;
