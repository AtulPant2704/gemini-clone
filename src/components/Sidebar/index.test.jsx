import { render, screen } from "@testing-library/react";
import Sidebar from ".";
import userEvent from "@testing-library/user-event";
import { SIDEBAR_ACTION_ITEMS } from "utils/constants";

describe("test cases for Sidebar component", () => {
  it("renders sidebar action items correctly", () => {
    render(
      <Sidebar
        isExpanded={true}
        setIsExpanded={jest.fn()}
        setIsChatPage={jest.fn()}
      />
    );

    SIDEBAR_ACTION_ITEMS.forEach(({ text }) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it("renders sidebar and its children correctly", () => {
    render(
      <Sidebar isExpanded setIsExpanded={jest.fn()} setIsChatPage={jest.fn()} />
    );

    expect(screen.getByText("New chat")).toBeInTheDocument();
    expect(screen.getByText("Try Gemini Advanced")).toBeInTheDocument();
  });

  it("calls setIsExpanded on menu icon click", async () => {
    const setIsExpanded = jest.fn();
    const isExpanded = true;

    render(
      <Sidebar
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        setIsChatPage={jest.fn()}
      />
    );

    const menuIcon = screen.getByText("menu");
    expect(menuIcon).toBeInTheDocument();

    await userEvent.click(menuIcon);

    expect(setIsExpanded).toHaveBeenCalledTimes(1);
    expect(setIsExpanded).toHaveBeenCalledWith(!isExpanded);
  });

  it("calls setIsChatPage on new chat click", async () => {
    const setIsChatPage = jest.fn();

    render(
      <Sidebar
        isExpanded={true}
        setIsExpanded={jest.fn()}
        setIsChatPage={setIsChatPage}
      />
    );

    const newChat = screen.getByText("New chat");
    expect(newChat).toBeInTheDocument();

    await userEvent.click(newChat);

    expect(setIsChatPage).toHaveBeenCalledTimes(1);
  });
});
