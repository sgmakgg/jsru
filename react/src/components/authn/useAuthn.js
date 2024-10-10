import { useContext } from "react";
import { AuthnContext } from "./authnContext.js";

export const useAuthn = () => {
  return useContext(AuthnContext);
};
