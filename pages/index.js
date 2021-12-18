import { useContext } from "react";
import LoginPage from "../components/LoginPage";
import MainPage from "../components/MainPage";
import { UserContextProvider, UserContext } from "../context/UserContext";

function Root() {
  const { user: currentUser } = useContext(UserContext);
  return currentUser ? <MainPage /> : <LoginPage />;
}

export default function RootWithProviders() {
  return (
    <UserContextProvider>
      <Root />
    </UserContextProvider>
  );
}
