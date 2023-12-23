import {
	DivWithhorizontalAndVerticalCenterContent,
} from '../../Components/StyledComponents/common';
import CreateUserform from '../../Components/createUserForm';
import { Heading } from '../../Components/StyledComponents/createAccountStyles';

const CreateAccount = () => {
	return (
		<DivWithhorizontalAndVerticalCenterContent>
			<div>
				<Heading className="heading">Create User Account</Heading>
				<CreateUserform />
			</div>
		</DivWithhorizontalAndVerticalCenterContent>
	);
};
export default CreateAccount;
