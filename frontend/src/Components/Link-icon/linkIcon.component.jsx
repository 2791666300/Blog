import {
	LinkIconContainer,
	LinkIconText,
	LinkIconLogos,
} from "./linkIcon.style";
const LinkIcon = () => {
	return (
		<LinkIconContainer>
			<LinkIconText>Seen on</LinkIconText>

			<LinkIconLogos>
				<a href='https://juejin.cn/user/2221481911649790' target='link'>
					<img src='/img/juejin.png' alt='Seen on logo 1' />
				</a>
				<a href='https://github.com/2791666300' target='link'>
					<img src='/img/github.png' alt='Seen on logo 2' />
				</a>
				<a href='https://blog.csdn.net/m0_57283339?type=blog' target='link'>
					<img src='/img/csdn.png' alt='Seen on logo 3' />
				</a>
			</LinkIconLogos>
		</LinkIconContainer>
	);
};

export default LinkIcon;
