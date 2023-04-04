import React from "react";
import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner test suite", () => {
  test("renders nothing when isLoading is false", async () => {
    const { container } = render(<Spinner isLoading={false} />);
    expect(container.textContent).toBe("");
  });

  test("renders with default message when no loadingMessage is provided", async () => {
    render(<Spinner isLoading={true} />);
    expect(await screen.findByText("Please wait...")).toBeInTheDocument();
  });

  test("renders with provided loadingMessage when isLoading is true and loadingMessage is provided", async () => {
    const message = "Custom loading message";
    render(<Spinner isLoading={true} loadingMessage={message} />);
    expect(await screen.findByText(message)).toBeInTheDocument();
  });
});
export {};
