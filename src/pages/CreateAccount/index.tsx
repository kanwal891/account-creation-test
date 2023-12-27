import { DivWithHorizontalAndVerticalCenterContent } from "../../components/StyledComponents/shared";
import CreateUserForm from "../../components/createUserForm";
import { Heading } from "../../components/StyledComponents/createAccountStyles";

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
