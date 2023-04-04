import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App test suite", () => {
  render(<App />);
  const linkElement = screen.getByText(/please wait/i);
  expect(linkElement).toBeInTheDocument();
});
