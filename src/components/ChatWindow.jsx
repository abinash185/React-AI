import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import { useRef, useEffect } from "react";

export default function ChatWindow({ messages, loading }) {
  const endRef = useRef();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} />
      ))}

      {loading && <TypingIndicator />}

      <div ref={endRef}></div>
    </div>
  );
}
