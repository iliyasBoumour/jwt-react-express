import { USER_LOGIN } from "./actions/types";
export const reducer = (state, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      const { token } = action.payload;
      localStorage.setItem("token", JSON.stringify(token));
      return { ...state, auth: { token } };
    }
    default:
      return state;
  }
};
