import { FromGroup, Input, Label } from "./form-input.style";

const FormInput = ({ label, ...otherProps }) => {
	return (
		<FromGroup>
			<Label shrink={otherProps.value.length} htmlFor={`${otherProps.id}`}>
				{label}
			</Label>
			<Input {...otherProps} />
		</FromGroup>
	);
};

export default FormInput;
