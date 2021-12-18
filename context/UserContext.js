/* eslint-disable import/no-anonymous-default-export */
import { createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };
  return (
    <UserContext.Provider
      value={{ user: currentUser, logout: handleLogout, login: handleLogin }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
