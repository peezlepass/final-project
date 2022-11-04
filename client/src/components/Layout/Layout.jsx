import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/reducers/userReducer/actions";
import { Modal } from "../Modal/Modal";
import * as action from "../../redux/reducers/modalReducer/actions";
import styles from "./Layout.module.css";

export default function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const modal = useSelector((state) => state.modal);

  const logoutUser = (e) => {
    dispatch(logout(e));
    navigate("/");
  };

  return (
    <>
      <header className={styles.header}>
        <nav className="flex gap-x-4">
          {user ? (
            <>
              <span>{user.name}</span>
              <button onClick={logoutUser} type="button">
                Logout
              </button>
            </>
          ) : (
            <>
              <div onClick={() => dispatch(action.openLog())}>Login</div>
              <div onClick={() => dispatch(action.openReg())}>Register</div>
            </>
          )}
        </nav>
      </header>
      {modal.close ? <Modal /> : null}
    </>
  );
}
