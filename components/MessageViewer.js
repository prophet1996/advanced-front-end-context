const MessageViewer = ({ email, onSelectEmail }) => (
  <div className="MessageViewer">
    <button onClick={() => onSelectEmail(null)}>Back</button>
    <h2>{email.subject}</h2>
    <div>{email.body}</div>
  </div>
);

export default MessageViewer;
