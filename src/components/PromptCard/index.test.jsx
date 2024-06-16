import { render, screen } from "@testing-library/react";
import PromptCard from ".";
import userEvent from "@testing-library/user-event";

describe("test cases for PromptCard component", () => {
  it("renders prompt correctly", () => {
    render(
      <PromptCard icon="icon" prompt="prompt" promptHandler={jest.fn()} />
    );

    expect(screen.getByText("prompt")).toBeInTheDocument();
  });

  it("calls promptHandler on click", async () => {
    const promptHandler = jest.fn();
    render(
      <PromptCard icon="icon" prompt="prompt" promptHandler={promptHandler} />
    );

    const prompt = screen.getByTestId("prompt-card");

    expect(prompt).toBeInTheDocument();

    await userEvent.click(prompt);

    expect(promptHandler).toHaveBeenCalledTimes(1);
    expect(promptHandler).toHaveBeenCalledWith("prompt");
  });
});
