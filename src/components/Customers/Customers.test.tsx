import { MockedProvider } from "@apollo/client/testing";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ListZellerCustomersResponse } from "../../models/response-model";
import { CustomerRole } from "../../enums/enums";
import { ListZellerCustomers } from "../../queries/queries";
import Customers from "./Customers";
import { toTitleCase } from "../../utils/utils";

const mockData: ListZellerCustomersResponse = {
  listZellerCustomers: {
    items: [
      {
        id: "1",
        role: CustomerRole.ADMIN,
        __typename: "",
        email: "",
        name: "John doe",
      },
      {
        id: "2",
        role: CustomerRole.MANAGER,
        __typename: "",
        email: "",
        name: "Jane doe",
      },
    ],
    __typename: "",
  },
};

const mocks = [
  {
    request: {
      query: ListZellerCustomers,
    },
    result: {
      data: mockData,
    },
  },
];

describe("Customers test suite", () => {
  it("should render the list of customers", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Customers />
      </MockedProvider>
    );

    await waitFor(() => screen.findByText("Please wait loading customers..."));
    await waitFor(() => screen.findByText("User Types"));

    const adminRadioButton = screen.getByLabelText(
      toTitleCase(CustomerRole.ADMIN)
    );
    const managerRadioButton = screen.getByLabelText(
      toTitleCase(CustomerRole.MANAGER)
    );
    expect(adminRadioButton).toBeChecked();
    expect(managerRadioButton).not.toBeChecked();

    const customerItems = screen.getAllByTestId("customer-item");
    expect(customerItems.length).toBe(1);

    userEvent.click(managerRadioButton);

    await waitFor(() =>
      expect(screen.queryByText("Please wait loading customers...")).toBeNull()
    );

    const managerCustomerItems = screen.getAllByTestId("customer-item");
    expect(managerCustomerItems.length).toBe(1);

    userEvent.click(adminRadioButton);

    await waitFor(() =>
      expect(screen.queryByText("Please wait loading customers...")).toBeNull()
    );

    const adminCustomerItems = screen.getAllByTestId("customer-item");
    expect(adminCustomerItems.length).toBe(1);
  });

  it("should show error message when there is an error in the query", async () => {
    const errorMessage = "Something went wrong!";
    const errorMocks = [
      {
        request: {
          query: ListZellerCustomers,
        },
        error: new Error(errorMessage),
      },
    ];

    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <Customers />
      </MockedProvider>
    );

    await waitFor(async () =>
      expect(
        await screen.findByText(`Error: ${errorMessage}`)
      ).toBeInTheDocument()
    );
  });

  it("should update the selected customer type when the radio buttons are clicked", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Customers />
      </MockedProvider>
    );

    await waitFor(() => screen.findByText("Please wait loading customers..."));
    await waitFor(() => screen.findByText("User Types"));

    const adminRadioButton = screen.getByLabelText(
      toTitleCase(CustomerRole.ADMIN)
    );
    const managerRadioButton = screen.getByLabelText(
      toTitleCase(CustomerRole.MANAGER)
    );
    expect(adminRadioButton).toBeChecked();
    expect(managerRadioButton).not.toBeChecked();

    userEvent.click(managerRadioButton);
    expect(adminRadioButton).not.toBeChecked();
    expect(managerRadioButton).toBeChecked();
  });
});
