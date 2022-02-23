import axios from "axios";
import { USER_LOGIN } from "./types";
export const signin = async (dispatch, user) => {
  const { data } = await axios.post(
    `http://localhost:5000/api/auth/login`,
    user
  );

  dispatch({
    type: USER_LOGIN,
    payload: {
      ...data,
    },
  });
};
