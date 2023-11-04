import { MoreContainer, PorBox } from "./more.style";
import ProBoxItem from "../../Components/ProBoxItem/ProBoxItem.component";

const More = () => {
	return (
		<MoreContainer>
			<PorBox>
				<ProBoxItem
					title='校园足球平台'
					intro='校园足球一站式服务管理平台'
					desc='为校园足球协会、足球爱好者、学校各院队队员提供一个赛事运营、注册管理、查看赛事、比较数据宣传的应用平台'
					layout='row'
					address='https://github.com/2791666300/campusfootballplatform'
					imgs={["/img/1.足球.jpg", "/img/2.足球.jpg", "/img/3.足球.jpg"]}
				/>
				<ProBoxItem
					title='酒店管理系统'
					intro='酒店内部一站式后台管理系统平台'
					desc='实现一个酒店预定、入住、管理、签出、结算、统计、数据可视化的管理系统'
					layout='row-reverse'
					imgs={["/img/1.酒店.jpg", "/img/2.酒店.jpg", "/img/3.酒店.jpg"]}
					address='https://github.com/2791666300/the-wild-oasis'
				/>
				<ProBoxItem
					title='电商平台'
					intro='类似淘宝电商平台的简化式平台'
					desc='具有登录、注册、添加购物车、结算、数据可视化的简单的电商平台'
					layout='row'
					address='https://github.com/2791666300/firstsite'
					imgs={["/img/1.电商.jpg", "/img/2.电商.jpg", "/img/3.电商.jpg"]}
				/>
			</PorBox>
		</MoreContainer>
	);
};

export default More;
