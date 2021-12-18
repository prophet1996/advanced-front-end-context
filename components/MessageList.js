import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const MessageList = () => {
  const { user: currentUser } = useContext(UserContext);
  return (
    <div className="MessageList">
      <div className="no-messages">
        Your mailbox is empty, {currentUser.firstName}! 🎉
      </div>
    </div>
  );
};

export default MessageList;
