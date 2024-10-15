import { useAuth } from "./useAuth.js";
import { ThemeDependingButton } from "../themeDependingButton/themeDependingButton.jsx";

const AuthButton = () => {
  const { authState, setAuthState } = useAuth();

  const handleClick = () => {
    setAuthState((status) =>
      status === "authorized" ? "unauthorized" : "authorized",
    );
  };

  const topic = authState === "authorized" ? "Logout" : "Login";

  return <ThemeDependingButton topic={topic} callback={handleClick} />;
};

export default AuthButton;
