import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/reducers/userReducer/actions";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
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
  return (
    <>
      <header className={styles.header}>
        <nav className="flex gap-x-4">
          {user ? (
            <>
              <div className={styles.controls}>
                <span>{user.name}</span>
                <button onClick={handleLogout} type="button">
                  Logout
                </button>
              </div>
              <button onClick={() => navigate("/")} className={styles.btn}>
                to main
              </button>
            </>
          ) : (
            <>
              <div className={styles.controls}>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
              <button onClick={() => navigate("/")} className={styles.btn}>
                to main
              </button>
            </>
          )}
        </nav>
      </header>
      <div>{children}</div>
    </>
  );
}
