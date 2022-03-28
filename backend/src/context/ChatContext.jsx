import { createContext, useState } from "react";
import { useContext } from "react";

const chatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const values = {
    messages,
    setMessages
  };

  return <chatContext.Provider value={values}>{children}</chatContext.Provider>;
}

export function useChatContext() {
  return useContext(chatContext);
}
