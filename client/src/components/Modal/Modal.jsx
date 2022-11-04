import React from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import styles from "./Modal.module.css";
import * as action from "../../redux/reducers/modalReducer/actions";
import { useSelector, useDispatch } from "react-redux";

export const Modal = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <h2 className={styles.title}>
            {modal.type === "registration" ? "Регистрация" : "Авторизация"}
          </h2>
          {modal.type === "registration" ? <Register /> : null}
          {modal.type === "login" ? <Login /> : null}
          <button
            className={styles.btn}
            onClick={() => dispatch(action.closeModal())}
          >
            close
          </button>
        </div>
      </div>
    </>
  );
};
