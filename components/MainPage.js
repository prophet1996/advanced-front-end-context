import { useContext } from "react";
import Header from "./Header";
import MessageList from "./MessageList";
import MessageViewer from "./MessageViewer";
import { EmailContext } from "../context/EmailContext";

const MainPage = () => {
  const { currentEmail, onSelectEmail, emails, loading } =
    useContext(EmailContext) || {};
  if (emails === undefined) {
    throw Error("MainPage requires a Email Context provider");
  }
  return (
    <main>
      <Header />
      {currentEmail ? (
        <MessageViewer email={currentEmail} onSelectEmail={onSelectEmail} />
      ) : (
        <MessageList
          emails={emails}
          onSelectEmail={onSelectEmail}
          loading={loading}
        />
      )}
    </main>
  );
};

export default MainPage;
