import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import CreateUserform from "../Components/createUserForm";
import { fireEvent } from "@testing-library/dom";
describe("Test create user form:", () => {
  test("test Full Name", async () => {
    // render component
    render(<CreateUserform />);
    // find Full name input field
    const fullNameInput = screen.getByLabelText(/Full Name/i);
    // change input field
    fireEvent.change(fullNameInput, {
      target: { value: "some1ncorrectin9ut" },
    });
    expect(
      screen.queryByText("Full name must not contain symbols."),
    ).not.toBeInTheDocument();
    // click on submit
    const button = screen.getByRole("button", { name: "Submit" });
    await act(async () => {
      fireEvent.click(button);
    });
    expect(
      screen.queryByText("Full name must not contain symbols."),
    ).toBeInTheDocument();

    // required field test
    fireEvent.change(fullNameInput, {
      target: { value: "" },
    });

    // click on submit
    await act(async () => {
      fireEvent.click(button);
    });
    expect(screen.queryByText("Full name is mandatory.")).toBeInTheDocument();
  });

  test("test Email", async () => {
    // render component
    render(<CreateUserform />);
    // find Email input field
    const emailInput = screen.getByLabelText(/Email Address/i);
    // change input field
    fireEvent.change(emailInput, {
      target: { value: "some1ncorrectin9ut" },
    });
    expect(
      screen.queryByText(
        "Sorry, this email address is not valid. Please try again.",
      ),
    ).not.toBeInTheDocument();
    // click on submit
    const button = screen.getByRole("button", { name: "Submit" });
    await act(async () => {
      fireEvent.click(button);
    });
    expect(
      screen.queryByText(
        "Sorry, this email address is not valid. Please try again.",
      ),
    ).toBeInTheDocument();
  });

  test("test Password", async () => {
    // render component
    render(<CreateUserform />);
    // find password input field
    const passwordField = screen.getAllByLabelText(/password/i)[0];

    // TEST For less than 8 chars
    // change input field
    fireEvent.change(passwordField, {
      target: { value: "123456" },
    });
    expect(
      screen.queryByText("Password must contain atleast 8 characters"),
    ).not.toBeInTheDocument();
    // click on submit
    const button = screen.getByRole("button", { name: "Submit" });
    await act(async () => {
      fireEvent.click(button);
    });
    screen.debug(undefined, Infinity);
    expect(
      screen.queryByText("Password must contain atleast 8 characters"),
    ).toBeInTheDocument();

    // Test without cpas
    fireEvent.change(passwordField, {
      target: { value: "1234567a" },
    });
    // click on submit
    await act(async () => {
      fireEvent.click(button);
    });
    screen.debug(undefined, Infinity);
    expect(
      screen.queryByText(
        "Password must contain 1 lowercase character 1 uppercase character and 1 digit",
      ),
    ).toBeInTheDocument();
  });

  test("test contact number", async () => {
    // render component
    render(<CreateUserform />);
    // find Contant number input field
    const conatctInput = screen.getByLabelText(/Contact Number/i);
    // click on submit
    const button = screen.getByRole("button", { name: "Submit" });
    await act(async () => {
      fireEvent.click(button);
    });
    expect(
      screen.queryByText("Contact number is mandatory"),
    ).toBeInTheDocument();

    // incorrect contact number
    fireEvent.change(conatctInput, { target: { value: "123123" } });
    await act(async () => {
      fireEvent.click(button);
    });
    expect(
      screen.queryByText("Contact number is not valid"),
    ).toBeInTheDocument();
  });
});
