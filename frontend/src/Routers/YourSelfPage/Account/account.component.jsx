import { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../../../Components/Form-input/form-input.component";
import ContentContainer from "../Contentcontainer/contentcontainer.component";

import Button, {
	BUTTON_TYPE_CLASSES,
} from "../../../Components/Button/button-component";

import { updatePasswordStart } from "../../../Store/users/user.action";

import { AccountContent, Form } from "./account.style";

const defaultFields = {
	passwordCurrent: "",
	password: "",
	passwordConfirm: "",
};

const Account = () => {
	const [formFields, setFormFields] = useState(defaultFields);

	const dispatch = useDispatch();

	const { passwordCurrent, password, passwordConfirm } = formFields;
	const handleChange = (event) => {
		const { name, value } = event.target;

		// 更新formFields 对象里字段 name 为 vaule name加[]是因为它不是一个key
		setFormFields({ ...formFields, [name]: value });
	};
	// 提交
	const handleSubmit = async (event) => {
		dispatch(updatePasswordStart(passwordCurrent, password, passwordConfirm));
	};
	return (
		<ContentContainer>
			<h1>账号设置</h1>
			<AccountContent>
				<Form action='' onSubmit={handleSubmit}>
					<FormInput
						label='当前密码'
						type='text'
						id='passwordCurrent'
						name='passwordCurrent'
						value={passwordCurrent}
						placeholder='输入当前密码'
						onChange={handleChange}
					/>
					<FormInput
						label='新密码'
						type='text'
						id='password'
						name='password'
						value={password}
						placeholder='输入新密码'
						onChange={handleChange}
					/>
					<FormInput
						label='密码确认'
						type='text'
						id='passwordConfirm'
						name='passwordConfirm'
						value={passwordConfirm}
						placeholder='再次输入新密码'
						onChange={handleChange}
					/>
					<Button type='submit' buttonType={BUTTON_TYPE_CLASSES.action_1}>
						提交
					</Button>
				</Form>
			</AccountContent>
		</ContentContainer>
	);
};

export default Account;
