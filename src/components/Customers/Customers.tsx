import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { ListZellerCustomers } from "../../queries/queries";
import ListCustomers from "../ListCustomers/ListCustomers";
import {
  ListZellerCustomersResponse,
  ZellerCustomer,
} from "../../models/response-model";
import { CustomerRole } from "../../enums/enums";
import { css, toTitleCase } from "../../utils/utils";

import styles from "./Customers.module.css";
import Spinner from "../Spinner/Spinner";

const Customers: React.FC = () => {
  const { loading, error, data } =
    useQuery<ListZellerCustomersResponse>(ListZellerCustomers);
  const [selectedCustomerType, setCustomerType] = useState(CustomerRole.ADMIN);
  const handleCustomerType = (e: any) => {
    setCustomerType(e.target.value);
  };
  const handleClick = (target: CustomerRole) => {
    setCustomerType(target);
  };
  return (
    <>
      <Spinner
        isLoading={loading}
        loadingMessage={"Please wait loading customers..."}
      />
      {error && <div>Error: {error.message}</div>}
      {!loading && (
        <div className={styles.root}>
          <div className={styles.borderBottom}>
            <div className={styles.flex}>
              <span className={styles.title}>User Types</span>
            </div>
            <div className={css(styles.flex, styles.bottomMargin)}>
              <div
                onClick={() => handleClick(CustomerRole.ADMIN)}
                className={css(
                  selectedCustomerType === CustomerRole.ADMIN
                    ? styles.selected
                    : "",
                  styles.item
                )}
              >
                <input
                  className={styles.pointer}
                  id="ADMIN"
                  title={toTitleCase(CustomerRole.ADMIN as string)}
                  type="radio"
                  name="customerType"
                  value={CustomerRole.ADMIN}
                  onChange={handleCustomerType}
                  checked={selectedCustomerType === CustomerRole.ADMIN}
                />
                <label
                  className={css(styles.marginLeft, styles.pointer)}
                  htmlFor="ADMIN"
                >
                  {toTitleCase(CustomerRole.ADMIN)}
                </label>
              </div>
              <div
                onClick={() => handleClick(CustomerRole.MANAGER)}
                className={css(
                  selectedCustomerType === CustomerRole.MANAGER
                    ? styles.selected
                    : "",
                  styles.item
                )}
              >
                <input
                  className={styles.pointer}
                  id={"MANAGER"}
                  title={toTitleCase(CustomerRole.MANAGER as string)}
                  type="radio"
                  name="customerType"
                  value={CustomerRole.MANAGER}
                  onChange={handleCustomerType}
                  checked={selectedCustomerType === CustomerRole.MANAGER}
                />
                <label
                  className={css(styles.marginLeft, styles.pointer)}
                  htmlFor="MANAGER"
                >
                  {toTitleCase(CustomerRole.MANAGER)}
                </label>
              </div>
            </div>
          </div>
          <div>
            <ListCustomers
              title={toTitleCase(selectedCustomerType)}
              list={
                data?.listZellerCustomers.items.filter(
                  (item) => item.role === selectedCustomerType
                ) as ZellerCustomer[]
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Customers;
