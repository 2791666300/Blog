import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectorCurrentUser } from "../../../Store/users/user.selector";

import FormInput from "../../../Components/Form-input/form-input.component";
import Portrait from "../../../Components/Portrait/portrait.component";
import ContentContainer from "../Contentcontainer/contentcontainer.component";
import Button, {
	BUTTON_TYPE_CLASSES,
} from "../../../Components/Button/button-component";

import {
	updatemeStart,
	UpdateHeadPortraitStart,
} from "../../../Store/users/user.action";

import {
	Form,
	PortraitChange,
	FormUploadPhoto,
	UploadPhostButton,
	ProfileContent,
} from "./profile.style";
const defaultFields = {
	name: "",
	position: "",
	individual: "",
};

const Profile = () => {
	const currentUser = useSelector(selectorCurrentUser);
	const [formFields, setFormFields] = useState(defaultFields);
	const [selectedFile, setSelectedFile] = useState(null);
	const { name, position, individual } = formFields;
	const dispatch = useDispatch();
	const handleChange = (event) => {
		const { name, value } = event.target;
		// 更新formFields 对象里字段 name 为 vaule name加[]是因为它不是一个key
		setFormFields({ ...formFields, [name]: value });
	};

	// 提交
	const handleSubmit = async (event) => {
		event.preventDefault();
		dispatch(updatemeStart(name, position, individual));
	};

	const selecteFileHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};
	console.log("选择的文件： ", selectedFile);

	const fileSubmit = (e) => {
		e.preventDefault();
		const form = new FormData();
		form.append("photo", selectedFile);

		dispatch(UpdateHeadPortraitStart(form));
	};

	return (
		<ContentContainer>
			<h1>个人资料</h1>
			<ProfileContent>
				<PortraitChange>
					<div>
						<Portrait
							imgUrl={`http://42.194.140.99:80/img/users/${currentUser.photo}`}
						/>
						<form action='' onSubmit={fileSubmit}>
							<FormUploadPhoto
								type='file'
								accept='image/*'
								id='photo'
								name='photo'
								onChange={selecteFileHandler}
							/>
							<label htmlFor='photo'> Choose new photo &rarr; </label>
							<UploadPhostButton
								type='submit'
								value='&spades; &diams; 确定 &clubs; &hearts; &rarr;'
							/>
						</form>
					</div>
				</PortraitChange>
				<Form action='' onSubmit={handleSubmit}>
					<FormInput
						label='用户名'
						type='text'
						id='name'
						name='name'
						value={name}
						placeholder='输入用户名'
						onChange={handleChange}
					/>
					<FormInput
						label='职位'
						type='text'
						id='position'
						name='position'
						value={position}
						placeholder='输入职位'
						onChange={handleChange}
					/>
					<FormInput
						label='个人主页'
						type='text'
						id='individual'
						name='individual'
						value={individual}
						placeholder='输入主页简介'
						onChange={handleChange}
					/>
					<Button type='submit' buttonType={BUTTON_TYPE_CLASSES.action_1}>
						提交
					</Button>
				</Form>
			</ProfileContent>
		</ContentContainer>
	);
};

export default Profile;
