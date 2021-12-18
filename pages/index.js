import { useState } from "react";
import LoginPage from "../components/LoginPage";
import MainPage from "../components/MainPage";

export default function Root() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return currentUser ? (
    <MainPage currentUser={currentUser} onLogout={handleLogout} />
  ) : (
    <LoginPage onLogin={handleLogin} />
  );
}
