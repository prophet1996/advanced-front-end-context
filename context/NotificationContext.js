/* eslint-disable import/no-anonymous-default-export */
import { createContext, useState } from "react";

const NotificationContext = createContext();

const NotificationContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const notify = (text) => {
    setMessages([
      ...messages,
      { id: Math.random(), text, addedAt: new Date().getTime() },
    ]);
  };
  const removeMessage = (id) => {
    setMessages(messages.filter(({ id: messageId }) => messageId !== id));
  };

  return (
    <NotificationContext.Provider value={{ messages, notify }}>
      <div className="notification-wrapper">
        <ul>
          {messages.map((message) => (
            <Notification
              key={message.id}
              message={message}
              onClose={() => removeMessage(message.id)}
            ></Notification>
          ))}
        </ul>
        {children}
      </div>
    </NotificationContext.Provider>
  );
};

function Notification({ message, onClose }) {
  return (
    <li>
      {message.text}
      <button className="close" onClick={onClose}>
        X
      </button>
    </li>
  );
}

export { NotificationContext, NotificationContextProvider };
