import * as type from "./types";

export function register(e) {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  return async (dispatch) => {
    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const result = await response.json();
    dispatch({ type: type.REGISTER, payload: result.user });
  };
}

export function login(e) {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  return async (dispatch) => {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();
    dispatch({ type: type.LOGIN, payload: result.user });
  };
}

export function logout(e) {
  e.preventDefault();
  return async (dispatch) => {
    const response = await fetch("/logout", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({}),
    });
    dispatch({ type: type.LOGOUT });
  };
}

export function updateInfo(e) {
  e.preventDefault();
  const userData = {
    gender: e.target.userGender.value,
    country: e.target.userCountry.value,
    birthday: `${e.target.day.value}.${e.target.month.value}.${e.target.year.value}`,
  };
  return async (dispatch) => {
    const response = await fetch("/changeInfo", {
      method: "PUT",
      body: JSON.stringify(userData),
      headers: { "Content-type": "application/json" },
    });
    const user = await response.json();
    dispatch({ type: type.UPDATE_USER, payload: user.message });
  };
}
