import { useState } from "react";
import { useChatContext } from "../context/ChatContext";
import { send } from "../socketApi";

function ChatFrom() {
  const [message, setMessage] = useState("");

  const { setMessages } = useChatContext();

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMessages((prevState) => [...prevState, {message, sendMe: true}])

    send(message)

    setMessage("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className="chat-input" onChange={handleChange} value={message} />
      </form>
    </>
  );
}

export default ChatFrom;
