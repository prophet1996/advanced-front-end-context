/* eslint-disable import/no-anonymous-default-export */
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { fetchEmails, fetchLatestEmails } from "../components/api";
import { NotificationContext } from "./NotificationContext";

const EmailContext = createContext();

const EmailContextProvider = ({ children }) => {
  const [emailState, setEmailState] = useState({
    emails: [],
    currentEmail: null,
    error: null,
    loading: false,
  });
  const { notify } = useContext(NotificationContext);

  useEffect(() => {
    if (!emailState.emails.length) {
      //run only on mount
      const _fetchEmail = async () => {
        const emails = await fetchEmails().catch((error) =>
          setEmailState({ ...emailState, loading: false, error })
        );
        setEmailState({ ...emailState, emails, loading: false });
      };
      setEmailState({ ...emailState, loading: true });
      _fetchEmail();
    }

    const refreshEmails = async () => {
      if (!emailState.loading) {
        const newEmails = await fetchLatestEmails().catch((err) =>
          console.log(err)
        );
        if (!newEmails.length) return;
        setEmailState({
          ...emailState,
          emails: [...emailState.emails, ...newEmails],
        });
        if (notify) notify(`You have ${newEmails.length} new messages!`);
      }
    };
    const fetchInterval = setInterval(() => refreshEmails(), 3000);
    return () => {
      clearInterval(fetchInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailState.emails, emailState.loading]);

  const handleSelectEmail = (email) =>
    setEmailState({ ...emailState, currentEmail: email });

  return (
    <EmailContext.Provider
      value={{ ...emailState, onSelectEmail: handleSelectEmail }}
    >
      {children}
    </EmailContext.Provider>
  );
};

export { EmailContext, EmailContextProvider };
