import { render, screen } from "@testing-library/react";
import Chat from ".";

const props = [{ prompt: "This is a prompt", answer: "this is answer" }];

describe("test cases for Chat component", () => {
  it("renders loader on initial mount", () => {
    render(<Chat response={props} />);

    const loader = screen.getByTestId("loader");

    expect(loader).toBeInTheDocument();
  });

  it("renders response after loader is removed", async () => {
    jest.useFakeTimers();

    render(<Chat response={props} />);

    const loader = screen.getByTestId("loader");

    expect(loader).toBeInTheDocument();

    jest.runAllTimers();

    const question = screen.getByText(/this is a prompt/i);
    const answer = await screen.findByText(/this is answer/i);

    expect(question).toBeInTheDocument();
    expect(answer).toBeInTheDocument();
  });
});
