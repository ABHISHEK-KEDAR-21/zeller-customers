import React, { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";

import { ZellerCustomer } from "../../models/response-model";
import { css } from "../../utils/utils";
import CustomerItem from "../CustomerItem/CustomerItem";

import styles from "./ListCustomers.module.css";

interface IListCustomersProps {
  list: ZellerCustomer[];
  title: string;
}

const PAGE_SIZE = 50;

const ListCustomers: React.FC<IListCustomersProps> = (props) => {
  const previousTitle = useRef(props.title);
  const customerList = props.list || [];

  const [currentPageNo, setPageNo] = useState(0);
  useEffect(() => {
    if (previousTitle.current !== props.title) {
      setPageNo(0);
    }
    previousTitle.current = props.title;
  }, [props.title]);
  const newPageNo = currentPageNo + PAGE_SIZE;

  const currentCustomerList = customerList.slice(currentPageNo, newPageNo);
  const pageCount = Math.ceil(customerList.length / PAGE_SIZE);

  const handlePageClick = (event: any) => {
    const newPageNo = (event.selected * PAGE_SIZE) % customerList.length;
    setPageNo(newPageNo);
  };

  return (
    <>
      <div className={css(styles.flex, styles.column)}>
        <div className={styles.marginTitle}>
          <span className={styles.title}>{props.title} Users</span>
        </div>
        <CustomerItem customerList={currentCustomerList} />
      </div>
      {customerList.length > PAGE_SIZE && (
        <div id="container">
          <ReactPaginate
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            breakLabel="..."
            nextLabel="Next >>"
            previousLabel="<< Previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
          />
        </div>
      )}
    </>
  );
};

export default ListCustomers;
