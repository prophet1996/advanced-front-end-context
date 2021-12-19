import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const MessageList = ({ emails = [], loading, onSelectEmail }) => {
  const { user: currentUser } = useContext(UserContext);
  return (
    <div className="MessageList">
      {loading ? (
        <div className="no-messages">Loading...</div>
      ) : emails.length === 0 ? (
        <div className="no-messages">
          Your mailbox is empty, {currentUser.firstName}! 🎉
        </div>
      ) : (
        <ul>
          {emails.map((email) => (
            <Email
              key={email.id}
              email={email}
              onClick={() => onSelectEmail(email)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export function Email({ email, onClick }) {
  return (
    <li onClick={onClick}>
      <div className="subject">{email.subject}</div>
      <div className="preview">{email.preview}</div>
    </li>
  );
}

export default MessageList;
