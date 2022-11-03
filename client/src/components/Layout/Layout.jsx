import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/reducers/userReducer/actions";
import { Modal } from "../Modal/Modal";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const [modal, setModal] = React.useState({
    type: "",
    close: false,
  });

  const handleLogout = async (e) => {
    e.preventDefault();
    const response = await fetch("/logout", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({}),
    });
    dispatch(logout());
    navigate("/");
  };

  const userLogin = () => {
    setModal((prev) => {
      return {
        type: "login",
        close: !prev.close,
      };
    });
  };

  const userRegister = () => {
    setModal((prev) => {
      return {
        type: "registration",
        close: !prev.close,
      };
    });
  };

  return (
    <>
      <header>
        <nav className="flex gap-x-4">
          {user ? (
            <>
              <span>{user.name}</span>
              <button onClick={handleLogout} type="button">
                Logout
              </button>
            </>
          ) : (
            <>
              {/* <Link to="/login">Login</Link>
              <Link to="/register">Register</Link> */}
              <div onClick={userLogin}>Login</div>
              <div onClick={userRegister}>Register</div>
            </>
          )}
        </nav>
      </header>
      <div>{children}</div>
      {modal.close ? <Modal setModal={setModal} modal={modal} /> : null}
    </>
  );
}
