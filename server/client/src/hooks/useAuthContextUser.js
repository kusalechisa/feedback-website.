import { AuthContextUser } from "../context/AuthContextUser";
import { useContext } from "react";

// Custom hook to access the AuthContext
export const useAuthContextUser = () => {
  const context = useContext(AuthContextUser);

  // Check if the context is available
  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }

  return context;
};