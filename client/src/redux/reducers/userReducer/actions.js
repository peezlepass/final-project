import * as type from "./types";

export function register(user) {
  return { type: type.REGISTER, payload: user };
}

export function login(user) {
  return { type: type.LOGIN, payload: user };
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
