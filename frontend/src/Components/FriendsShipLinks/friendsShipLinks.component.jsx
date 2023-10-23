import { useDispatch } from "react-redux";
import { message } from "antd";
import { customAddDeleteStart } from "../../Store/users/user.action";

import Modal from "../../composite/Modal";
import ConfirmDelete from "../../composite/ConfirmDelete";

import {
	FriendShipLinksContainer,
	FriendShipLinksItemContainer,
	FriendShipLinksItem,
	DeleteButton,
} from "./friendsShipLinks.style";
import { useState } from "react";

const FriendsShipLinks = ({ linksDates }) => {
	const [show, setShow] = useState(null);
	const dispatch = useDispatch();
	const [messageApi, contextHolder] = message.useMessage();

	const deleteLinkHandler = (likeName) => {
		if (likeName) {
			messageApi.open({
				type: "success",
				content: "删除成功",
			});
		}
		dispatch(customAddDeleteStart(likeName));
	};

	return (
		<FriendShipLinksContainer>
			{contextHolder}
			{linksDates.map((link) => {
				return (
					<FriendShipLinksItemContainer
						key={link.imgAlt}
						onContextMenu={(e) => {
							e.preventDefault();
							setShow(show === link.imgAlt ? null : link.imgAlt);
						}}>
						<FriendShipLinksItem href={link.href} target='link'>
							<img src={link.imgsrc} alt={link.imgAlt} />
							<span>{link.linkName}</span>
						</FriendShipLinksItem>
						{show === link.imgAlt && (
							<Modal>
								<Modal.Open opens='delete'>
									<button>
										<DeleteButton>x</DeleteButton>
									</button>
								</Modal.Open>
								<Modal.Window name='delete'>
									<ConfirmDelete
										resourceName={link.linkName}
										disabled={false}
										onConfirm={() => deleteLinkHandler(link.linkName)}
									/>
								</Modal.Window>
							</Modal>
						)}
					</FriendShipLinksItemContainer>
				);
			})}
		</FriendShipLinksContainer>
	);
};

export default FriendsShipLinks;
