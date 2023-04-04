import { act, render, screen } from "@testing-library/react";
import React from "react";
import ListCustomers from "./ListCustomers";
import { ZellerCustomer } from "../../models/response-model";
import { CustomerRole } from "../../enums/enums";

const customerList: ZellerCustomer[] = [
  {
    id: "1",
    name: "Alice",
    __typename: "",
    email: "",
    role: CustomerRole.ADMIN,
  },
  { id: "2", name: "Bob", __typename: "", email: "", role: CustomerRole.ADMIN },
  {
    id: "3",
    name: "Charlie",
    __typename: "",
    email: "",
    role: CustomerRole.ADMIN,
  },
  {
    id: "4",
    name: "Dave",
    __typename: "",
    email: "",
    role: CustomerRole.ADMIN,
  },
  { id: "5", name: "Eve", __typename: "", email: "", role: CustomerRole.ADMIN },
  {
    id: "6",
    name: "Frank",
    __typename: "",
    email: "",
    role: CustomerRole.ADMIN,
  },
  {
    id: "7",
    name: "Grace",
    __typename: "",
    email: "",
    role: CustomerRole.ADMIN,
  },
  {
    id: "8",
    name: "Heidi",
    __typename: "",
    email: "",
    role: CustomerRole.ADMIN,
  },
  {
    id: "9",
    name: "Ivan",
    __typename: "",
    email: "",
    role: CustomerRole.ADMIN,
  },
  {
    id: "10",
    name: "Jack",
    __typename: "",
    email: "",
    role: CustomerRole.ADMIN,
  },
  {
    id: "11",
    name: "Katie",
    __typename: "",
    email: "",
    role: CustomerRole.ADMIN,
  },
  {
    id: "12",
    name: "Larry",
    __typename: "",
    email: "",
    role: CustomerRole.ADMIN,
  },
  {
    id: "13",
    name: "Mike",
    __typename: "",
    email: "",
    role: CustomerRole.ADMIN,
  },
  {
    id: "14",
    name: "Nancy",
    __typename: "",
    email: "",
    role: CustomerRole.ADMIN,
  },
  {
    id: "15",
    name: "Oliver",
    __typename: "",
    email: "",
    role: CustomerRole.ADMIN,
  },
  {
    id: "16",
    name: "Pam",
    __typename: "",
    email: "",
    role: CustomerRole.ADMIN,
  },
  {
    id: "17",
    name: "Quentin",
    __typename: "",
    email: "",
    role: CustomerRole.ADMIN,
  },
  {
    id: "18",
    name: "Rachel",
    __typename: "",
    email: "",
    role: CustomerRole.MANAGER,
  },
  {
    id: "19",
    name: "Steve",
    __typename: "",
    email: "",
    role: CustomerRole.MANAGER,
  },
  {
    id: "20",
    name: "Tom",
    __typename: "",
    email: "",
    role: CustomerRole.MANAGER,
  },
];

describe("ListCustomers test suite", () => {
  it("renders title correctly", () => {
    render(<ListCustomers title="My Customers" list={customerList} />);
    const title = screen.getByText("My Customers Users");
    expect(title).toBeInTheDocument();
  });

  it("renders 5 customer items in the first page", () => {
    render(<ListCustomers title="My Customers" list={customerList} />);
    const customerItems = screen.getAllByTestId("customer-item");
    expect(customerItems.length).toBe(20);
  });

  it("renders the correct customer items in the first page", () => {
    render(<ListCustomers title="My Customers" list={customerList} />);
    const customerItems = screen.getAllByTestId("customer-item");
    expect(customerItems[0]).toHaveTextContent("Alice");
    expect(customerItems[1]).toHaveTextContent("Bob");
    expect(customerItems[2]).toHaveTextContent("Charlie");
    expect(customerItems[3]).toHaveTextContent("Dave");
    expect(customerItems[4]).toHaveTextContent("Eve");
  });

  it("renders the correct customer items in the second page", () => {
    render(
      <ListCustomers
        title="My Customers"
        list={customerList.concat(customerList, customerList)}
      />
    );
    const paginationLink = screen.getByText("Next >>");
    act(() => {
      paginationLink.click();
    });

    const customerItems = screen.getAllByTestId("customer-item");
    expect(customerItems[0]).toHaveTextContent("KatieAdmin");
    expect(customerItems[1]).toHaveTextContent("LarryAdmin");
    expect(customerItems[2]).toHaveTextContent("MikeAdmin");
    expect(customerItems[3]).toHaveTextContent("NancyAdmin");
    expect(customerItems[4]).toHaveTextContent("OliverAdmin");
  });
});
