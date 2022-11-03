import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/reducers/userReducer/actions";
import * as action from "../../redux/reducers/modalReducer/actions";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(register(e));
    dispatch(action.closeModal());
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="name" />
      <input name="email" placeholder="email" />
      <input name="password" type="password" placeholder="password" />
      <button type="submit">Register</button>
    </form>
  );
}
