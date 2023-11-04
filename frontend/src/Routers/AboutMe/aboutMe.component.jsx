/* eslint-disable jsx-a11y/iframe-has-title */
import { AboutMeContainer, ResumeContinaer } from "./aboutMe.style";
const AboutMe = () => {
	return (
		<AboutMeContainer>
			<ResumeContinaer>
				<iframe
					src='/1_曲木车博简历.pdf'
					frameborder='0'
					height='100%'
					width='100%'></iframe>
			</ResumeContinaer>
		</AboutMeContainer>
	);
};

export default AboutMe;
