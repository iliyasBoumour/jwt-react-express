import { useContext } from "react";
import { Store } from "./store";
import jwt_decode from "jwt-decode";
const useAuth = () => {
  const { state } = useContext(Store);
  const {
    auth: { token },
  } = state;
  if (!token) {
    console.log("no token");
    return null;
  }
  const { role, exp } = jwt_decode(token.replace("Bearer ", ""));
  const dateNow = new Date();
  if (exp * 1000 > dateNow.getTime()) {
    return role;
  }
  return null;
};
export default useAuth;
