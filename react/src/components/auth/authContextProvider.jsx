import { AuthContext } from "./authContext.js";
import { useState } from "react";

export const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState(undefined);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
