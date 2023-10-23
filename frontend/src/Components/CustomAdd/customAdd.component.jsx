import { useState } from "react";
import { useDispatch } from "react-redux";
import { message } from "antd";
import FormInput from "../Form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/button-component";

import { customAddStart } from "../../Store/users/user.action";

import { CustomAddContainer, Form } from "./customAdd.style";

const defaultFields = {
	linkName: "",
	href: "",
	imgsrc: "",
	imgAlt: "",
};

const CustomAdd = (props) => {
	const dispatch = useDispatch();
	const [formFields, setFormFields] = useState(defaultFields);
	const { linkName, href, imgsrc, imgAlt } = formFields;

	const [messageApi, contextHolder] = message.useMessage();
	const handleChange = (event) => {
		const { name, value } = event.target;
		// 更新formFields 对象里字段 name 为 vaule name加[]是因为它不是一个key
		setFormFields({ ...formFields, [name]: value });
	};

	// 添加
	const handleSubmit = async (event) => {
		event.preventDefault();
		const arr = [...props.friendShips, formFields];
		if (!!arr) {
			messageApi.open({
				type: "success",
				content: "添加成功",
			});
		}
		dispatch(customAddStart([...new Set(arr)]));
	};

	return (
		<CustomAddContainer>
			{contextHolder}
			<Form action='' onSubmit={handleSubmit}>
				<FormInput
					label='名称'
					type='text'
					id='linkName'
					name='linkName'
					value={linkName}
					placeholder='输入名称'
					onChange={handleChange}
				/>
				<FormInput
					label='网址'
					type='text'
					id='href'
					name='href'
					value={href}
					placeholder='输入网址'
					onChange={handleChange}
				/>
				<FormInput
					label='图标'
					type='text'
					id='imgsrc'
					name='imgsrc'
					value={imgsrc}
					placeholder='输入图标URI(最好是)'
					onChange={handleChange}
				/>
				<FormInput
					label='图标名'
					type='text'
					id='imgAlt'
					name='imgAlt'
					value={imgAlt}
					placeholder='输入图标名称'
					onChange={handleChange}
				/>
				<Button type='submit' buttonType={BUTTON_TYPE_CLASSES.action_1}>
					添加
				</Button>
			</Form>
		</CustomAddContainer>
	);
};

export default CustomAdd;
