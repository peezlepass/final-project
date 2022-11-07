import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../redux/reducers/userReducer/actions";
import { Modal } from "../Modal/Modal";
import * as action from "../../redux/reducers/modalReducer/actions";
import styles from "./Header.module.css";

export default function Header() {
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
        {user ? (
          <div className={styles.container}>
            <div className={styles.logo}>
              <h1 onClick={() => navigate("/")}>ElbrusArcades</h1>
            </div>
            <div className={styles.usermenu}>
              <div className={styles.menu}>
                <div className={styles.profile}>
                  <Link to="/cabinet">{user.name}</Link>
                  <img
                    src="http://www.rw-designer.com/icon-image/14773-128x128x8.png"
                    alt="logo"
                  />
                </div>
                <button onClick={logoutUser} type="button">
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.container}>
            <div className={styles.logo}>
            <h1 onClick={() => navigate("/")}>ElbrusArcades</h1>
            </div>
            <div className={styles.usermenu}>
              <div className={styles.menu}>
                <div onClick={() => dispatch(action.openLog())}>Login</div>
                <div onClick={() => dispatch(action.openReg())}>Register</div>
              </div>
            </div>
          </div>
        )}
      </header>
      {modal.close ? <Modal /> : null}
    </>
  );
}
