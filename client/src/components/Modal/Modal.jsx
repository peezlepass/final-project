import React from "react";
import styles from "./Modal.module.css";

export const Modal = () => {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <button>close</button>
        </div>
      </div>
    </>
  );
};
