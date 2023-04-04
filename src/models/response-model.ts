import { CustomerRole } from "../enums/enums";

export interface ListZellerCustomersResponse {
  listZellerCustomers: ListZellerCustomers;
}

export interface ListZellerCustomers {
  items: ZellerCustomer[];
  __typename: string;
}

export interface ZellerCustomer {
  email: string;
  id: string;
  name: string;
  role: CustomerRole;
  __typename: string;
}
