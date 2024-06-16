import { render, screen } from "@testing-library/react";
import Welcome from ".";
import userEvent from "@testing-library/user-event";

describe("test cases for Welcome component", () => {
  it("renders component correctly", () => {
    render(<Welcome setEnteredPrompt={jest.fn()} />);
  });

  it("calls setEnteredPrompt function when a prompt is clicked", async () => {
    const setEnteredPrompt = jest.fn();
    render(<Welcome setEnteredPrompt={setEnteredPrompt} />);
    const prompt = screen.getAllByTestId("prompt-card")[0];

    await userEvent.click(prompt);
    expect(setEnteredPrompt).toHaveBeenCalledTimes(1);
  });
});
