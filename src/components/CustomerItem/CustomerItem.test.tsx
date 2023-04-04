import React from "react";
import { render, screen } from "@testing-library/react";
import CustomerItem from "./CustomerItem";
import { ZellerCustomer } from "../../models/response-model";
import { CustomerRole } from "../../enums/enums";

describe("CustomerItem test suite", () => {
  const customerList: ZellerCustomer[] = [
    {
      name: "John Doe",
      role: CustomerRole.ADMIN,
      __typename: "",
      email: "",
      id: "1",
    },
    {
      name: "Jane Smith",
      role: CustomerRole.MANAGER,
      __typename: "",
      email: "",
      id: "2",
    },
  ];

  it("renders a list of customers", async () => {
    render(<CustomerItem customerList={customerList} />);
    expect(await screen.findAllByTestId("customer-item")).toHaveLength(2);
  });

  it("renders the customer name and role", async () => {
    render(<CustomerItem customerList={customerList} />);
    expect(await screen.findByText("John Doe")).toBeInTheDocument();
    expect(await screen.findByText("Manager")).toBeInTheDocument();
    expect(await screen.findByText("Jane Smith")).toBeInTheDocument();
  });
});

export {};
