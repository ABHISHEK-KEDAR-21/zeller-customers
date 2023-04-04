import { ZellerCustomer } from "../../models/response-model";
import { css, toTitleCase } from "../../utils/utils";

import styles from "../ListCustomers/ListCustomers.module.css";

const CustomerItem: React.FC<{ customerList: ZellerCustomer[] }> = ({
  customerList,
}) => {
  return (
    <>
      {customerList &&
        customerList.map((item: ZellerCustomer, idx: number) => (
          <div
            key={idx}
            className={css(styles.flex, styles.item)}
            data-testid="customer-item"
          >
            <div>
              <img
                className={styles.avatar}
                alt={item.name}
                src={`https://ui-avatars.com/api/?name=${item.name}&length=1&color=1879d1&background=e8f2fb&`}
              />
            </div>
            <div className={styles.name}>
              <div>{item.name}</div>
              <div className={styles.role}>{toTitleCase(item.role)}</div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CustomerItem;
