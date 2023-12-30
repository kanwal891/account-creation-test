import { DivWithHorizontalAndVerticalCenterContent } from "../../Components/StyledComponents/shared";
import CreateUserForm from "../../Components/createUserForm";
import { Heading } from "../../Components/StyledComponents/createAccountStyles";

const CreateAccount = () => {
  return (
    <DivWithHorizontalAndVerticalCenterContent>
      <div>
        <Heading className="heading">Create User Account</Heading>
        <CreateUserForm />
      </div>
    </DivWithHorizontalAndVerticalCenterContent>
  );
};
export default CreateAccount;
