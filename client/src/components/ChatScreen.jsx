import { useChatContext } from "../context/ChatContext";
import ChatItem from "./ChatItem";
import ScrollableFeed from "react-scrollable-feed";

function ChatScreen() {
  const { messages } = useChatContext();
  return (
    <div className="chat-screen">
      <ScrollableFeed forceScroll={true}>
        {messages.map((message, index) => (
          <ChatItem key={index} message={message} />
        ))}
      </ScrollableFeed>
    </div>
  );
}

export default ChatScreen;
