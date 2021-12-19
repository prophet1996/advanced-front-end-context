/* eslint-disable import/no-anonymous-default-export */
import { createContext, useEffect, useState } from "react";
import { fetchEmails } from "../components/api";

const EmailContext = createContext();

const EmailContextProvider = ({ children }) => {
  const [emailState, setEmailState] = useState({
    emails: [],
    currentEmail: null,
    error: null,
    loading: false,
  });
  useEffect(() => {
    //run only on mount
    const _fetchEmail = async () => {
      const emails = await fetchEmails().catch((error) =>
        setEmailState({ ...emailState, loading: false, error })
      );
      setEmailState({ ...emailState, emails, loading: false });
    };

    if (!emailState.emails.length) {
      setEmailState({ ...emailState, loading: true });
      _fetchEmail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
