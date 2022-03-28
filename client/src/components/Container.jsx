import ChatScreen from "./ChatScreen";
import ChatForm from "./ChatForm";
import { init, subscribeChat, messageList } from "../socketApi";
import { useEffect } from "react";
import { useChatContext } from "../context/ChatContext";

function Container() {
  const { setMessages } = useChatContext();

  useEffect(() => {
    init();

    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message }]);
    });

    messageList((data) => {
      setMessages(data)
    });
  }, []);

  return (
    <div className="container">
      <ChatScreen />
      <ChatForm />
    </div>
  );
}

export default Container;
