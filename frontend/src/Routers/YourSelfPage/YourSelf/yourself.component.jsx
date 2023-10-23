import { useState, useEffect, useMemo } from "react";

import { Outlet, useLocation } from "react-router-dom";

import {
	YourSelfContiner,
	SidebarContainer,
	SidebarList,
	SidebarItem,
	SidebarItemCurrent,
	SidebarLink,
} from "./yourself.style";

const YourSelf = () => {
	const [currentnavigate, setCurrentnavigate] = useState("");

	const navis = useMemo(() => [
			{ to: "/navi/yourself", text: "个人资料" },
			{ to: "/navi/yourself/account", text: "账号设置" },
			{ to: "/navi/yourself/likes", text: "我的收藏" },
			{ to: "/navi/yourself/tages", text: "标签/分类" },
		],[]);

	const localtion = useLocation();
	useEffect(() => {
		navis.forEach((navi) => {
			if (navi.to === localtion.pathname) {
				setCurrentnavigate(navi.text);
			}
		});
	}, [localtion.pathname, navis]);

	return (
		<YourSelfContiner>
			<SidebarContainer>
				<SidebarList>
					{navis.map((navi) => {
						if (navi.text === currentnavigate) {
							return (
								<SidebarItemCurrent key={navi.to}>
									<SidebarLink to={navi.to}>
										<span>{navi.text}</span>
									</SidebarLink>
								</SidebarItemCurrent>
							);
						} else {
							return (
								<SidebarItem key={navi.to}>
									<SidebarLink to={navi.to}>
										<span>{navi.text}</span>
									</SidebarLink>
								</SidebarItem>
							);
						}
					})}
				</SidebarList>
			</SidebarContainer>
			<Outlet />
		</YourSelfContiner>
	);
};

export default YourSelf;
