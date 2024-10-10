import { AuthnContext } from "./authnContext";
import { useState } from "react";

export const AuthnContextProvider = ({ children }) => {
  const [authnState, setAuthnState] = useState(undefined);

  return (
    <AuthnContext.Provider value={{ authnState, setAuthnState }}>
      {children}
    </AuthnContext.Provider>
  );
};
