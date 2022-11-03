import React from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import styles from "./Modal.module.css";

export const Modal = ({ setModal, modal }) => {
  const closeModal = () => {
    setModal((prev) => {
      return {
        type: "",
        close: !prev.close,
      };
    });
  };
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          {modal.type === "registration" ? <Register /> : null}
          {modal.type === "login" ? <Login /> : null}
          <button onClick={closeModal}>close</button>
        </div>
      </div>
    </>
  );
};
