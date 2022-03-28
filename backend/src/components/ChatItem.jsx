import React from "react";

function ChatItem({ message }) {
  return (
    <div className={`chat-item ${message.sendMe && "right"}`}>
      {message.message}
    </div>
  );
}

export default ChatItem;
