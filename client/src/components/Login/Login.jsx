import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/reducers/userReducer/actions";
import * as action from "../../redux/reducers/modalReducer/actions";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(login(e));
    dispatch(action.closeModal());
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="email" />
      <input name="password" type="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
}
