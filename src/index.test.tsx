import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

jest.mock("./reportWebVitals", () => jest.fn());

describe("Index test suite", () => {
  it("should render without crashing", () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it("should render the expected content", async () => {
    render(<App />);
    const item = await screen.findByText(/Please wait/);
    expect(item).toHaveTextContent("Please wait");
  });
});
