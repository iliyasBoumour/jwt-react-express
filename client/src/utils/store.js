import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const Store = createContext();

const initialState = {
  auth: {
    token: JSON.parse(localStorage.getItem("token")),
  },
};
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
};
