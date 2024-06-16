import { render, screen } from "@testing-library/react";
import InputContainer from ".";
import userEvent from "@testing-library/user-event";

describe("test cases for InputContainer component", () => {
  it("renders input and the given prompt correctly", () => {
    render(
      <InputContainer
        enteredPrompt="prompt"
        setEnteredPrompt={jest.fn()}
        submitHandler={jest.fn()}
      />
    );

    const inputContainer = screen.getByPlaceholderText(/enter a prompt here/i);

    expect(inputContainer).toBeInTheDocument();

    expect(inputContainer).toHaveTextContent("prompt");
  });

  it("calls submitHandler on click of send button", async () => {
    const submitHandler = jest.fn();

    render(
      <InputContainer
        enteredPrompt="prompt"
        setEnteredPrompt={jest.fn()}
        submitHandler={submitHandler}
      />
    );

    const submitButton = screen.getByText("send");
    expect(submitButton).toBeInTheDocument();
    await userEvent.click(submitButton);

    expect(submitHandler).toHaveBeenCalledTimes(1);
  });
});
