const MessageList = ({ currentUser }) => {
  return (
    <div className="MessageList">
      <div className="no-messages">
        Your mailbox is empty, {currentUser.firstName}! 🎉
      </div>
    </div>
  );
};

export default MessageList;
