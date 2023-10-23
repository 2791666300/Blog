import { AboutMeContainer, ResumeContinaer, ResumeItem } from "./aboutMe.style";
const AboutMe = () => {
	return (
		<AboutMeContainer>
			<ResumeContinaer>
				<h1>我的简历</h1>
				{/* <h4>持续更新……</h4> */}
				<ResumeItem>
					<h2>个人信息</h2>
					<p>
						<span>姓名：</span>
						<span> 曲木车博</span>
					</p>
					<p>
						<span>性别：</span>
						<span> 男</span>
					</p>
					<p>
						<span>学历：</span>
						<span> 本科(2019.9 - 2023.6)</span>
					</p>
					<p>
						<span>邮箱：</span>
						<span> 2791666300@qq.com</span>
					</p>
					<p>
						<span>github：</span>
						<a href=' https://github.com/2791666300' target='link'>
							https://github.com/2791666300
						</a>
					</p>
				</ResumeItem>
				<ResumeItem>
					<h2>工作经历</h2>
					<p>工作经历暂无</p>
				</ResumeItem>
				<ResumeItem>
					<h2>项目经历</h2>

					<h3>01 .个人博客网站</h3>
					<p>
						<span>时间：</span>
						<span> 2022.10 - </span>
					</p>
					<p>
						<span>说明：</span>
						<span> 前后端独立开发 </span>
					</p>
					<p>
						<span>项目链接：</span>
						<a href='https://lemonblog.netlify.app/' target='link'>
							https://lemonblog.netlify.app/
						</a>
					</p>
					<p>
						<span>项目描述：</span>
						<ul>
							<li>
								也就是你正在看的这个博客，
								具有简单的登录、注册、发布、删改的功能……
							</li>
							<li>
								项目源码:
								<a
									href='https://github.com/2791666300/Lemon-blog'
									target='link'>
									https://github.com/2791666300/Lemon-blog
								</a>
							</li>
						</ul>
					</p>

					<h3>02 .电商平台</h3>
					<p>
						<span>时间：</span>
						<span> 2022.6 - 2022.8 </span>
					</p>
					<p>
						<span>说明：</span>
						<span> 前后端独立开发 </span>
					</p>
					<p>
						<span>项目链接：</span>
						<a href='https://lemonflavor.netlify.app/' target='link'>
							https://lemonflavor.netlify.app/
						</a>
					</p>
					<p>
						<span>项目描述：</span>
						<ul>
							<li>
								前端采用React框架,结合React-redux保存状态,React-saga异步请求的方式
								Axios，后端node,express实现RESTful API，
								可以实现用户登录、登出、购物车增删改……
							</li>
							<li>
								项目源码:
								<a href='https://github.com/2791666300/lemon' target='link'>
									https://github.com/2791666300/lemon
								</a>
							</li>
						</ul>
					</p>

					<h3>03. 旅游服务网站</h3>
					<p>
						<span>时间：</span>
						<span> 2022.4 - 2022.6</span>
					</p>
					<p>
						<span>说明：</span>
						<span> 前后端开发教学 </span>
					</p>
					<p>
						<span>项目链接：</span>
						<a href='https://lemonblog.netlify.app/' target='link'>
							https://lemonblog.netlify.app/
						</a>
					</p>
					<p>
						<span>项目描述：</span>
						<ul>
							<li>
								采用后端渲染的方式 pug渲染、css、sass、html……
								node、express、mongode、mongoose、jsonwebtoken……
							</li>
							<li>
								项目源码:
								<a href='https://github.com/2791666300/Natours' target='link'>
									https://github.com/2791666300/Natours
								</a>
							</li>
						</ul>
					</p>
				</ResumeItem>
				<ResumeItem>
					<h2>教育经历</h2>
					<h3>成都工业学院</h3>
					<p>
						<span>时间： </span>
						<span>2019.9 - 2023.6</span>
					</p>
					<p>
						<span>专业： </span>
						<span>网络工程</span>
					</p>
				</ResumeItem>
			</ResumeContinaer>
		</AboutMeContainer>
	);
};

export default AboutMe;
