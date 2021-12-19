import { useContext } from "react";
import LoginPage from "../components/LoginPage";
import MainPage from "../components/MainPage";
import { EmailContextProvider } from "../context/EmailContext";
import { UserContextProvider, UserContext } from "../context/UserContext";

function Root() {
  const { user: currentUser } = useContext(UserContext);
  return currentUser ? (
    <EmailContextProvider>
      <MainPage />
    </EmailContextProvider>
  ) : (
    <LoginPage />
  );
}

export default function RootWithProviders() {
  return (
    <UserContextProvider>
      <Root />
    </UserContextProvider>
  );
}
