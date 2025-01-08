import { createContext } from "react";
import { useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  
  const storetokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  return (
    <AuthContext.Provider value={{ storetokenInLS,credentials,setCredentials }}>
      {children}
    </AuthContext.Provider>
  );
};
