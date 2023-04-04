import React from "react";

import styles from "./Spinner.module.css";

const Spinner: React.FC<{ isLoading: boolean; loadingMessage?: string }> = (
  props
) => {
  if (!props.isLoading) {
    return null;
  }
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
      <div className={styles.message}>
        {props.loadingMessage || "Please wait..."}
      </div>
    </div>
  );
};

export default Spinner;
